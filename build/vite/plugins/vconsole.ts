/*
 * @Author: DaiYu
 * @Date: 2022-10-13 14:50:58
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-13 14:54:59
 * @FilePath: \build\vite\plugins\vconsole.ts
 */
// 移动端调试工具
import { viteVConsole } from 'vite-plugin-vconsole'
import { resolve } from 'path'
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}
export const ConfigVConsolePlugin = isProduction => {
  return viteVConsole({
    entry: pathResolve('./src/main.ts').replace(/\\/g, '/'),
    localEnabled: !isProduction, // 本地是否启用
    enabled: !isProduction, // 是否启用
    config: {
      maxLogNumber: 1000,
      theme: 'light',
    },
  })
}
