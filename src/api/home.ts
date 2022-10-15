/*
 * @Author: DaiYu
 * @Date: 2022-07-02 09:43:09
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-14 10:06:34
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

/**
 * 邮箱登录
 * - email: 163 网易邮箱
 * - password: 密码
 * - md5_password: md5加密后的密码,传入后 password 将失效
 * @param {Object} params
 * @param {string} params.email
 * @param {string} params.password
 * @param {string=} params.md5_password
 */
export function loginWithEmail(params) {
  return defHttp.post({
    url: '/login',
    method: 'post',
    params,
  })
}
