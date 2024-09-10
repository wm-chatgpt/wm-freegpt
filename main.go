package main

import (
	"cockroachai/api"
	"cockroachai/config"
	"cockroachai/module/arkose"
	"cockroachai/module/backend-api"
	"cockroachai/module/next"
	"fmt"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gctx"
	"io/ioutil"
	"os"
	"path/filepath"
	"strings"
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

	//err := scanAndReplace()
	//if err != nil {
	//	fmt.Println(err)
	//}

	s.Run()
}

func replaceStringInFile(filePath string, oldString string, newString string) error {

	return nil
}

// 递归扫描目录并处理.js文件的函数
func scanAndReplace() error {
	err := filepath.Walk("./resource/public/assets", func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}

		// 仅处理 .js 文件
		if !info.IsDir() && strings.HasSuffix(info.Name(), ".js") {
			// 读取文件内容
			content, err := ioutil.ReadFile(path)
			if err != nil {
				return err
			}
			// 替换字符串
			newContent := strings.ReplaceAll(string(content), "https://cdn.oaistatic.com", "")
			newContent = strings.ReplaceAll(newContent, "https://chatgpt.com/backend", "/backend")
			newContent = strings.ReplaceAll(string(newContent), "https://chatgpt.com/public", "/public")
			newContent = strings.ReplaceAll(newContent, "https://chatgpt.com/public", "/public")
			newContent = strings.ReplaceAll(string(newContent), "https://ab.chatgpt.com/v1/", "/v1/")
			newContent = strings.ReplaceAll(string(newContent), "https://tcr9i.chat.openai.com", "")

			// 将替换后的内容写回文件
			err = ioutil.WriteFile(path, []byte(newContent), 0644)
			if err != nil {
				return err
			}

			fmt.Printf("Replaced content in: %s\n", path)

		}
		return nil
	})

	err = filepath.Walk("./resource/template/dynamic_templates/d473212e", func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}

		// 仅处理 .js 文件
		if !info.IsDir() && strings.HasSuffix(info.Name(), ".html") {
			// 读取文件内容
			content, err := ioutil.ReadFile(path)
			if err != nil {
				return err
			}
			// 替换字符串
			newContent := strings.ReplaceAll(string(content), "{{__REMIX_NONCE__}}", "{{.REMIX_NONCE}}")
			newContent = strings.ReplaceAll(string(newContent), "{{__REMIX_URL__}}", "{{.REMIX_URL}}")
			newContent = strings.ReplaceAll(string(newContent), "{{__REMIX_DOMAIN__}}", "{{.REMIX_DOMAIN}}")
			newContent = strings.ReplaceAll(string(newContent), "{{__REMIX_CDN_DOMAIN__}}", "{{.REMIX_CDN_DOMAIN}}")
			newContent = strings.ReplaceAll(string(newContent), "{{__REMIX_CONTEXT0__|default(None)|tojson|safe}}", "{{.REMIX_CONTEXT0}}")
			newContent = strings.ReplaceAll(string(newContent), "{{__REMIX_CONTEXT1__|default(None)|tojson|safe}}", "{{.REMIX_CONTEXT1}}")
			newContent = strings.ReplaceAll(string(newContent), "{{__REMIX_CONTEXT2__|default(None)|tojson|safe}}", "{{.REMIX_CONTEXT2}}")

			// 将替换后的内容写回文件
			err = ioutil.WriteFile(path, []byte(newContent), 0644)
			if err != nil {
				return err
			}

			fmt.Printf("Replaced content in: %s\n", path)

		}
		return nil
	})

	if err != nil {
		return err
	}

	return nil
}
