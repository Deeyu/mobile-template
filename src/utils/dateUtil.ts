/*
 * @Author: DaiYu
 * @Date: 2022-10-13 16:57:45
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-13 16:57:46
 * @FilePath: \src\utils\dateUtil.ts
 */
import dayjs from 'dayjs'

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
const DATE_FORMAT = 'YYYY-MM-DD'

export function formatToDateTime(
  date: dayjs.Dayjs | undefined = undefined,
  format = DATE_TIME_FORMAT,
): string {
  return dayjs(date).format(format)
}

export function formatToDate(
  date: dayjs.Dayjs | undefined = undefined,
  format = DATE_FORMAT,
): string {
  return dayjs(date).format(format)
}

export const dateUtil = dayjs
