/*
 * @Author: DaiYu
 * @Date: 2022-10-15 11:25:34
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-15 11:25:35
 * @FilePath: \types\module.d.ts
 */
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const Component: DefineComponent<{}, {}, any>
  export default Component
}

declare module 'virtual:*' {
  const result: any
  export default result
}

// 图片
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
