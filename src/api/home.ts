/*
 * @Author: DaiYu
 * @Date: 2022-07-02 09:43:09
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-15 17:24:09
 * @FilePath: \src\api\home.ts
 */

import { defHttp } from '@/utils/http/axios'

enum Api {
  BANNER = '/banner',
}
/**
 * @description: 可获取 banner( 轮播图 ) 数据
 * @param {number} type 默认为 0: PC 1: android 2: iphone 3: ipad
 * @return {*}
 */
export function getBannerApi(type?: number) {
  return defHttp.post({
    url: Api.BANNER,
    params: { type },
  })
}
