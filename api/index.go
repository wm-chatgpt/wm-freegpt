package api

import (
	"cockroachai/config"
	"fmt"

	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"github.com/google/uuid"
)

func Index(r *ghttp.Request) {
	ctx := r.GetCtx()
	t := r.Cookie.Get(config.AccessToken).String()
	if t == "" {
		r.Response.RedirectTo("/login")
	}
	r.Cookie.Set("oai-did", uuid.New().String())
	r.Response.WriteTpl("dynamic_templates/"+config.RemixBuildId+"/index.html", g.Map{
		//"props":          propsJson,
		//"arkoseUrl":      config.ArkoseUrl,
		"assetPrefix":    config.AssetPrefix,
		"envScript":      config.GetEnvScript(ctx),
		"REMIX_NONCE":    uuid.New().String(),
		"REMIX_DOMAIN":   "http://localhost:9800/",
		"REMIX_URL":      r.URL,
		"REMIX_CONTEXT0": fmt.Sprintf(TData, t, t),
		"REMIX_CONTEXT1": "null",
		"REMIX_CONTEXT2": "null",
	})
}
func C(r *ghttp.Request) {
	ctx := r.GetCtx()

	t := r.Cookie.Get(config.AccessToken).String()
	if t == "" {
		r.Response.RedirectTo("/login")
	}
	convId := r.GetRouter("convId").String()

	g.Log().Debug(r.GetCtx(), "convId", convId)
	r.Response.WriteTpl("dynamic_templates/"+config.RemixBuildId+"/chat.html", g.Map{
		"assetPrefix":    config.AssetPrefix,
		"envScript":      config.GetEnvScript(ctx),
		"REMIX_NONCE":    uuid.New().String(),
		"REMIX_DOMAIN":   "http://localhost:9800",
		"REMIX_URL":      r.URL,
		"REMIX_CONTEXT0": fmt.Sprintf(TData, t, t),
		"REMIX_CONTEXT1": "null",
		"REMIX_CONTEXT2": "null",
	})
}

func Gpts(r *ghttp.Request) {
	ctx := r.GetCtx()
	t := r.Cookie.Get(config.AccessToken).String()
	if t == "" {
		r.Response.RedirectTo("/login")
	}
	if r.GetQuery("_data").String() != "" {
		r.Response.WriteJsonExit(`{"kind":"store"}`)
		return
	}

	r.Response.WriteTpl("dynamic_templates/"+config.RemixBuildId+"/gpts.html", g.Map{
		"assetPrefix":    config.AssetPrefix,
		"envScript":      config.GetEnvScript(ctx),
		"REMIX_NONCE":    uuid.New().String(),
		"REMIX_DOMAIN":   "",
		"REMIX_URL":      r.URL,
		"REMIX_CONTEXT0": fmt.Sprintf(TData, t, t),
		"REMIX_CONTEXT1": `{"kind":"store"}`,
		"REMIX_CONTEXT2": "null",
	})
}

// G 游戏
func G(r *ghttp.Request) {
	ctx := r.GetCtx()
	t := r.Cookie.Get(config.AccessToken).String()
	if t == "" {
		r.Response.RedirectTo("/login")
	}
	if r.GetQuery("_data").String() != "" {
		r.Response.WriteJsonExit(fmt.Sprintf(GptsData, t, t))
		return
	}
	//gizmoId := r.GetRouter("gizmoId").String()
	r.Response.WriteTpl("dynamic_templates/"+config.RemixBuildId+"/gizmoId.html", g.Map{
		"assetPrefix":    config.AssetPrefix,
		"envScript":      config.GetEnvScript(ctx),
		"REMIX_NONCE":    uuid.New().String(),
		"REMIX_DOMAIN":   "",
		"REMIX_URL":      r.URL,
		"REMIX_CONTEXT0": fmt.Sprintf(TData, t, t),
		"REMIX_CONTEXT1": fmt.Sprintf(GptsData, t, t),
		"REMIX_CONTEXT2": "null",
	})
}

// Mine 我的
func Mine(r *ghttp.Request) {
	ctx := r.GetCtx()
	t := r.Cookie.Get(config.AccessToken).String()
	if t == "" {
		r.Response.RedirectTo("/login")
	}
	r.Response.WriteTpl("dynamic_templates/"+config.RemixBuildId+"/mine.html", g.Map{
		"assetPrefix":    config.AssetPrefix,
		"envScript":      config.GetEnvScript(ctx),
		"REMIX_NONCE":    uuid.New().String(),
		"REMIX_DOMAIN":   "",
		"REMIX_URL":      r.URL,
		"REMIX_CONTEXT0": fmt.Sprintf(TData, t, t),
		"REMIX_CONTEXT1": "null",
		"REMIX_CONTEXT2": "null",
	})
}

func Slug(r *ghttp.Request) {
	ctx := r.GetCtx()
	t := r.Cookie.Get(config.AccessToken).String()
	if t == "" {
		r.Response.RedirectTo("/login")
	}
	r.Response.WriteTpl("dynamic_templates/"+config.RemixBuildId+"/slug.html", g.Map{
		"assetPrefix":    config.AssetPrefix,
		"envScript":      config.GetEnvScript(ctx),
		"REMIX_NONCE":    uuid.New().String(),
		"REMIX_DOMAIN":   "",
		"REMIX_URL":      r.URL,
		"REMIX_CONTEXT0": fmt.Sprintf(TData, t, t),
		"REMIX_CONTEXT1": "null",
		"REMIX_CONTEXT2": "null",
	})
}

func Search(r *ghttp.Request) {
	ctx := r.GetCtx()
	t := r.Cookie.Get(config.AccessToken).String()
	if t == "" {
		r.Response.RedirectTo("/login")
	}
	r.Response.WriteTpl("dynamic_templates/"+config.RemixBuildId+"/search.html", g.Map{
		"assetPrefix":    config.AssetPrefix,
		"envScript":      config.GetEnvScript(ctx),
		"REMIX_NONCE":    uuid.New().String(),
		"REMIX_DOMAIN":   "",
		"REMIX_URL":      r.URL,
		"REMIX_CONTEXT0": fmt.Sprintf(TData, t, t),
		"REMIX_CONTEXT1": fmt.Sprintf(TData, t, t),
		"REMIX_CONTEXT2": "null",
	})
}
