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
	group.ALL("/v1/initialize", ProxyApi)
	group.ALL("/backend-api/o11y/v1/traces", func(r *ghttp.Request) {
		r.Response.WriteJsonExit(g.Map{"status": "ok"})
	})
	group.ALL("/ces/v1/projects/oai/settings", func(r *ghttp.Request) {
		r.Response.WriteJsonExit(`{"integrations":{"Segment.io":{"apiHost":"chatgpt.com/ces/v1","apiKey":"oai"}}}`)
	})
	group.GET("/c/:convId", C)
	group.GET("/g/:gizmoId", G)
	group.GET("/g/:gizmoId/c/:convId", G)
	group.GET("/gpts", Gpts)
	group.GET("/search", Search)
	group.GET("/gpts/mine", Mine)
	group.GET("/gpts/editor/:slug", Slug)
	group.GET("/gpts/editor", Slug)

	group.GET("/api/auth/session", AuthSession)
	group.ALL("/public-api/*any", ProxyApi)
	group.ALL("/manifest-search.json", func(r *ghttp.Request) {
		r.Response.Write(`{
  "name": "SearchGPT",
  "short_name": "SearchGPT",
  "start_url": "/search",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff",
  "icons": [
    {
      "src": "/images/search/searchgpt-icon-48x48.png",
      "type": "image/png",
      "sizes": "48x48"
    },
    {
      "src": "/images/search/searchgpt-icon-72x72.png",
      "type": "image/png",
      "sizes": "72x72"
    },
    {
      "src": "/images/search/searchgpt-icon-96x96.png",
      "type": "image/png",
      "sizes": "96x96"
    },
    {
      "src": "/images/search/searchgpt-icon-144x144.png",
      "type": "image/png",
      "sizes": "144x144"
    },
    {
      "src": "/images/search/searchgpt-icon-192x192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "/images/search/searchgpt-icon-512x512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ]
}
`)
	})
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
