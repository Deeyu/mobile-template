/*
 * @Author: DaiYu
 * @Date: 2022-02-21 18:06:52
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-07-05 16:14:09
 * @FilePath: \src\store\index.ts
 */
import { createPinia } from 'pinia'
import { useUserStore } from './modules/user'
import { useAppStore } from './modules/home'
const pinia = createPinia()

export { useUserStore, useAppStore }
export default pinia
