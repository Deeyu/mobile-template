/*
 * @Author: DaiYu
 * @Date: 2022-04-25 16:46:38
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-26 11:28:06
 * @FilePath: \src\store\modules\user\index.ts
 */
import type { UserStore } from './type'

export const useUserStore = defineStore({
	id: 'user', // 必须，在所有 Store 中唯一
	state: (): UserStore => ({
		name: '超级管理员',
		token: '',
		userInfo: {},
	}),
	// getters
	getters: {
		nameLength: state => state.name.length,
	},
	actions: {
		async insertPost(data: string) {
			// 可以做异步
			// await doAjaxRequest(data);
			this.name = data
		},
		removeToken() {
			/** 清空token及用户信息 */
			this.userInfo = {}
			localStorage.removeItem('WSTOKEN')
		},
		setToken(token: string) {
			// 使用 this.$pat 修改多个值
			this.token = token ?? ''
			localStorage.setItem('WSTOKEN', token)
		},
		async login(_params: any) {
			try {
				// const {data} = await login(params)
				// this.setToken(data.token)
			}
			catch (error) {}
		},
		async logout() {
			this.removeToken()
		},
	},
})
