package api

import (
	"cockroachai/config"
	"github.com/gogf/gf/v2/encoding/gjson"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
)

func Login(r *ghttp.Request) {
	if r.Session.MustGet("userToken").String() != "" {
		r.Response.RedirectTo("/")
		return
	}
	r.Response.WriteTpl("login.html", g.Map{})
}

func LoginPost(r *ghttp.Request) {
	ctx := r.GetCtx()
	getSessionUrl := config.GatewayUrl + "/getsession"
	sessionVar := g.Client().SetCookie("arkoseToken", r.Cookie.Get("arkoseToken").String()).PostVar(ctx, getSessionUrl, g.Map{
		"username": r.Get("username"),
		"password": r.Get("password"),
	})
	sessionJson := gjson.New(sessionVar)
	if sessionJson.Get("accessToken").String() == "" {
		g.Log().Info(ctx, "登录失败")
		r.Response.RedirectTo("/login")
	}
	r.Cookie.Set(config.AccessToken, sessionJson.Get("accessToken").String())
	r.Cookie.Set(config.RefreshCookie, sessionJson.Get("refreshCookie").String())
	r.Response.RedirectTo("/")
}
