package api

import (
	"cockroachai/config"
	"fmt"
	"github.com/gogf/gf/v2/encoding/gjson"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"strings"
)

func Login(r *ghttp.Request) {
	if r.Session.MustGet("userToken").String() != "" {
		r.Response.RedirectTo("/")
		return
	}
	r.Response.WriteTpl("login.html", g.Map{})
}

var errHtml = `
<span id="error-element-password" class="ulp-input-error-message"
                                              data-error-code="wrong-email-credentials">
                        <span class="ulp-input-error-icon" role="img" aria-label="错误"></span>
                        %s</span>`

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
		var errc = "登录失败请重试"
		if strings.Contains(sessionJson.Get("detail").String(), "Wrongemailorpassword") {
			errc = "账号密码错误"
		}
		r.Response.WriteTpl("login.html", g.Map{"errInfo": fmt.Sprintf(errHtml, errc)})
		return
	}
	r.Cookie.Set(config.AccessToken, sessionJson.Get("accessToken").String())
	r.Cookie.Set(config.RefreshCookie, sessionJson.Get("refreshCookie").String())
	r.Response.RedirectTo("/")
}
