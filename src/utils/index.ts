/*
 * @Author: DaiYu
 * @Date: 2022-04-26 14:46:40
 * @LastEditors: DaiYu
 * @LastEditTime: 2024-04-16 17:25:52
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
interface Result {
	[key: string]: any
}
export function getUrlObj(url = window.location.search): Result {
	const res: Result = {}
	if (url.includes('?')) {
		const str = url.split('?')[1]
		const arr = str.split('&')
		arr.forEach((item) => {
			const key = item.split('=')[0]
			const val = item.split('=')[1]
			res[key] = decodeURIComponent(val) // 解码
		})
	}
	return res
}

export function valueToLabel(list: Array<any>, val: number | string): string {
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
		parameters += `${key}=${encodeURIComponent(obj[key])}&`
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

/**
 * 生成并获取uuid（假设备号——缺点：不同浏览器打开都会生成新的）
 */
export function buildUUID() {
	let uuid = window.localStorage.getItem('uuid')
	if (!uuid) {
		let d = new Date().getTime()
		uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
			const r = (d + Math.random() * 16) % 16 | 0
			d = Math.floor(d / 16)
			return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
		})
		window.localStorage.setItem('uuid', uuid)
	}
	return uuid
}

export function openWindow(
	url: string,
	opt?: { target?: TargetContext | string, noopener?: boolean, noreferrer?: boolean },
) {
	const { target = '__blank', noopener = true, noreferrer = true } = opt || {}
	const feature: string[] = []

	noopener && feature.push('noopener=yes')
	noreferrer && feature.push('noreferrer=yes')

	window.open(url, target, feature.join(','))
}
