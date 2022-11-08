/*
 * @Author: DaiYu
 * @Date: 2022-10-25 10:32:00
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-11-08 08:51:50
 * @FilePath: \src\utils\verify.ts
 */
// 验证手机号
export const verifyPhone = (phone: string) => {
  return /^1\d{10}$/.test(phone)
}

// 校验车主注册密码
export const verifyPassword = (value: string) => {
  return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(value)
}
// 验证网址
export const verifyUrl = (url: string) => {
  return /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/.test(
    url,
  )
}
