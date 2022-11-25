/*
 * @Author: DaiYu
 * @Date: 2022-10-21 16:38:44
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-11-25 16:49:27
 * @docs https://github.com/unocss/unocss
 * @FilePath: \unocss.config.ts
 */
import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  exclude: [
    'node_modules',
    '.git',
    '.github',
    '.husky',
    '.vscode',
    'build',
    'dist',
    'mock',
    'public',
    './stats.html',
  ],
  presets: [
    // 使用自带的内部预设， 按需引用
    presetUno(), // 工具类预设
    presetAttributify(), // 属性化模式支持
    presetIcons({
      // 只有安装了icon包才能使用对应图标
      // collections: {
      //   mdi: () =>
      //     import('@iconify-json/mdi/icons.json').then((i) => i.default as any),
      // },
      scale: 1.2,
      warn: true,
      extraProperties: {
        // 行内元素
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }), // Icon图标预设
  ],
  shortcuts: {
    'wh-full': 'w-full h-full',
    'flex-center': 'flex justify-center items-center',
    'flex-col-center': 'flex-center flex-col',
    hstack: 'flex items-center',
    vstack: 'flex flex-col',
    icon: 'w-6 h-6 fill-current',
    app: 'text-red',
    'app-border': 'border-gray-200 dark:border-dark-300',
    // btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
    btn: 'px-20px py-20px rounded inline-block bg-teal-600 text-white cursor-pointer active:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  },
  rules: [[/^bc-(.+)$/, ([, color]) => ({ 'border-color': `#${color}` })]], // 可自定义规则
  preflights: [],
  // transformers: [
  //   transformerDirectives(),
  //   transformerVariantGroup(),
  // ],
  theme: {
    colors: {
      primary: 'var(--van-red)',
      // primary_hover: 'var(--primary-color-hover)',
      // primary_pressed: 'var(--primary-color-pressed)',
      // primary_active: 'var(--primary-color-active)',
      // info: 'var(--info-color)',
      // info_hover: 'var(--info-color-hover)',
      // info_pressed: 'var(--info-color-pressed)',
      // info_active: 'var(--info-color-active)',
      success: 'var(--van-green)',
      // success_hover: 'var(--success-color-hover)',
      // success_pressed: 'var(--success-color-pressed)',
      // success_active: 'var(--success-color-active)',
      // warning: 'var(--warning-color)',
      // warning_hover: 'var(--warning-color-hover)',
      // warning_pressed: 'var(--warning-color-pressed)',
      // warning_active: 'var(--warning-color-active)',
      // error: 'var(--error-color)',
      // error_hover: 'var(--error-color-hover)',
      // error_pressed: 'var(--error-color-pressed)',
      // error_active: 'var(--error-color-active)',
    },
    spacing: {
      'safe-area-inset-top': 'env(safe-area-inset-top)',
      'safe-area-inset-bottom': 'env(safe-area-inset-bottom)',
    },
  },
})
