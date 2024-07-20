package main

import (
	"cockroachai/api"
	"cockroachai/arkose"
	backendapi "cockroachai/backend-api"
	"cockroachai/config"
	"cockroachai/next"

	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gctx"
)

func main() {
	ctx := gctx.New()
	// 加载arkose模块
	arkose.Init(ctx)
	// 加载api模块
	api.Init(ctx)
	// 加载next模块
	next.Init(ctx)
	// 加载backend-api模块
	backendapi.Init(ctx)

	// 启动HTTP服务
	s := g.Server()
	s.SetPort(config.PORT)
	s.SetServerRoot("resource/public")
	s.Run()
}
