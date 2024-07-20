package api

import (
	"cockroachai/config"
	"cockroachai/utils"
	"net/http"
	"net/http/httputil"
	"net/url"

	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
)

func ProxyApi(r *ghttp.Request) {
	ctx := r.Context()
	u, _ := url.Parse(config.GatewayUrl)
	proxy := httputil.NewSingleHostReverseProxy(u)
	proxy.ModifyResponse = func(response *http.Response) error {
		// 移除cookie
		response.Header.Del("Set-Cookie")
		if response.StatusCode >= 400 {
			g.Log().Warning(ctx, "ProxyApi:", response.StatusCode, response.Request.Method, response.Request.URL.String())
		} else {
			g.Log().Info(ctx, "ProxyApi:", response.StatusCode, response.Request.Method, response.Request.URL.String())
		}
		return nil
	}
	//accessToken := config.GetAccessToken(ctx)
	r.Request.Header.Set("Authorization", r.GetHeader("Authorization"))
	utils.HeaderModify(&r.Request.Header)
	newreq := r.Request.Clone(ctx)
	newreq.URL.Host = u.Host
	newreq.URL.Scheme = u.Scheme
	newreq.Host = u.Host
	proxy.ServeHTTP(r.Response.RawWriter(), newreq)

}
