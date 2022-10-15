/*
 * @Author: DaiYu
 * @Date: 2022-07-02 10:05:13
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-07-05 10:20:06
 * @FilePath: \src\api\model\loginModel.ts
 */
/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  phone: string
  password: string
  countrycode?: number // 国家码，用于国外手机号登录，例如美国传入：1
  md5_password?: string //加密后的密码,传入后 password 参数将失效
  captcha?: string
  ctcode?: string | number
}

export interface RoleInfo {
  roleName: string
  value: string
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  userId: string | number
  token: string
  role: RoleInfo
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  roles: RoleInfo[]
  // 用户id
  userId: string | number
  // 用户名
  username: string
  // 真实名字
  realName: string
  // 头像
  avatar: string
  // 介绍
  desc?: string
}
