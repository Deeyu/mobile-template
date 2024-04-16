/*
 * @Author: DaiYu
 * @Date: 2022-02-18 16:53:01
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-11-23 10:53:35
 * @FilePath: \src\main.ts
 */
import { createApp } from 'vue'
import piniaStore from './store'
import App from './App.vue'
import router from './router'
import 'virtual:svg-icons-register'
import './assets/style/index'

const app = createApp(App)
// 添加全局属性
app.use(piniaStore)
app.use(router)
app.config.errorHandler = (err, instance, info) => {
	console.log(err, instance, info)
	// 处理错误，例如：报告给一个服务
}
// 只在开发环境有效，生产环境会被自忽略
// app.config.warnHandler = (msg, instance, trace) => {
// console.log(msg, instance, trace)
// trace 是组件层次结构
// }
app.mount('#app')
