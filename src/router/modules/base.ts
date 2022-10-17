/*
 * @Author: DaiYu
 * @Date: 2022-10-15 16:45:41
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-17 09:53:19
 * @FilePath: \src\router\modules\base.ts
 */
import type { RouteRecordRaw } from 'vue-router'
const baseRoutes: Array<RouteRecordRaw> = [
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
    component: () => import('@/views/login/Login.vue'),
  },
  {
    path: '/loginByPhone',
    name: 'LoginByPhone',
    meta: {
      title: '登录',
    },
    component: () => import('@/views/login/LoginByPhone.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/index',
  },
]

export default baseRoutes
