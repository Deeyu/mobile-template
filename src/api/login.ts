/*
 * @Author: DaiYu
 * @Date: 2022-07-02 09:43:09
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-14 10:05:37
 * @FilePath: \src\api\login.ts
 */

import { defHttp } from '@/utils/http/axios'
import { LoginParams } from './model/loginModel'
enum Api {
  LOGINBYPHONE = '/login/cellphone',
  SESSION_TIMEOUT = '/user/sessionTimeout',
  TOKEN_EXPIRED = '/user/tokenExpired',
  CAPTCHA = '/captcha/sent',
  LOGINBYCAPTCHA = '/captcha/verify',
  LOGOUT = '/logout',
  CHECKLOGINSTATUS = '/login/status',
}

/**
 * @description 手机密码登录
 * @param {Object} params
 * @param {string} params.phone
 * @param {string} params.password
 * @param {string} params.countrycode=86 国家码，用于国外手机号登录，例如美国传入：1
 * @param {string} params.md5_password md5加密后的密码,传入后 password 将失效
 */
export function loginByPhone(params: LoginParams) {
  return defHttp.post({
    url: Api.LOGINBYPHONE,
    params,
  })
}

/**
 * @description 获取验证码
 * @param {string} phone
 */
export function getCaptcha(phone: string) {
  return defHttp.get({
    url: Api.CAPTCHA,
    params: { phone },
  })
}

/**
 * 验证码登录
 * - phone
 * - captcha: 验证码
 * - ctcode: 国家区号,默认 86 即中国
 * @param {Object} params
 * @param {string} params.phone
 * @param {string} params.captcha
 * @param {number=86} params.ctcode
 */
export function loginByCaptcha(params: LoginParams) {
  return defHttp.get({
    url: Api.LOGINBYCAPTCHA,
    params,
  })
}

export function checkLoginStatus() {
  return defHttp.get({
    url: Api.CHECKLOGINSTATUS,
  })
}

/**
 * 刷新登录
 * 说明 : 调用此接口 , 可刷新登录状态
 * - 调用例子 : /login/refresh
 */
export function refreshCookie() {
  return defHttp.post({
    url: '/login/refresh',
  })
}

/**
 * 退出登录
 * 说明 : 调用此接口 , 可退出登录
 */
export function logout() {
  return defHttp.get({
    url: Api.LOGOUT,
  })
}
