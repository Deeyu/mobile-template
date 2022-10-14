/*
 * @Author: DaiYu
 * @Date: 2022-10-13 11:05:30
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-13 11:15:36
 * @FilePath: \build\vite\plugins\progress.ts
 */
/**
 * @name ConfigProgressPlugin
 * @description 构建显示进度条
 */

import progress from 'vite-plugin-progress'
export const ConfigProgressPlugin = () => {
  return progress()
}
