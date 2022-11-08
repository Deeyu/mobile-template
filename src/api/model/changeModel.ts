/*
 * @Author: DaiYu
 * @Date: 2022-10-25 10:01:43
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-25 10:40:49
 * @FilePath: \src\api\model\changeModel.ts
 */
type AccountCategoryOptions = 200 | 300 | 400 | 600

type SmsTypeOptions = 0 | 1 | 2 | 32 | 85 | 100

export interface GetSmsCodeParams {
  userPhone: string
  accountCategory: AccountCategoryOptions
  signStr?: string // 加密串
  smsType?: SmsTypeOptions // 短信类型
  identifierCode?: boolean // true为四位验证码
}
