/*
 * @Author: DaiYu
 * @Date: 2022-06-20 16:16:03
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-13 14:47:04
 * @FilePath: \windi.config.ts
 */
import { defineConfig } from 'windicss/helpers'
import { colors } from './src/assets/style/colors'
import formsPlugin from 'windicss/plugin/forms'
import typography from 'windicss/plugin/typography'
export default defineConfig({
  /* 配置项... */
  attributify: {
    prefix: 'w:', // 自定义前缀
  }, // 属性化配置
  alias: {
    hstack: 'flex items-center',
    vstack: 'flex flex-col',
    icon: 'w-6 h-6 fill-current',
    app: 'text-red',
    'app-border': 'border-gray-200 dark:border-dark-300',
  },
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      // 主题色配置
      colors,
    },
  },
  safelist: [
    'grid',
    'grid-cols-2',
    'grid-cols-3',
    ...Object.keys(colors).map(color => {
      const range = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      return range.map(num => `bg-${color}-${num}00`)
    }),
  ],
  // 扫描src中的文件识别出class
  //  extract: {
  //   include: ['src/**/*.{vue,html,jsx,tsx,ts}'],
  //   exclude: ['node_modules/**/*', '.git/**/*', '.vscode/**/*'],
  // },
  variants: {},
  extend: {},
  plugins: [
    formsPlugin,
    typography({
      dark: true,
    }),
  ],
})
