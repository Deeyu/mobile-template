/*
 * @Author: DaiYu
 * @Date: 2022-10-15 16:45:41
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-18 11:29:00
 * @FilePath: \src\router\modules\base.ts
 */
import type { RouteRecordRaw } from 'vue-router'
const baseRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('@/views/index/index.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
    },
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

export default baseRoutes
