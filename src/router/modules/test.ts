/*
 * @Author: DaiYu
 * @Date: 2022-10-15 16:45:41
 * @LastEditors: DaiYu
 * @LastEditTime: 2024-05-21 14:30:56
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
	{
		path: '/virtual-list',
		name: 'VirtualList',
		meta: {
			title: '虚拟列表',
		},
		component: () => import('@/views/virtual-list/index.vue'),
	},
	{
		path: '/demo',
		name: 'Demo',
		meta: {
			title: '布局',
		},
		component: () => import('@/views/demo/index.vue'),
	},
]

export default testRoutes
