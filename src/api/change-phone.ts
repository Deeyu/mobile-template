/*
 * @Author: DaiYu
 * @Date: 2022-07-02 09:43:09
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-27 09:33:38
 * @FilePath: \src\api\change-phone.ts
 */

import { encryptByMd5 } from '@/utils/cipher'
import { MD5SING } from '@/utils/config'
import { GetSmsCodeParams } from './model/changeModel'
enum Api {
  CAPTCHA = 'driver/verifyCode/getSmscode',
  CHNAGEPHONEBYEXP = '/driver/exp/changePhone',
  CHNAGEPHONEBYTAXI = '/driver/taxi/changePhone',
}

/**
 * @description 司机更改手机号获取验证码
 * @param {string} signStr md5值
 * @param {string} userPhone 手机号
 * @param {number} accountCategory 业务类型
 * @param {number} [smsType=32] md5值
 * @param {boolean} [identifierCode=true] true
 */
export function getDriverSms(params: GetSmsCodeParams) {
  const { userPhone, smsType = 32, accountCategory, identifierCode = true } = params
  const signStr = encryptByMd5(`${smsType}&:${userPhone}&:${accountCategory}`) + MD5SING
  return driverHttp.post(
    {
      url: Api.CAPTCHA,
      params: {
        userPhone,
        smsType: 32,
        signStr,
        identifierCode,
        accountCategory,
      },
    },
    { errorMessageMode: 'none' }, // demo关闭错误信息提示
  )
}
