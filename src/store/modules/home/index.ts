/*
 * @Author: DaiYu
 * @Date: 2022-07-05 15:43:31
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-11-21 09:22:19
 * @FilePath: \src\store\modules\home\index.ts
 */
import { defineStore } from 'pinia'
import type { AppStore } from './type'
import { getSelectBusinessApi } from '@/api/home'

export const useAppStore = defineStore({
	id: 'mian',
	state: (): AppStore => ({
		bannerList: [],
	}),
	// getters
	getters: {
		bannerList: state => state.bannerList,
	},
	actions: {
		async getSelectBusinessApi() {
			// 可以做异步
			const res = await getSelectBusinessApi(0)
			console.log(222, res)
		},
	},
})
