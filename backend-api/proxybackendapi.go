package backendapi

import (
	"bytes"
	"cockroachai/config"
	"cockroachai/utils"
	"fmt"
	"io"
	"net/http"
	"net/http/httputil"
	"net/url"

	"github.com/gogf/gf/v2/encoding/gjson"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
)

func ProxyBackendApi(r *ghttp.Request) {
	ctx := r.Context()
	userToken := r.Session.MustGet("userToken").String()
	path := r.RequestURI
	u, _ := url.Parse(config.GatewayUrl)
	proxy := httputil.NewSingleHostReverseProxy(u)
	proxy.ModifyResponse = func(response *http.Response) error {
		// 移除cookie
		response.Header.Del("Set-Cookie")
		if response.StatusCode >= 400 {
			g.Log().Warning(ctx, "ProxyBackendApi:", response.StatusCode, response.Request.Method, response.Request.URL.String())
		} else {
			g.Log().Info(ctx, "ProxyBackendApi:", response.StatusCode, response.Request.Method, response.Request.URL.String())
		}
		if path == "/backend-api/me" && response.StatusCode == 200 {
			body, err := io.ReadAll(response.Body)
			if err != nil {
				g.Log().Error(ctx, err)
				return err
			}
			resJson := gjson.New(body)
			resJson.Set("email", "share@closeai.com")
			resJson.Set("name", "share")
			resJson.Set("picture", "/avatars.png")
			resJson.Set("phone_number", "+1911")
			resJson.Set("id", "user-"+userToken)
			resJson.Set("orgs.data.0.name", "user-"+userToken)
			resJson.Set("orgs.data.0.description", "OpenAI")
			body = resJson.MustToJson()
			response.Body = io.NopCloser(bytes.NewReader(body))
			response.ContentLength = int64(len(body))
			response.Header.Set("Content-Length", fmt.Sprint(len(body)))
			response.Header.Del("Content-Encoding")

		}

		return nil
	}
	header := r.Request.Header
	header.Del("Accept-Encoding")
	header.Set("Authorization", r.GetHeader("Authorization"))
	utils.HeaderModify(&r.Request.Header)
	newreq := r.Request.Clone(ctx)
	newreq.URL.Host = u.Host
	newreq.URL.Scheme = u.Scheme
	newreq.Host = u.Host
	proxy.ServeHTTP(r.Response.RawWriter(), newreq)

}
