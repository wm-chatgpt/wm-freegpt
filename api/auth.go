package api

import (
	"cockroachai/config"
	"github.com/gogf/gf/v2/encoding/gjson"
	"github.com/gogf/gf/v2/errors/gerror"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
)

// /api/auth/providers
func AuthProviders(r *ghttp.Request) {
	jsonStr := `
	{
		"auth0": {
		  "id": "auth0",
		  "name": "Auth0",
		  "type": "oauth",
		  "signinUrl": "https://chat.openai.com/api/auth/signin/auth0",
		  "callbackUrl": "https://chat.openai.com/api/auth/callback/auth0"
		},
		"login-web": {
		  "id": "login-web",
		  "name": "Auth0",
		  "type": "oauth",
		  "signinUrl": "https://chat.openai.com/api/auth/signin/login-web",
		  "callbackUrl": "https://chat.openai.com/api/auth/callback/login-web"
		},
		"openai": {
		  "id": "openai",
		  "name": "openai",
		  "type": "oauth",
		  "signinUrl": "https://chat.openai.com/api/auth/signin/openai",
		  "callbackUrl": "https://chat.openai.com/api/auth/callback/openai"
		}
	  }`
	r.Response.WriteJson(gjson.New(jsonStr))
}

// /api/auth/csrf
func AuthCsrf(r *ghttp.Request) {
	jsonStr := `
	{
		"csrfToken": "084e72020630350580584426d7088865eeb0e7c0d8af0ee38931049bae4baa96"
	  }
	`
	r.Response.WriteJson(gjson.New(jsonStr))
}

// /api/auth/signin/login-web
func AuthSigninLoginWeb(r *ghttp.Request) {
	jsonStr := `
	{
		"url": "/login"
	  }
	`
	r.Response.WriteJson(gjson.New(jsonStr))
}

// /api/auth/signin/auth0
func AuthSigninAuth0(r *ghttp.Request) {
	jsonStr := `
	{
		"url": "/login"
	  }
	`
	r.Response.WriteJson(gjson.New(jsonStr))
}

// /api/auth/session
func AuthSession(r *ghttp.Request) {
	ctx := r.Context()
	//userToken := r.Session.MustGet("userToken").String()
	// 获取session缓存
	refreshCookie := r.Cookie.Get(config.RefreshCookie)
	res, err := config.ProxyClient.ContentJson().Post(ctx, config.GatewayUrl+"/auth/refresh", g.Map{"refreshCookie": refreshCookie})
	if err != nil {
		g.Log().Error(ctx, "RefreshUserToken Error: ", err)
		return
	}
	defer res.Close()
	if res.StatusCode != 200 {
		err = gerror.Newf("RefreshUserToken Error: %d", res.StatusCode)
		g.Log().Error(ctx, err)
		return
	}
	t := gjson.New(res.ReadAllString()).Get("accessToken").String()

	//t := r.Cookie.Get("accessToken").String()
	if t == "" {
		r.Cookie.Set(config.AccessToken, "")
		r.Response.WriteStatus(401)
	}
	session := gjson.New("")
	session.Remove("models")
	session.Remove("accounts_info")
	session.Remove("refreshCookie")
	session.Remove("accountCheckInfo")
	session.Set("accessToken", t)
	session.Set("user.email", "share@closeai.com")
	session.Set("user.iname", "share")
	r.Response.WriteJsonExit(session)
}

// /auth/logout
func AuthLogout(r *ghttp.Request) {
	r.Cookie.Set(config.AccessToken, "")
	r.Cookie.Set(config.RefreshCookie, "")
	r.Response.RedirectTo("/")
}
