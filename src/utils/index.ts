/*
 * @Author: DaiYu
 * @Date: 2022-04-26 14:46:40
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-14 09:51:42
 * @FilePath: \src\utils\index.ts
 */
import { isObject } from '@/utils/is'
// export const getUrlObj = () => {
//   // 创建一个URLSearchParams实例
//   // 兼容性不好
//   const urlSearchParams = new URLSearchParams(window.location.search)
//   // 把键值对列表转换为一个对象
//   const params = Object.fromEntries(urlSearchParams.entries())
//   return params
// }
type Result = {
  [key: string]: any
}
export function getParams(url: string): Result {
  const res: Result = {}
  if (url.includes('?')) {
    const str = url.split('?')[1]
    const arr = str.split('&')
    arr.forEach(item => {
      const key = item.split('=')[0]
      const val = item.split('=')[1]
      res[key] = decodeURIComponent(val) // 解码
    })
  }
  return res
}

export const valueToLabel = (list: Array<any>, val: number | string): string => {
  return list.find(({ value }) => value === val)?.label || ''
}

/**
 * Add the object as a parameter to the URL
 * @param baseUrl url
 * @param obj
 * @returns {string}
 * eg:
 *  let obj = {a: '3', b: '4'}
 *  setObjToUrlParams('www.baidu.com', obj)
 *  ==>www.baidu.com?a=3&b=4
 */
export function setObjToUrlParams(baseUrl: string, obj: any): string {
  let parameters = ''
  for (const key in obj) {
    parameters += key + '=' + encodeURIComponent(obj[key]) + '&'
  }
  parameters = parameters.replace(/&$/, '')
  return /\?$/.test(baseUrl) ? baseUrl + parameters : baseUrl.replace(/\/?$/, '?') + parameters
}

export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string
  for (key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key])
  }
  return src
}
