/*
 * @Author: DaiYu
 * @Date: 2022-07-05 15:43:31
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-13 10:08:47
 * @FilePath: \src\store\modules\home\index.ts
 */
import { defineStore } from 'pinia'
import { getBannerApi } from '@/api/home'
import { AppStore } from './type'

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
    async getBanner() {
      // 可以做异步
      const res = await getBannerApi(2)
      console.log(222, res)
    },
  },
})
