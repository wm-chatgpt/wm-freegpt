package config

import (
	"time"

	"github.com/gogf/gf/v2/encoding/gjson"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/gclient"
	"github.com/gogf/gf/v2/os/gctx"
	"github.com/gogf/gf/v2/os/gfile"
	"github.com/gogf/gf/v2/os/gview"
	"github.com/gogf/gf/v2/text/gstr"
	"github.com/gogf/gf/v2/util/guid"
)

var (
	PORT         = 9800                                // 端口
	AssetPrefix  = "https://oaistatic-cdn.closeai.biz" // 资源前缀
	CacheBuildId = "0tFA7GWwXvruSzwhEYslA"             // 缓存版本号
	BuildId      = "0tFA7GWwXvruSzwhEYslA"             // 线上版本号
	Script       = "https://cdn.oaistatic.com/_next/static/chunks/2565-263427db2ed7a61a.js?dpl=37f91bfd782f6b4fb81dd5cd885a42d5d31cc4a3"
	Dpl          = "dpl=37f91bfd782f6b4fb81dd5cd885a42d5d31cc4a3"
	Gclient      = g.Client() // http客户端
	ArkoseUrl    = "/v2/"
	GatewayUrl   = g.Cfg().MustGetWithEnv(gctx.New(), "GatewayUrl").String()

	envScriptTpl = `
	<script>
	window.__arkoseUrl="{{.ArkoseUrl}}";
	window.__assetPrefix="{{.AssetPrefix}}";
	</script>
	`
	ProxyClient   *gclient.Client
	AdminPassword = guid.S()
)

func init() {
	ctx := gctx.GetInitCtx()
	// 读取端口
	port := g.Cfg().MustGetWithEnv(ctx, "PORT").Int()
	if port > 0 {
		PORT = port
	}
	g.Log().Info(ctx, "PORT:", PORT)
	// 读取资源前缀
	assetPrefix := g.Cfg().MustGetWithEnv(ctx, "ASSET_PREFIX").String()
	if assetPrefix != "" {
		AssetPrefix = assetPrefix
	}
	g.Log().Info(ctx, "ASSET_PREFIX:", AssetPrefix)

	// 读取adminPassword
	adminPassword := g.Cfg().MustGetWithEnv(ctx, "ADMIN_PASSWORD").String()
	if adminPassword != "" {
		AdminPassword = adminPassword
	}
	g.Log().Info(ctx, "ADMIN_PASSWORD:", AdminPassword)

	// 检查版本号并同步资源
	cacheBuildId := CheckVersion(ctx, AssetPrefix)
	if cacheBuildId != "" {
		CacheBuildId = cacheBuildId
	}
	g.Log().Info(ctx, "CacheBuildId:", CacheBuildId)

	go func() {
		for {
			build, script, dpl := GetBuildId(ctx)
			if build != "" {
				BuildId = build
			}
			if script != "" {
				Script = script
			}
			if dpl != "" {
				Dpl = dpl
			}
			g.Log().Info(ctx, "BuildId:", BuildId, "Script:", Script, "Dpl:", Dpl)
			cacheBuildId := CheckVersion(ctx, AssetPrefix)
			if cacheBuildId != "" {
				CacheBuildId = cacheBuildId
			}
			g.Log().Info(ctx, "CacheBuildId:", CacheBuildId)
			g.Log().Info(ctx, "CheckNewVersion:", BuildId, CacheBuildId)
			time.Sleep(10 * time.Minute)
		}

	}()
	ProxyClient = g.Client().SetHeaderMap(g.MapStrStr{
		"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
	})
}

// 检查版本号并同步资源
func CheckVersion(ctx g.Ctx, assetPrefix string) (CacheBuildId string) {
	// 读取 assetPrefix/version
	versionVar := Gclient.GetVar(ctx, assetPrefix+"/version.json")
	CacheBuildId = gjson.New(versionVar).Get("cacheBuildId").String()
	g.Log().Infof(ctx, "Get config From %s ,CacheBuildId: %s", AssetPrefix, CacheBuildId)
	if CacheBuildId == "" {
		return ""
	}
	// 读取buildDate目录索引
	indexUrl := assetPrefix + "/template/" + CacheBuildId + "/index.txt"
	g.Log().Info(ctx, "Get files From ", indexUrl)
	buildDateVar := Gclient.GetVar(ctx, indexUrl).String()
	if buildDateVar == "" {
		return ""
	}
	// 按回车分割
	buildDateList := gstr.Split(buildDateVar, "\n")
	g.Dump(buildDateList)
	// 遍历目录索引 如果没有就下载
	for _, v := range buildDateList {
		if v == "" {
			continue
		}
		// 检查文件是否存在
		if !gfile.Exists("./resource/template/dynamic_templates/" + CacheBuildId + "/" + v) {
			g.Log().Infof(ctx, "Download %s", v)
			// 下载文件
			res, err := Gclient.Get(ctx, assetPrefix+"/template/"+CacheBuildId+"/"+v)
			if err != nil {
				g.Log().Error(ctx, "Download  Error: ", v, err)
				return ""
			}
			defer res.Close()
			if res.StatusCode != 200 {
				g.Log().Error(ctx, "Download  Error: ", v, res.StatusCode)
				return ""
			}
			// 写入文件
			err = gfile.PutBytes("./resource/template/dynamic_templates/"+CacheBuildId+"/"+v, res.ReadAll())
			if err != nil {
				g.Log().Error(ctx, "Download  Error: ", v, err)
				return ""
			}
		}
	}

	return
}

func GetEnvScript(ctx g.Ctx) string {
	script, err := gview.ParseContent(ctx, envScriptTpl, g.Map{
		"ArkoseUrl":   ArkoseUrl,
		"AssetPrefix": AssetPrefix,
	})
	if err != nil {
		g.Log().Error(ctx, "GetEnvScript Error: ", err)
		return ""
	}
	return script
}

// 获取版本号
func GetBuildId(ctx g.Ctx) (buildId, script, dpl string) {
	respVar := g.Client().GetVar(ctx, "https://publicapi.closeai.biz/chatgpt/info")
	respJson := gjson.New(respVar)
	respJson.Dump()
	buildId = gjson.New(respVar).Get("buildId").String()
	script = gjson.New(respVar).Get("script").String()
	dpl = gjson.New(respVar).Get("dpl").String()
	g.Log().Info(ctx, "Check tcr9i buildId: ", buildId)
	return

}
