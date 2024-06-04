<!--
 * @Author: DaiYu
 * @Date: 2024-04-19 10:44:44
 * @LastEditors: DaiYu
 * @LastEditTime: 2024-06-04 11:03:15
 * @FilePath: \src\views\virtual-list\index-simple.vue
 * @Description: file content
-->
<template>
	<div class="virtualList" @scroll="handleScroll">
		<div :style="{ position: 'absolute', top: `${offset}px`, width: '100%' }">
			<div v-for="(item, i) in showList" :key="i" class="item">
				<div class="card h-100px flex-center bg-#bebebe">
					{{ item }}
				</div>
			</div>
		</div>
	</div>
</template>

<!-- 虚拟列表的实现，实际上就是在首屏加载的时候，只加载可视区域内需要的列表项，当滚动发生时，动态通过计算获得可视区域内的列表项，并将非可视区域内存在的列表项删除 -->
<script setup lang="ts">
// const virtualListRef = ref(null)
// const screenHeight = ref<number>(0) // 可视区高度
const list = ref<Array<number>>([]) // 全部数据
const showList = ref<Array<number>>([]) // 可视区域显示数据
const itemHeight = ref<number>(50) // 每条数据高度
const showNum = ref<number>(20) // 可视区域显示的最大数据量
const offset = ref<number>(0) // 偏移量
const scrollTop = ref<number>(0) // 滚动高度
const startIdx = ref<number>(0) // 可视区域起始索引
const endIdx = ref<number>(0) // 可视区域结束索引
const buffer = ref<number>(10) // 缓存区域

function getDataList() { // 数据初始化
	for (let i = 0; i < 1000; i++) {
		list.value.push(i + 1)
	}
}

function computedVirtual() { // 计算虚拟列表可视区域
	startIdx.value = Math.floor(scrollTop.value / itemHeight.value) // 可视化区域首位索引
	offset.value = scrollTop.value - (scrollTop.value % itemHeight.value) // 获取偏移量
	if (startIdx.value < 0) {
		startIdx.value = 0
	}
	if (startIdx.value > buffer.value) { // 计算缓冲区域,减少白屏出现概率
		offset.value -= buffer.value * itemHeight.value
		startIdx.value = startIdx.value - buffer.value
	}
	endIdx.value = startIdx.value + showNum.value + buffer.value // 可视化区域结束索引
	showList.value = list.value.slice(startIdx.value, endIdx.value) // 获取可视化区域的数据
}

function handleScroll() {
	scrollTop.value = document.getElementsByClassName('virtualList')[0].scrollTop
	computedVirtual()
}

getDataList()
computedVirtual()
</script>

<style>
  .virtualList {
	position: relative;
	width: 100%;
	height: 100vh;
	overflow: scroll;
}
.item {
	margin-bottom: 5px;
	text-align: center;
}
</style>
