/*
 * @Author: DaiYu
 * @Date: 2022-10-15 16:45:41
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-21 15:13:44
 * @FilePath: \src\router\modules\test.ts
 */
import type { RouteRecordRaw } from 'vue-router'

const testRoutes: Array<RouteRecordRaw> = [
	{
		path: '/echarts-demo',
		name: 'EchartsDemo',
		meta: {
			title: 'echarts',
		},
		component: () => import('@/views/echarts/index.vue'),
	},
	{
		path: '/change-phone',
		name: 'ChangePhone',
		meta: {
			title: '修改手机号',
		},
		component: () => import('@/views/change-phone/index.vue'),
	},
]

export default testRoutes
