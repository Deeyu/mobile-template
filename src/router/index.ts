/*
 * @Author: DaiYu
 * @Date: 2022-02-18 17:29:40
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-13 10:42:46
 * @FilePath: \src\router\index.ts
 */
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import NProgress from '@/plugins/progress'
// 批量加载路由模块
const modules: Record<string, any> = import.meta.glob(
	// ['./modules/**/*.ts', '!**/dashboard.ts', '!**/about.ts'],
	['./modules/**/*.ts'],
	{
		eager: true,
	},
)
const routes: RouteRecordRaw[] = []

// 加入到路由集合中
Object.keys(modules).forEach((key) => {
	const mod = modules[key].default || {}
	const modList = Array.isArray(mod) ? [...mod] : [mod]
	routes.push(...modList)
})

const router = createRouter({
	history: createWebHistory(),
	routes,
})

router.beforeEach(async (_to, _from, next) => {
	NProgress.start()
	next()
})

router.afterEach((_to) => {
	NProgress.done()
})

export default router
