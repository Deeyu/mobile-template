<!--
 * @Author: DaiYu
 * @Date: 2022-10-21 15:07:58
 * @LastEditors: DaiYu
 * @LastEditTime: 2024-04-16 17:23:20
 * @FilePath: \src\views\change-phone\index.vue
-->
<template>
	<div class="h-full bg-[#f5f5f5]">
		<van-config-provider :theme-vars="themeVars">
			<div class="p-30px">
				<van-cell-group class="overflow-hidden rounded-16px">
					<van-field
						v-model="phone"
						label="新手机号"
						placeholder="请输入新的手机号"
						maxlength="11"
					/>
					<sms-input v-model="sms" :sms-enabled="smsEnabled" label="获取验证码" @get-sms="getSms" />
				</van-cell-group>
				<div class="mt-60px">
					<van-button
						class="border-none bg-primary"
						round
						block
						type="primary"
						:disabled="!loginEnabled"
						@click="submit"
					>
						确认更换手机号
					</van-button>
				</div>
			</div>
		</van-config-provider>
	</div>
</template>

<script lang="ts" setup name="ChangePhone">
import { getDriverSms } from '@/api/change-phone'
import { verifyPhone } from '@/utils/verify'

const phone = ref('')
const sms = ref('')
const smsEnabled = computed(() => phone.value.length === 11 && verifyPhone(phone.value))
const loginEnabled = computed(() => phone.value.length === 11 && sms.value.length === 4)
function submit(val: Event) {
	console.log(123, val)
}
async function getSms() {
	const param = {
		userPhone: phone.value,
		accountCategory: 200 as const,
	}
	try {
		await getDriverSms(param)
	}
	catch (error: any) {
		showFailToast(error?.msg)
	}
}
// 覆盖组件样式
const themeVars = {
	cellLineHeight: '36px',
}
</script>

<style lang="less" scoped>
// :deep(.van-field__label) {
//   text-align: right;
// }
</style>
