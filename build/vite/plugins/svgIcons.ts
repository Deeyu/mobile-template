/*
 * @Author: DaiYu
 * @Date: 2022-10-13 11:05:30
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-13 11:24:14
 * @FilePath: \build\vite\plugins\svgIcons.ts
 */
/**
 * @name SvgIconsPlugin
 * @description 加载SVG文件，自动引入
 */
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export const ConfigSvgIconsPlugin = (isBuild: boolean) => {
  return createSvgIconsPlugin({
    // 指定需要缓存的图标文件夹
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/svg')],
    // 指定symbolId格式
    symbolId: 'icon-[dir]-[name]',
    svgoOptions: isBuild,
  })
}
