<!--
 * @Author: DaiYu
 * @Date: 2022-02-18 16:53:01
 * @LastEditors: DaiYu
 * @LastEditTime: 2024-04-16 17:22:02
 * @FilePath: \src\App.vue
-->
<template>
	<router-view v-slot="{ Component, route }">
		<transition name="fade" mode="out-in">
			<template v-if="route.meta && route.meta.keepAlive">
				<keep-alive>
					<component :is="Component" :key="route.path" />
				</keep-alive>
			</template>
			<component :is="Component" v-else :key="route.path" />
		</transition>
	</router-view>
</template>

<script setup lang="ts">
import 'dayjs/locale/zh-cn'
</script>

<style lang="less">
// :deep() 之前的 '>>>' 已经被废弃，现在使用:deep()伪类
#app {
	height: 100vh;
	overflow-x: hidden;
	box-sizing: border-box;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: @black;
}
</style>
