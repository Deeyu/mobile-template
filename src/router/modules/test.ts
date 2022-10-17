/*
 * @Author: DaiYu
 * @Date: 2022-10-15 16:45:41
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-17 09:55:55
 * @FilePath: \src\router\modules\test.ts
 */
import type { RouteRecordRaw } from 'vue-router'
const baseRoutes: Array<RouteRecordRaw> = [
  {
    path: '/echarts-demo',
    name: 'EchartsDemo',
    meta: {
      title: '登录',
    },
    component: () => import('@/views/echarts/index.vue'),
  },
]

export default baseRoutes
