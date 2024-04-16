/*
 * @Author: DaiYu
 * @Date: 2022-02-18 16:53:01
 * @LastEditors: DaiYu
 * @LastEditTime: 2024-04-16 13:36:44
 * @FilePath: \vite.config.ts
 */
import type { UserConfig, ConfigEnv } from 'vite'
import { loadEnv, defineConfig } from 'vite'
import { resolve } from 'path'
import dayjs from 'dayjs'
import { createVitePlugins } from './build/vite/plugins'
import proxy from './build/vite/proxy'
import pkg from './package.json'
import { wrapperEnv } from './build/vite/env'
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  console.log(command, mode)
  const root = process.cwd()
  // 环境变量
  const env = loadEnv(mode, root)
  const viteEnv = wrapperEnv(env)

  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_DROP_CONSOLE } = viteEnv

  const isBuild = command === 'build'
  return {
    base: VITE_PUBLIC_PATH,
    // 使用 esbuild 压缩 剔除 console.log
    esbuild: {
      pure: VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : [],
    },
    resolve: {
      alias: {
        '@': pathResolve('src'),
        '#': pathResolve('types'),
      },
    },
    plugins: createVitePlugins(viteEnv, isBuild),
    css: {
      preprocessorOptions: {
        // reference:  避免重复引用
        less: {
          modifyVars: {
            // 'primary-color': '#1DA57A',
          },
          javascriptEnabled: true,
          // additionalData: `@import (reference) "${resolve('src/assets/style/variables.less')}";`,
          additionalData: `@import "src/assets/style/variables.less";`,
        },
      },
    },
    server: {
      port: VITE_PORT, // 设置服务启动端口号
      open: false, // 设置服务启动时是否自动打开浏览器
      // cors: true, // 允许跨域
      host: '0.0.0.0', //
      hmr: true,
      proxy,
      // 设置代理，根据我们项目实际情况配置
      // proxy: {
      //   '/api': {
      // 免费的在线REST API
      // target: 'http://jsonplaceholder.typicode.com',
      //     changeOrigin: true,
      //     secure: false,
      //     rewrite: (path) => path.replace('/api/', '/')
      //   }
      // }
    },
    // 选项可以选择需要或不需要进行预编译的依赖的名称，Vite 则会根据该选项来确定是否对该依赖进行预编译。
    optimizeDeps: {
      /**
       * 依赖预构建，vite 启动时会将下面 include 里的模块，编译成 esm 格式并缓存到 node_modules/.vite 文件夹，
       * 页面加载到对应模块时如果浏览器有缓存就读取浏览器缓存，如果没有会读取本地缓存并按需加载
       * 尤其当您禁用浏览器缓存时（这种情况只应该发生在调试阶段）必须将对应模块加入到 include 里，
       * 否则会遇到开发环境切换页面卡顿的问题（vite 会认为它是一个新的依赖包会重新加载并强制刷新页面），
       * 因为它既无法使用浏览器缓存，又没有在本地 node_modules/.vite 里缓存
       * 温馨提示：如果你使用的第三方库是全局引入，也就是引入到 src/main.ts 文件里，
       * 就不需要再添加到 include 里了，因为 vite 会自动将它们缓存到 node_modules/.vite
       */
      include: [
        'vue',
        'vue-router',
        'vant',
        'vant/es',
        'pinia',
        'echarts',
        'swiper',
        'swiper/vue',
        '@vueuse/core',
        'xgplayer',
        'better-scroll',
      ],
    },
    build: {
      sourcemap: !isBuild,
      target: 'es2015', // 默认值是一个 Vite 特有的值——'modules'，这是指 支持原生 ES 模块的浏览器。
      // outDir: 'dist',
      // assetsDir: 'assets',
      minify: 'esbuild', // terser\esbuild
      chunkSizeWarningLimit: 2000,
      // 分包
      rollupOptions: {
        // 自动分割包名输出 chunkSizeWarningLimit 配置大小
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          manualChunks: {
            echarts: ['echarts'],
            vant: ['vant'],
          },
        },
      },
      // 只有 minify 为 terser 的时候, 本配置项才能起作用
      // terserOptions: {
      //   // 生产环境去除 console debugger
      //   compress: {
      //     keep_infinity: true,
      //     drop_console: Object.is(VITE_DROP_CONSOLE, 'true'),
      //     drop_debugger: true,
      //   },
      // },
    },
    define: {
      __SYSTEM_INFO__: JSON.stringify({
        pkg: {
          version: pkg.version,
          dependencies: pkg.dependencies,
          devDependencies: pkg.devDependencies,
        },
        lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      }),
    },
  }
})
