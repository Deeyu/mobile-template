<!--
 * @Author: DaiYu
 * @Date: 2022-07-02 14:41:18
 * @LastEditors: DaiYu
 * @LastEditTime: 2024-04-16 14:05:13
 * @FilePath: \src\views\login\index.vue
-->
<template>
	<div class="page h-full">
		<div class="form">
			<!-- 输入手机号，调起手机号键盘 -->
			<van-field v-model="form.phone" type="tel" label="手机号" />
			<!-- 允许输入正整数，调起纯数字键盘 -->
			<sms-input
				v-model="form.smsCode"
				:sms-enabled="smsEnabled"
				label="短信验证码"
				@get-sms="getSms"
			/>
			<van-field
				v-model="form.smsCode"
				center
				clearable
				type="digit"
				label="短信验证码"
				placeholder="请输入短信验证码"
			>
				<template #button>
					<van-button size="mini" type="primary" @click="getSms">
						发送验证码
					</van-button>
				</template>
			</van-field>
			<div class="text">
				<van-checkbox v-model="checked" icon-size="16" checked-color="#F22A25">
					同意
				</van-checkbox>
				<span class="desc">服务条款，隐私政策</span>
			</div>
			<div>
				<van-button round block @click="login">
					手机号登录
				</van-button>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { getLocation } from '@/hooks/useAmap'
import { verifyPhone } from '@/utils/verify'

const form = reactive({
	phone: '',
	smsCode: '',
})
const checked = ref(false)
const location = ref(null)
const smsEnabled = computed(() => form.phone.length === 11 && verifyPhone(form.phone))

// const route = useRouter()
onBeforeMount(async () => {
	console.log('2.组件挂载页面之前执行----onBeforeMount')
	location.value = await getLocation()
})
onMounted(() => {
	console.log('3.-组件挂载到页面之后执行-------onMounted')
})
function login() {}
function getSms() {}
</script>

<style lang="less" scoped>
.page {
	// #F22A25
	background-color: #f5f5f5; // #DB2C22
	.form {
		padding: 20vh 32px 32px;
		:deep(.van-cell) {
			height: 88px;
			margin-top: 32px;
			border-radius: 46px;
		}
	}
	.text {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		font-size: 14px;
		margin: 32px 0;
		.desc {
			margin-left: 8px;
			color: #bebebe;
		}
	}
}
</style>
