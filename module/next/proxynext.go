package next

import (
	"bytes"
	"cockroachai/config"
	"cockroachai/utils"
	"fmt"
	"io"
	"net/http"
	"net/http/httputil"
	"net/url"
	"strings"

	"github.com/gogf/gf/v2/encoding/gjson"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
)

func ProxyNext(r *ghttp.Request) {
	ctx := r.Context()
	path := r.Request.URL.Path
	userToken := r.Session.MustGet("userToken").String()
	if userToken == "" {
		r.Response.WriteJson(g.Map{})
		return
	}
	// 替换path中的版本号
	path = strings.Replace(path, config.CacheBuildId, config.BuildId, 1)
	r.Request.URL.Path = path
	u, _ := url.Parse(config.GatewayUrl)
	proxy := httputil.NewSingleHostReverseProxy(u)
	proxy.ModifyResponse = func(response *http.Response) error {
		// 移除cookie
		response.Header.Del("Set-Cookie")
		if response.StatusCode >= 400 {
			g.Log().Warning(ctx, "ProxyNext:", response.StatusCode, response.Request.Method, response.Request.URL.String())
		} else {
			g.Log().Info(ctx, "ProxyNext:", response.StatusCode, response.Request.Method, response.Request.URL.String())
		}
		if response.StatusCode == 200 && response.Header.Get("Content-Type") == "application/json" {
			body, err := io.ReadAll(response.Body)
			if err != nil {
				g.Log().Error(ctx, err)
				return err
			}
			resJson := gjson.New(body)
			resJson.Set("pageProps.user.id", "user-"+userToken)
			resJson.Set("pageProps.user.name", "share")
			resJson.Set("pageProps.user.email", "share@closeai.biz")
			resJson.Set("pageProps.user.picture", "/avatar.png")
			resJson.Set("pageProps.user.image", "/avatar.png")
			resJson.Set("pageProps.cfConnectingIp", "1.1.1.1")
			resJson.Remove("pageProps.statsig")
			// resJson.Dump()

			body = resJson.MustToJson()
			response.Body = io.NopCloser(bytes.NewReader(body))
			response.ContentLength = int64(len(body))
			response.Header.Set("Content-Length", fmt.Sprint(len(body)))
			response.Header.Del("Content-Encoding")

		}
		return nil
	}
	header := r.Request.Header
	header.Set("Origin", "https://chat.openai.com")
	header.Set("Referer", "https://chat.openai.com/")
	header.Del("Cookie")
	header.Del("Accept-Encoding")
	utils.HeaderModify(&r.Request.Header)
	//if userToken != "" {
	//	refreshCookie := config.GetRefreshCookie(ctx)
	//	if refreshCookie != "" {
	//		r.Request.AddCookie(&http.Cookie{
	//			Name:  "__Secure-next-auth.session-token",
	//			Value: refreshCookie,
	//		})
	//	}
	//}
	utils.HeaderModify(&r.Request.Header)
	newreq := r.Request.Clone(ctx)
	newreq.URL.Host = u.Host
	newreq.URL.Scheme = u.Scheme
	newreq.Host = u.Host
	proxy.ServeHTTP(r.Response.RawWriter(), newreq)

}
