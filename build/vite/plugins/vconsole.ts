/*
 * @Author: DaiYu
 * @Date: 2022-10-13 14:50:58
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-19 16:03:45
 * @FilePath: \build\vite\plugins\vconsole.ts
 */
// 移动端调试工具
import { viteVConsole } from 'vite-plugin-vconsole'
import { resolve } from 'path'
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}
export const ConfigVConsolePlugin = (isBuild: boolean) => {
  return viteVConsole({
    entry: pathResolve('./src/main.ts'),
    localEnabled: !isBuild, // 本地是否启用
    enabled: !isBuild, // 是否启用
    config: {
      maxLogNumber: 1000,
      theme: 'light',
    },
  })
}
