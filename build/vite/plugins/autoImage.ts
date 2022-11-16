/*
 * @Author: DaiYu
 * @Date: 2022-11-12 14:56:40
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-11-12 15:17:59
 * @FilePath: \build\vite\plugins\autoImage.ts
 */
import viteImages from 'vite-plugin-vue-images'

export const AutoImportImages = () => {
  return viteImages({
    dirs: ['src/assets/images'],
    extensions: ['jpg', 'jpeg', 'png', 'gif', 'png'],
  })
}
