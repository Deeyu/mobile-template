/*
 * @Author: DaiYu
 * @Date: 2022-04-25 17:36:26
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-07-05 14:29:32
 * @FilePath: \src\utils\auth.ts
 */
const TokenKey = 'cookie'
const TokenPrefix = 'Bearer '
function isLogin() {
	return !!localStorage.getItem(TokenKey)
}
function getToken() {
	return localStorage.getItem(TokenKey)
}
function setToken(token: string) {
	localStorage.setItem(TokenKey, token)
}
function clearToken() {
	localStorage.removeItem(TokenKey)
}
export { TokenPrefix, isLogin, getToken, setToken, clearToken }
