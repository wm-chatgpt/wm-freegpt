package api

import (
	"cockroachai/config"
	"fmt"

	"github.com/gogf/gf/v2/encoding/gjson"
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
	model := r.Get("model").String()
	props := `
  {
    "props": {
        "pageProps": {
            "user": {
                "id": "user-xyhelper",
                "name": "admin@closeai.com",
                "email": "admin@closeai.com",
                "image": "/avatars.png",
                "picture": "/avatars.png",
                "idp": "auth0",
                "iat": 2699699364,
                "mfa": false,
                "groups": [],
                "intercom_hash": "30fd0a0ada1c07ce526be7c3d54c22904b80fa7e2713d978630e979e4315cf67"
            },
            "serviceStatus": {},
            "userCountry": "US",
            "serviceAnnouncement": {
                "paid": {},
                "public": {}
            },
            "serverPrimedAllowBrowserStorageValue": true,
            "canManageBrowserStorage": false,
            "ageVerificationDeadline": null,
            "showCookieConsentBanner": false
        },
        "__N_SSP": true
    },
    "page": "/[[...default]]",
    "query": {},
    "buildId": "wtXFegAXt6bfbujLr1e7S",
    "assetPrefix": "",
    "isFallback": false,
    "gssp": true,
    "scriptLoader": []
}`

	ttt := `
{
                            "clientBootstrap": {
                                "accountsStatus": null,
                                "authStatus": "logged_in",
                                "serviceStatus": {},
                                "session": {
                                    "accessToken": "%s",
                                    "user": {
                                        "email": "yuanbao@openoai.cn",
                                        "id": "o81vN6vl5jjE-96fNSGEW_DewM24",
                                        "image": null,
                                        "name": "user-GEW_DewM24",
                                        "picture": null
                                    }
                                },
                                "statsig": {
                                    "payload": {
                                        "feature_gates": {
                                            "458009956": {
                                                "name": "458009956",
                                                "value": true
                                            },
                                            "740954505": {
                                                "name": "740954505",
                                                "value": true
                                            }
                                        },
                                        "hash_used": "djb2",
                                        "layer_configs": {
                                            "2723963139": {
                                                "name": "2723963139",
                                                "value": {
                                                    "config": {
                                                        "impl": "rm_score",
                                                        "rm_gpt4_vs_sahara": "rm-model-switcher-1p-d36-0325",
                                                        "rm_renderer": "harmony_v4.0.13_8k_turbo_mm"
                                                    },
                                                    "is_AG8PqS2q_enabled": true,
                                                    "is_conversation_model_switching_allowed": true,
                                                    "is_dynamic_model_enabled": true,
                                                    "show_message_model_info": true,
                                                    "show_message_regenerate_model_selector": true,
                                                    "show_message_regenerate_model_selector_on_every_message": true,
                                                    "show_rate_limit_downgrade_banner": true
                                                }
                                            },
                                            "3048336830": {
                                                "name": "3048336830",
                                                "value": {
                                                    "is-enabled": true
                                                }
                                            }
                                        }
                                    },
                                    "user": {
                                        "userID": "user-fakeoai"
                                    }
                                },
                                "user": {
                                    "email": "yuanbao@openoai.cn",
                                    "id": "o81vN6vl5jjE-96fNSGEW_DewM24",
                                    "image": null,
                                    "name": "user-GEW_DewM24",
                                    "picture": null
                                }
                            },
                            "cspScriptNonce": "aab26913-317e-4628-945d-baa008dbf46f",
                            "dehydratedState": {
                                "mutations": [],
                                "queries": [{
                                    "queryHash": "[\"session\"]",
                                    "queryKey": ["session"],
                                    "state": {
                                        "data": {
                                            "accessToken": "%s",
                                            "user": {
                                                "email": "yuanbao@openoai.cn",
                                                "id": "o81vN6vl5jjE-96fNSGEW_DewM24",
                                                "image": null,
                                                "name": "user-GEW_DewM24",
                                                "picture": null
                                            }
                                        },
                                        "dataUpdateCount": 1,
                                        "dataUpdatedAt": 1725450210242,
                                        "error": null,
                                        "errorUpdateCount": 0,
                                        "errorUpdatedAt": 0,
                                        "fetchFailureCount": 0,
                                        "fetchFailureReason": null,
                                        "fetchMeta": null,
                                        "fetchStatus": "idle",
                                        "isInvalidated": false,
                                        "status": "success"
                                    }
                                }]
                            },
                            "isAndroidChrome": false,
                            "isElectron": false,
                            "isIos": false
                        }`
	propsJson := gjson.New(props)
	s := uuid.New().String()
	propsJson.Set("query.model", model)
	propsJson.Set("buildId", config.BuildId)
	propsJson.Set("assetPrefix", config.AssetPrefix)

	r.Cookie.Set("oai-did", uuid.New().String())

	r.Response.WriteTpl("dynamic_templates/"+"d473212e"+"/index.html", g.Map{
		"props":            propsJson,
		"arkoseUrl":        config.ArkoseUrl,
		"assetPrefix":      config.AssetPrefix,
		"envScript":        config.GetEnvScript(ctx),
		"REMIX_NONCE__":    s,
		"REMIX_URL__":      "/",
		"REMIX_CONTEXT0__": fmt.Sprintf(ttt, t, t),
		"REMIX_CONTEXT1__": "null",
		"REMIX_CONTEXT2__": "null",
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
	props := `
  {
    "props": {
      "pageProps": {
        "user": {
          "id": "user-xyhelper",
          "name": "admin@closeai.com",
          "email": "admin@closeai.com",
          "image": "/avatars.png",
          "picture": "/avatars.png",
          "idp": "auth0",
          "iat": 2699699364,
          "mfa": false,
          "groups": []
        },
        "serviceStatus": {},
        "userCountry": "US",
        "serviceAnnouncement": { "paid": {}, "public": {} },
        "serverPrimedAllowBrowserStorageValue": true,
        "canManageBrowserStorage": false,
        "ageVerificationDeadline": null,
        "showCookieConsentBanner": false
      },
      "__N_SSP": true
    },
    "page": "/[[...default]]",
    "query": { "default": ["c", "98d86ec9-fa8b-42ba-98e8-ffd6c1d6cae4"] },
    "buildId": "wtXFegAXt6bfbujLr1e7S",
    "assetPrefix": "",
    "isFallback": false,
    "gssp": true,
    "scriptLoader": []
  }
	`

	propsJson := gjson.New(props)
	propsJson.Set("query.default.1", convId)
	propsJson.Set("buildId", config.BuildId)
	propsJson.Set("assetPrefix", config.AssetPrefix)

	r.Response.WriteTpl("dynamic_templates/"+config.CacheBuildId+"/chat.html", g.Map{
		"props":       propsJson,
		"arkoseUrl":   config.ArkoseUrl,
		"assetPrefix": config.AssetPrefix,
		"envScript":   config.GetEnvScript(ctx),
	})
}

// Discovery 发现
func Discovery(r *ghttp.Request) {
	ctx := r.GetCtx()
	t := r.Cookie.Get(config.AccessToken).String()
	if t == "" {
		r.Response.RedirectTo("/login")
	}
	props := `
  {
    "props": {
      "pageProps": {
        "user": {
          "id": "user-xyhelper",
          "name": "admin@closeai.com",
          "email": "admin@closeai.com",
          "image": "/avatars.png",
          "picture": "/avatars.png",
          "idp": "auth0",
          "iat": 2699699364,
          "mfa": false,
          "groups": []
        },
        "serviceStatus": {},
        "userCountry": "US",
        "serviceAnnouncement": { "public": {}, "paid": {} },
        "serverPrimedAllowBrowserStorageValue": true,
        "canManageBrowserStorage": false,
        "ageVerificationDeadline": null,
        "showCookieConsentBanner": false
      },
      "__N_SSP": true
    },
    "page": "/gpts/discovery",
    "query": {},
    "buildId": "wtXFegAXt6bfbujLr1e7S",
    "assetPrefix": "",
    "isFallback": false,
    "gssp": true,
    "scriptLoader": []
  }
  `
	propsJson := gjson.New(props)
	propsJson.Set("buildId", config.BuildId)
	propsJson.Set("assetPrefix", config.AssetPrefix)

	r.Response.WriteTpl("dynamic_templates/"+config.CacheBuildId+"/discovery.html", g.Map{
		"arkoseUrl":   config.ArkoseUrl,
		"props":       propsJson,
		"assetPrefix": config.AssetPrefix,
		"envScript":   config.GetEnvScript(ctx),
	})
}

func Gpts(r *ghttp.Request) {
	ctx := r.GetCtx()
	t := r.Cookie.Get(config.AccessToken).String()
	if t == "" {
		r.Response.RedirectTo("/login")
	}
	props := `
  {
    "props": {
      "pageProps": {
        "user": {
          "id": "user-xyhelper",
          "name": "admin@closeai.com",
          "email": "admin@closeai.com",
          "image": "/avatars.png",
          "picture": "/avatars.png",
          "idp": "auth0",
          "iat": 2699699364,
          "mfa": false,
          "groups": []
        },
        "serviceStatus": {},
        "userCountry": "US",
        "serviceAnnouncement": { "public": {}, "paid": {} },
        "serverPrimedAllowBrowserStorageValue": true,
        "canManageBrowserStorage": false,
        "ageVerificationDeadline": null,
        "showCookieConsentBanner": false
      },
      "__N_SSP": true
    },
    "page": "/gpts",
    "query": {},
    "buildId": "wtXFegAXt6bfbujLr1e7S",
    "assetPrefix": "",
    "isFallback": false,
    "gssp": true,
    "scriptLoader": []
  }
  `
	propsJson := gjson.New(props)
	propsJson.Set("buildId", config.BuildId)
	propsJson.Set("assetPrefix", config.AssetPrefix)

	r.Response.WriteTpl("dynamic_templates/"+config.CacheBuildId+"/gpts.html", g.Map{
		"arkoseUrl":   config.ArkoseUrl,
		"props":       propsJson,
		"assetPrefix": config.AssetPrefix,
		"envScript":   config.GetEnvScript(ctx),
	})
}

// Editor 编辑器
func Editor(r *ghttp.Request) {
	ctx := r.GetCtx()

	t := r.Cookie.Get(config.AccessToken).String()
	if t == "" {
		r.Response.RedirectTo("/login")
	}

	props := `
  {
    "props": {
      "pageProps": {
        "user": {
          "id": "user-xyhelper",
          "name": "admin@closeai.com",
          "email": "admin@closeai.com",
          "image": "/avatars.png",
          "picture": "/avatars.png",
          "idp": "auth0",
          "iat": 2699699364,
          "mfa": false,
          "groups": []
        },
        "serviceStatus": {},
        "userCountry": "US",
        "serviceAnnouncement": { "public": {}, "paid": {} },
        "serverPrimedAllowBrowserStorageValue": true,
        "canManageBrowserStorage": false,
        "ageVerificationDeadline": null,
        "showCookieConsentBanner": false
      },
      "__N_SSP": true
    },
    "page": "/gpts/editor",
    "query": {},
    "buildId": "wtXFegAXt6bfbujLr1e7S",
    "assetPrefix": "",
    "isFallback": false,
    "gssp": true,
    "scriptLoader": []
  }
  `
	propsJson := gjson.New(props)
	propsJson.Set("buildId", config.BuildId)
	propsJson.Set("assetPrefix", config.AssetPrefix)

	// if slug != "" {
	// 	propsJson.Set("page", "/gpts/editor/[slug]")
	// 	propsJson.Set("query.slug", slug)
	// }
	// propsJson.Dump()

	r.Response.WriteTpl("dynamic_templates/"+config.CacheBuildId+"/editor.html", g.Map{
		"arkoseUrl":   config.ArkoseUrl,
		"props":       propsJson,
		"assetPrefix": config.AssetPrefix,
		"envScript":   config.GetEnvScript(ctx),
	})
}

// Slug 编辑器
func Slug(r *ghttp.Request) {
	ctx := r.GetCtx()

	t := r.Cookie.Get(config.AccessToken).String()
	if t == "" {
		r.Response.RedirectTo("/login")
	}
	slug := r.GetRouter("slug").String()

	props := `
  {
    "props": {
      "pageProps": {
        "user": {
          "id": "user-xyhelper",
          "name": "admin@closeai.com",
          "email": "admin@closeai.com",
          "image": "/avatars.png",
          "picture": "/avatars.png",
          "idp": "auth0",
          "iat": 2699699364,
          "mfa": false,
          "groups": []
        },
        "serviceStatus": {},
        "userCountry": "US",
        "serviceAnnouncement": { "public": {}, "paid": {} },
        "serverPrimedAllowBrowserStorageValue": true,
        "canManageBrowserStorage": false,
        "ageVerificationDeadline": null,
        "showCookieConsentBanner": false
      },
      "__N_SSP": true
    },
    "page": "/gpts/editor/[slug]",
    "query": { "slug": "g-I2KQmH4yZ" },
    "buildId": "wtXFegAXt6bfbujLr1e7S",
    "assetPrefix": "",
    "isFallback": false,
    "gssp": true,
    "scriptLoader": []
  }
  `
	propsJson := gjson.New(props)

	propsJson.Set("query.slug", slug)
	propsJson.Set("buildId", config.BuildId)
	propsJson.Set("assetPrefix", config.AssetPrefix)

	r.Response.WriteTpl("dynamic_templates/"+config.CacheBuildId+"/slug.html", g.Map{
		"arkoseUrl":   config.ArkoseUrl,
		"props":       propsJson,
		"assetPrefix": config.AssetPrefix,
		"envScript":   config.GetEnvScript(ctx),
	})
}

// G 游戏
func G(r *ghttp.Request) {
	ctx := r.GetCtx()
	t := r.Cookie.Get(config.AccessToken).String()
	if t == "" {
		r.Response.RedirectTo("/login")
	}
	gizmoId := r.GetRouter("gizmoId").String()
	props := `
  {
    "props": {
      "pageProps": {
        "kind": "chat_page",
        "gizmo": null,
        "user": {
          "id": "user-xyhelper",
          "name": "admin@closeai.com",
          "email": "admin@closeai.com",
          "image": "/avatars.png",
          "picture": "/avatars.png",
          "idp": "auth0",
          "iat": 2699699364,
          "mfa": false,
          "groups": []
        },
        "serviceStatus": {},
        "userCountry": "US",
        "serviceAnnouncement": { "public": {}, "paid": {} },
        "serverPrimedAllowBrowserStorageValue": true,
        "canManageBrowserStorage": false,
        "ageVerificationDeadline": null,
        "showCookieConsentBanner": false
      },
      "__N_SSP": true
    },
    "page": "/g/[gizmoId]",
    "query": { "gizmoId": "g-I2KQmH4yZ-unix2bj" },
    "buildId": "wtXFegAXt6bfbujLr1e7S",
    "assetPrefix": "",
    "isFallback": false,
    "gssp": true,
    "scriptLoader": []
  }
  `
	propsJson := gjson.New(props)
	propsJson.Set("query.gizmoId", gizmoId)
	propsJson.Set("buildId", config.BuildId)
	propsJson.Set("assetPrefix", config.AssetPrefix)

	r.Response.WriteTpl("dynamic_templates/"+config.CacheBuildId+"/g.html", g.Map{
		"arkoseUrl":   config.ArkoseUrl,
		"props":       propsJson,
		"assetPrefix": config.AssetPrefix,
		"envScript":   config.GetEnvScript(ctx),
	})
}

// GC 游戏会话
func GC(r *ghttp.Request) {
	ctx := r.GetCtx()

	t := r.Cookie.Get(config.AccessToken).String()
	if t == "" {
		r.Response.RedirectTo("/login")
	}
	gizmoId := r.GetRouter("gizmoId").String()
	convId := r.GetRouter("convId").String()
	g.Log().Debug(r.GetCtx(), "gizmoId", gizmoId)
	props := `
  {
    "props": {
      "pageProps": {
        "user": {
          "id": "user-xyhelper",
          "name": "admin@closeai.com",
          "email": "admin@closeai.com",
          "image": "/avatars.png",
          "picture": "/avatars.png",
          "idp": "auth0",
          "iat": 2699699364,
          "mfa": false,
          "groups": []
        },
        "serviceStatus": {},
        "userCountry": "US",
        "serviceAnnouncement": { "public": {}, "paid": {} },
        "serverPrimedAllowBrowserStorageValue": true,
        "canManageBrowserStorage": false,
        "ageVerificationDeadline": null,
        "showCookieConsentBanner": false
      },
      "__N_SSP": true
    },
    "page": "/g/[gizmoId]/c/[convId]",
    "query": {
      "gizmoId": "g-I2KQmH4yZ-unix2bj",
      "convId": "e5fa1ee7-f482-4892-86ad-12cf0e0f9dd7"
    },
    "buildId": "wtXFegAXt6bfbujLr1e7S",
    "assetPrefix": "",
    "isFallback": false,
    "gssp": true,
    "scriptLoader": []
  }
  `
	propsJson := gjson.New(props)
	propsJson.Set("query.gizmoId", gizmoId)
	propsJson.Set("query.convId", convId)
	propsJson.Set("buildId", config.BuildId)

	r.Response.WriteTpl("dynamic_templates/"+config.CacheBuildId+"/gc.html", g.Map{
		"arkoseUrl":   config.ArkoseUrl,
		"props":       propsJson,
		"assetPrefix": config.AssetPrefix,
		"envScript":   config.GetEnvScript(ctx),
	})
}

// Mine 我的
func Mine(r *ghttp.Request) {
	ctx := r.GetCtx()
	t := r.Cookie.Get(config.AccessToken).String()
	if t == "" {
		r.Response.RedirectTo("/login")
	}
	props := `
  {
    "props": {
        "pageProps": {
            "user": {
                "id": "user-xyhelper",
                "name": "admin@closeai.com",
                "email": "admin@closeai.com",
                "image": "/avatars.png",
                "picture": "/avatars.png",
                "idp": "auth0",
                "iat": 2699699364,
                "mfa": false,
                "groups": [],
                "intercom_hash": "30fd0a0ada1c07ce526be7c3d54c22904b80fa7e2713d978630e979e4315cf67"
            },
            "serviceStatus": {},
            "userCountry": "US",
            "serviceAnnouncement": {
                "paid": {},
                "public": {}
            },
            "serverPrimedAllowBrowserStorageValue": true,
            "canManageBrowserStorage": false,
            "ageVerificationDeadline": null,
            "showCookieConsentBanner": false
        },
        "__N_SSP": true
    },
    "page": "/gpts/mine",
    "query": {},
    "buildId": "wtXFegAXt6bfbujLr1e7S",
    "assetPrefix": "",
    "isFallback": false,
    "gssp": true,
    "scriptLoader": []
}`
	propsJson := gjson.New(props)
	propsJson.Set("buildId", config.BuildId)
	propsJson.Set("assetPrefix", config.AssetPrefix)

	r.Response.WriteTpl("dynamic_templates/"+config.CacheBuildId+"/mine.html", g.Map{
		"arkoseUrl":   config.ArkoseUrl,
		"props":       propsJson,
		"assetPrefix": config.AssetPrefix,
		"envScript":   config.GetEnvScript(ctx),
	})

}
