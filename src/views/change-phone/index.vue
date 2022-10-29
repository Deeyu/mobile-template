<!--
 * @Author: DaiYu
 * @Date: 2022-10-21 15:07:58
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-27 10:47:11
 * @FilePath: \src\views\change-phone\index.vue
-->
<template>
  <div class="h-full bg-[#f5f5f5]">
    <van-config-provider :theme-vars="themeVars">
      <div class="p-30px">
        <van-cell-group class="rounded-16px overflow-hidden">
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
            class="bg-primary border-none"
            round
            block
            type="primary"
            @click="submit"
            :disabled="!loginEnabled"
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
const submit = (val: Event) => {
  console.log(123, val)
}
const getSms = async () => {
  let param = {
    userPhone: phone.value,
    accountCategory: 200 as const,
  }
  try {
    await getDriverSms(param)
  } catch (error: any) {
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
