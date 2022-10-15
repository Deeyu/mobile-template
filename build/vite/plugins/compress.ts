/*
 * @Author: DaiYu
 * @Date: 2022-10-13 11:05:30
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-15 09:59:55
 * @FilePath: \build\vite\plugins\compress.ts
 */
/**
 * @name ConfigCompressPlugin
 * @description 开启.gz压缩
 */
import type { PluginOption } from 'vite'
import viteCompression from 'vite-plugin-compression'

export const ConfigCompressPlugin = (
  compress: 'gzip' | 'brotli' | 'none',
  deleteOriginFile = false,
): PluginOption | PluginOption[] => {
  const compressList = compress.split(',')

  const plugins: PluginOption[] = []

  if (compressList.includes('gzip')) {
    plugins.push(
      viteCompression({
        ext: '.gz',
        deleteOriginFile, //删除源文件
      }),
    )
  }

  if (compressList.includes('brotli')) {
    plugins.push(
      viteCompression({
        ext: '.br',
        algorithm: 'brotliCompress', //压缩算法
        deleteOriginFile,
      }),
    )
  }
  return plugins
}
