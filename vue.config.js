const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
	//关闭 eslint校验
	lintOnSave: false
})
