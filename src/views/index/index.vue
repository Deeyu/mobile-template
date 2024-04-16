<!--
 * @Author: DaiYu
 * @Date: 2022-02-18 17:30:23
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-11-28 09:23:21
 * @FilePath: \src\views\index\index.vue
-->
<template>
	<div class="index">
		<div class="content">
			<div class="banner">
				<van-swipe :autoplay="30000" lazy-render indicator-color="#fff">
					<van-swipe-item v-for="image in images" :key="image">
						<img class="img" :src="image">
					</van-swipe-item>
				</van-swipe>
			</div>
			<van-field
				v-model="time"
				is-link
				readonly
				label="开始时间"
				placeholder="选择开始时间"
				@click="show = true"
			/>
			<van-popup
				v-model:show="show"
				round
				position="bottom"
				:style="{ height: '35%', overflow: 'hidden' }"
			>
				<van-date-picker
					title="选择日期"
					:min-date="minDate"
					:max-date="maxDate"
					@cancel="cancel"
					@confirm="confirm"
				/>
			</van-popup>
		</div>
		<div class="h-88px">
			<better-scroll ref="bsScroll" :options="{ scrollX: true, scrollY: false }">
				<div class="bg-[#F22A25] opacity-80 btn">
					立即叫车
				</div>
				<div class="bg-[#F22A25] opacity-80 btn">
					立即叫车
				</div>
				<div class="bg-[#F22A25] opacity-80 btn">
					立即叫车
				</div>
				<div class="bg-[#F22A25] opacity-80 btn">
					立即叫车
				</div>
				<div class="bg-[#F22A25] opacity-80 btn">
					立即叫车
				</div>
				<div class="bg-[#F22A25] opacity-80 btn">
					立即叫车
				</div>
				<div class="bg-[#F22A25] opacity-80 btn">
					立即叫车
				</div>
			</better-scroll>
		</div>
		<div class="bg-[#F22A25] opacity-80 btn">
			立即叫车
		</div>
	</div>
</template>

<script lang="ts" setup name="Index">
import type { PickerConfirmEventParams } from 'vant'
import type { BScrollInstance } from 'better-scroll'
import { useAppStore } from '@/store/modules/home'

onBeforeMount(() => {
	console.log(123)
})
const appStore = useAppStore()
const images = reactive<string[]>([
	'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
	'https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
])

const time = ref('')
const minDate = new Date(2021, 0, 1)
const maxDate = new Date(2023, 10, 1)
const show = ref(false)
const bsScroll = ref<BScrollInstance>()
onMounted(async () => {
	await appStore.getSelectBusinessApi()
})
function confirm({ selectedOptions }: PickerConfirmEventParams) {
	console.log(selectedOptions)
	show.value = false
	time.value = selectedOptions.reduce((pre, next) => pre + (pre ? '-' : '') + next?.text, '')
}
function cancel() {
	show.value = false
}
</script>

<style lang="less" scoped>
.index {
	display: flex;
	flex-direction: column;
	height: 100%;
	box-sizing: border-box;
	padding: 0 18px;
	background: #f8f8f8;

	.content {
		flex: 1;

		&:deep(.logo) {
			stroke-dasharray: 600;
			stroke-dashoffset: 600;
			animation: offset 2s linear infinite;

			@keyframes offset {
				to {
					stroke-dashoffset: 0;
				}
			}
		}

		.banner {
			border-radius: 8px;

			.img {
				width: 100%;
				height: 300px;
				border-radius: 20px;
			}

			:deep(.van-swipe__indicator) {
				width: 14px;
				height: 6px;
				border-radius: 4px;
			}
		}

		// .ul {
		//   display: flex;
		//   overflow-x: scroll;
		//   .li {
		//     flex: 0 0 200px;
		//   }
		// }
	}
}
</style>
