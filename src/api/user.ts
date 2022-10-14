/*
 * @Author: DaiYu
 * @Date: 2022-07-05 09:51:05
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-14 10:07:13
 * @FilePath: \src\api\user.ts
 */
/*
 * @Author: DaiYu
 * @Date: 2022-07-02 09:43:09
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-07-05 09:47:51
 * @FilePath: \src\api\banner.ts
 */

import { defHttp } from '@/utils/http/axios'

enum Api {
  BANNER = '/banner',
}
/**
 * 可获取 banner( 轮播图 ) 数据
 * - type: 默认为 0: PC 1: android 2: iphone 3: ipad
 * @param {number=0} type
 */
export function getBanner(type: number) {
  return defHttp.post({
    url: Api.BANNER,
    params: { type },
  })
}
