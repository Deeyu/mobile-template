<!--
 * @Author: DaiYu
 * @Date: 2022-11-25 18:16:23
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-11-25 18:19:50
 * @FilePath: \src\views\video\index.vue
-->
<template>
	<div class="h-full">
		<div title="视频播放器插件" class="h-full rounded-16px shadow-sm">
			<div ref="domRef" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import Player from 'xgplayer'

const domRef = ref<HTMLElement>()
const player = ref<Player>()

function renderXgPlayer() {
	if (!domRef.value) {
		return
	}
	const url
    = 'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4'
	player.value = new Player({
		el: domRef.value,
		url,
		playbackRate: [0.5, 0.75, 1, 1.5, 2],
	})
}
function destroyXgPlayer() {
	player.value?.destroy()
}

onMounted(() => {
	renderXgPlayer()
})

onUnmounted(() => {
	destroyXgPlayer()
})
</script>

<style scoped></style>
