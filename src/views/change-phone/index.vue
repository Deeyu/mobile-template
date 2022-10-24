<!--
 * @Author: DaiYu
 * @Date: 2022-10-21 15:07:58
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-24 10:12:35
 * @FilePath: \src\views\change-phone\index.vue
-->
<template>
  <div class="m-10px">
    <van-cell-group inset>
      <van-field v-model="phone" label="新手机号" placeholder="请输入新的手机号" />
      <van-field v-model="sms" center clearable label="获取验证码" placeholder="请输入验证码">
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>
      <div class="mt-30px">
        <van-button round block type="primary" @click="submit">确认更换手机号</van-button>
      </div>
    </van-cell-group>
  </div>
</template>

<script lang="ts" setup name="ChangePhone">
const phone = ref('')
const sms = ref('')
const submit = (val: Event) => {
  console.log(123, val)
}
</script>
<style lang="less" scoped></style>
