/*
 * @Author: DaiYu
 * @Date: 2022-04-25 17:36:26
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-07-05 14:29:32
 * @FilePath: \src\utils\auth.ts
 */
const TokenKey = 'cookie'
const TokenPrefix = 'Bearer '
const isLogin = () => {
  return !!localStorage.getItem(TokenKey)
}
const getToken = () => {
  return localStorage.getItem(TokenKey)
}
const setToken = (token: string) => {
  localStorage.setItem(TokenKey, token)
}
const clearToken = () => {
  localStorage.removeItem(TokenKey)
}
export { TokenPrefix, isLogin, getToken, setToken, clearToken }
