package main

import (
	"cockroachai/api"
	"cockroachai/config"
	"cockroachai/module/arkose"
	"cockroachai/module/backend-api"
	"cockroachai/module/next"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gctx"
)

func main() {
	ctx := gctx.New()
	arkose.Init(ctx)
	api.Init(ctx)
	next.Init(ctx)
	backendapi.Init(ctx)

	// 启动HTTP服务
	s := g.Server()
	s.SetPort(config.PORT)
	s.SetServerRoot("resource/public")
	s.Run()
}
