/*
 * @Author: DaiYu
 * @Date: 2022-10-13 11:05:30
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-13 11:08:53
 * @FilePath: \build\vite\plugins\autoImport.ts
 */
/**
 * @name AutoImportDeps
 * @description 按需加载，api自动引入
 */
import AutoImport from 'unplugin-auto-import/vite'

export const AutoImportDeps = () => {
  return AutoImport({
    // 目标文件
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/, // .vue
      /\.md$/, // .md
    ],
    imports: [
      'vue',
      'pinia',
      'vue-router',
      {
        '@vueuse/core': [],
      },
    ],
    dts: 'types/auto-imports.d.ts',
    // 解决eslint抛错
    eslintrc: {
      enabled: true,
      filepath: 'types/eslintrc-auto-import.json',
      globalsPropValue: true,
    },
  })
}
