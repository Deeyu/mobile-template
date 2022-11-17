/*
 * @Author: DaiYu
 * @Date: 2022-02-18 16:53:01
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-11-16 10:00:21
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
      include: ['vant', 'pinia', 'echarts', 'swiper', 'swiper/vue', '@vueuse/core'],
    },
    build: {
      sourcemap: !isBuild,
      target: 'es2015', // 默认值是一个 Vite 特有的值——'modules'，这是指 支持原生 ES 模块的浏览器。
      // outDir: 'dist',
      // assetsDir: 'assets',
      chunkSizeWarningLimit: 2000,
      // 分包
      rollupOptions: {
        // 自动分割包名输出 chunkSizeWarningLimit 配置大小
        output: {
          manualChunks: {
            echarts: ['echarts'],
            vant: ['vant'],
          },
        },
      },
      minify: 'terser', // esbuild
      terserOptions: {
        // 生产环境去除 console debugger
        compress: {
          keep_infinity: true,
          drop_console: Object.is(VITE_DROP_CONSOLE, 'true'),
          drop_debugger: true,
        },
      },
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
