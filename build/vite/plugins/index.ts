/*
 * @Author: DaiYu
 * @Date: 2022-10-13 11:05:30
 * @LastEditors: DaiYu
 * @LastEditTime: 2024-04-16 17:40:39
 * @FilePath: \build\vite\plugins\index.ts
 */
/**
 * @name createVitePlugins
 * @description 封装plugins数组统一调用
 */
import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VitePluginCertificate from 'vite-plugin-mkcert'
import Unocss from 'unocss/vite'
import legacy from '@vitejs/plugin-legacy'
import Inspect from 'vite-plugin-inspect'
import VueDevTools from 'vite-plugin-vue-devtools'
import { ConfigSvgIconsPlugin } from './svgIcons'
import { AutoRegistryComponents } from './component'
import { AutoImportDeps } from './autoImport'
import { ConfigVisualizerConfig } from './visualizer'
import { ConfigCompressPlugin } from './compress'
import { ConfigProgressPlugin } from './progress'
import { ConfigImageminPlugin } from './imagemin'
import { AutoImportImages } from './autoImage'
// import { ConfigVConsolePlugin } from './vconsole'
import { createHtml } from './html'

export function createVitePlugins(viteEnv: ViteEnv, isBuild = false) {
	const {
		VITE_APP_INSPECT,
		VITE_LEGACY,
		VITE_USE_IMAGEMIN,
		VITE_BUILD_COMPRESS,
		VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
	} = viteEnv
	const vitePlugins: (PluginOption | PluginOption[])[] = [
		// vue支持
		vue({
			script: {
				defineModel: true, // defineModel 这是一个语法糖
				propsDestructure: true, // 解构 props
			},
		}),
		// JSX支持
		vueJsx(),
		Unocss(),
		// 调试工具
		Inspect({
			enabled: VITE_APP_INSPECT,
		}),
		// 提供https证书
		VitePluginCertificate({
			source: 'coding',
		}),
		// 图片自动导入
		AutoImportImages(),
		VueDevTools(),
	]
	// @vitejs/plugin-legacy
	VITE_LEGACY && isBuild && vitePlugins.push(legacy({ targets: ['defaults', 'not IE 11'] }))
	vitePlugins.push(createHtml(viteEnv, isBuild))
	// 自动按需引入组件
	vitePlugins.push(AutoRegistryComponents())

	// 自动按需引入依赖
	vitePlugins.push(AutoImportDeps())

	// 自动生成路由
	// vitePlugins.push(ConfigPagesPlugin())

	// 开启.gz压缩  rollup-plugin-gzip
	isBuild
	&& vitePlugins.push(
		ConfigCompressPlugin(VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE),
	)

	// 构建时显示进度条
	vitePlugins.push(ConfigProgressPlugin())

	// 移动端调试工具
	// vitePlugins.push(ConfigVConsolePlugin(isBuild))

	// vite-plugin-svg-icons
	vitePlugins.push(ConfigSvgIconsPlugin(isBuild))

	// rollup-plugin-visualizer
	vitePlugins.push(ConfigVisualizerConfig())

	VITE_USE_IMAGEMIN && vitePlugins.push(ConfigImageminPlugin())
	return vitePlugins
}
