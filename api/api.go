package api

import (
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"net/http"
)

func init() {
	s := g.Server()
	group := s.Group("/")
	group.GET("/", Index)
	group.ALL("/v1/rgstr", func(r *ghttp.Request) {
		r.Response.WriteJsonExit(g.Map{"status": "ok"})
	})
	group.ALL("/v1/initialize", func(r *ghttp.Request) {
		r.Response.WriteJsonExit(g.Map{"status": "ok"})
	})
	group.ALL("/backend-api/o11y/v1/traces", func(r *ghttp.Request) {
		r.Response.WriteJsonExit(g.Map{"status": "ok"})
	})
	group.GET("/c/:convId", C)
	group.GET("/g/:gizmoId", G)

	group.GET("/gpts", Gpts)
	group.GET("/gpts/mine", Mine)

	group.GET("/api/auth/session", AuthSession)
	group.ALL("/public-api/*any", ProxyApi)
	group.GET("/api/auth/providers", AuthProviders)
	group.GET("/api/auth/csrf", AuthCsrf)
	group.POST("/api/auth/signin/login-web", AuthSigninLoginWeb)
	group.POST("/api/auth/signin/auth0", AuthSigninAuth0)
	group.GET("/login", Login)
	group.POST("/login", LoginPost)
	group.GET("/auth/logout", AuthLogout)
	group.ALL("/public-api/referral/invites/*any", NotFound)  //禁用邀请
	group.POST("/backend-api/accounts/data_export", NotFound) // 禁用导出
	group.POST("/backend-api/payments/checkout", NotFound)    // 禁用支付

}

// NotFound 404
func NotFound(r *ghttp.Request) {
	r.Response.WriteStatus(http.StatusNotFound)
}

// Init initializes the api module.
func Init(ctx g.Ctx) {
	g.Log().Info(ctx, "Api module initialized")
}
