<!--
 * @Author: DaiYu
 * @Date: 2024-04-22 09:44:10
 * @LastEditors: DaiYu
 * @LastEditTime: 2024-04-22 09:50:07
 * @FilePath: \src\views\virtual-list\vue-virtual-scroller.vue
 * @Description: file content
-->
<template>
	<RecycleScroller
		v-slot="{ item }"
		class="scroller"
		:items="list"
		:item-size="32"
		key-field="id"
	>
		<div class="user">
			{{ item.name }}
		</div>
	</RecycleScroller>
</template>

<script lang='ts' setup name=''>
import { RecycleScroller } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

const list = ref([])
</script>

<style lang='less' scoped>
</style>
