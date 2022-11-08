<!--
 * @Author: DaiYu
 * @Date: 2022-07-02 14:41:18
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-13 16:42:22
 * @FilePath: \src\views\login\LoginByPhone.vue
-->
<template>
  <div class="page">
    <div class="form">
      <!-- 输入手机号，调起手机号键盘 -->
      <van-field v-model="form.phone" type="tel" label="手机号" />
      <!-- 允许输入正整数，调起纯数字键盘 -->
      <van-field
        v-model="form.smsCode"
        center
        clearable
        type="digit"
        label="短信验证码"
        placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button size="mini" type="primary" @click="getSms">发送验证码</van-button>
        </template>
      </van-field>
      <div class="text">
        <van-checkbox v-model="checked" icon-size="16" checked-color="#bef">同意</van-checkbox>
        <span class="desc">服务条款，隐私政策</span>
      </div>
      <div class="btn">
        <van-button round block @click="login">手机号登录</van-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="">
console.log('1-开始创建组件-setup')
const form = reactive({
  phone: '',
  smsCode: '',
})
const checked = ref(false)
// const route = useRouter()
onBeforeMount(() => {
  console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  console.log('3.-组件挂载到页面之后执行-------onMounted')
})

const login = () => {}
const getSms = () => {}
</script>
<style lang="less" scoped>
.page {
  // #F22A25
  background-color: #bebebe; // #DB2C22
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
    }
  }
}
</style>
