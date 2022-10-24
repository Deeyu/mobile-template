/*
 * @Author: DaiYu
 * @Date: 2022-10-21 16:38:44
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-24 09:57:45
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
    presetUno(), // 工具类预设
    presetAttributify(), // 属性化模式支持
    presetIcons({
      scale: 1.2,
      warn: true,
    }), // Icon图标预设
  ],
  shortcuts: [],
  rules: [], // 可自定义规则
  preflights: [],
  theme: {
    colors: {
      primary: 'var(--primary-color)',
      primary_hover: 'var(--primary-color-hover)',
      primary_pressed: 'var(--primary-color-pressed)',
      primary_active: 'var(--primary-color-active)',
      info: 'var(--info-color)',
      info_hover: 'var(--info-color-hover)',
      info_pressed: 'var(--info-color-pressed)',
      info_active: 'var(--info-color-active)',
      success: 'var(--success-color)',
      success_hover: 'var(--success-color-hover)',
      success_pressed: 'var(--success-color-pressed)',
      success_active: 'var(--success-color-active)',
      warning: 'var(--warning-color)',
      warning_hover: 'var(--warning-color-hover)',
      warning_pressed: 'var(--warning-color-pressed)',
      warning_active: 'var(--warning-color-active)',
      error: 'var(--error-color)',
      error_hover: 'var(--error-color-hover)',
      error_pressed: 'var(--error-color-pressed)',
      error_active: 'var(--error-color-active)',
    },
  },
})
