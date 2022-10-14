/*
 * @Author: DaiYu
 * @Date: 2022-10-13 11:05:30
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-14 10:25:14
 * @FilePath: \build\vite\plugins\index.ts
 */
/**
 * @name createVitePlugins
 * @description 封装plugins数组统一调用
 */
import { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VitePluginCertificate from 'vite-plugin-mkcert'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import WindiCSS from 'vite-plugin-windicss'
import legacy from '@vitejs/plugin-legacy'
import { ConfigSvgIconsPlugin } from './svgIcons'
import { AutoRegistryComponents } from './component'
import { AutoImportDeps } from './autoImport'
import { ConfigVisualizerConfig } from './visualizer'
import { ConfigCompressPlugin } from './compress'
// import { ConfigPagesPlugin } from './pages'
import { ConfigRestartPlugin } from './restart'
import { ConfigProgressPlugin } from './progress'
import { ConfigImageminPlugin } from './imagemin'
// import { ConfigVConsolePlugin } from './vconsole'
import { createHtml } from './html'

export function createVitePlugins(viteEnv, isBuild = false) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // vue支持
    vue(),
    WindiCSS(),
    // JSX支持
    vueJsx(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    // setup语法糖组件名支持
    vueSetupExtend(),
    // 提供https证书
    VitePluginCertificate({
      source: 'coding',
    }) as PluginOption,
  ]
  vitePlugins.push(createHtml(viteEnv, isBuild))
  // 自动按需引入组件
  vitePlugins.push(AutoRegistryComponents())

  // 自动按需引入依赖
  vitePlugins.push(AutoImportDeps())

  // 自动生成路由
  // vitePlugins.push(ConfigPagesPlugin())

  // 开启.gz压缩  rollup-plugin-gzip
  isBuild && vitePlugins.push(ConfigCompressPlugin())

  // 监听配置文件改动重启
  !isBuild && vitePlugins.push(ConfigRestartPlugin())

  // 构建时显示进度条
  vitePlugins.push(ConfigProgressPlugin())

  // 移动端调试工具
  // vitePlugins.push(ConfigVConsolePlugin(isBuild))

  // vite-plugin-svg-icons
  vitePlugins.push(ConfigSvgIconsPlugin(isBuild))

  // rollup-plugin-visualizer
  vitePlugins.push(ConfigVisualizerConfig())

  vitePlugins.push(ConfigImageminPlugin())
  return vitePlugins
}
