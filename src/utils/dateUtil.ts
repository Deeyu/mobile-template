/*
 * @Author: DaiYu
 * @Date: 2022-10-13 16:57:45
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-11-01 19:32:00
 * @FilePath: \src\utils\dateUtil.ts
 */
import type { ConfigType, OpUnitType, QUnitType } from 'dayjs'
import dayjs from 'dayjs'
// import utc from 'dayjs/plugin/utc'
// import relativeTime from 'dayjs/plugin/relativeTime'

// 返回现在到当前实例的相对时间。
// dayjs.extend(relativeTime)
// dayjs.extend(utc)

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
const DATE_FORMAT = 'YYYY-MM-DD'

export function formatToDateTime(date: ConfigType, format = DATE_TIME_FORMAT): string {
	return dayjs(date).format(format)
}

export function formatToDate(date: ConfigType, format = DATE_FORMAT): string {
	return dayjs(date).format(format)
}

// n天前
export function getBeforeNDays(n: number) {
	return dayjs().subtract(n, 'day').format('YYYY-MM-DD')
}
// n天后
export function getAfterNDays(n: number) {
	return dayjs().add(n, 'day').format('YYYY-MM-DD')
}
// 近n天
export function getRecentlyDays(n: number) {
	const today = dayjs().format('YYYY-MM-DD')
	return {
		startTime: n > 0 ? dayjs().subtract(n, 'day').format('YYYY-MM-DD') : today,
		endTime: today,
	}
}

// https://dayjs.gitee.io/docs/zh-CN/display/difference
// 返回指定单位下两个日期时间之间的差异。
// date1.diff('2018-06-05', 'month') // 7
// date1.diff('2018-06-05', 'month', true) // 7.645161290322581
// date1.diff(date2) // 20214000000 默认单位是毫秒
export function diffTime(date1: ConfigType, date2: ConfigType, unit: QUnitType | OpUnitType, float = false) {
	return dayjs(date1).diff(dayjs(date2), unit, float)
}
export const dateUtil = dayjs
