/*
 * @Author: DaiYu
 * @Date: 2022-10-13 11:05:30
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-13 11:23:54
 * @FilePath: \build\vite\plugins\visualizer.ts
 */
import visualizer from 'rollup-plugin-visualizer'
import { ANALYSIS } from '../../constant'

export function ConfigVisualizerConfig() {
  if (ANALYSIS) {
    return visualizer({
      filename: './node_modules/.cache/visualizer/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  }
  return []
}
