<!--
 * @Author: DaiYu
 * @Date: 2022-07-02 14:41:18
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-13 16:42:53
 * @FilePath: \src\views\login\Login.vue
-->
<template>
  <div class="page">
    <div class="logo">
      <div class="bg">
        <svg-icon name="wangyiyun" color="#fff" :size="64" />
      </div>
    </div>
    <div class="btn">
      <van-button round block @click="login">手机号登录</van-button>
    </div>
    <div class="text">
      <van-checkbox v-model="checked" icon-size="16" checked-color="#bef">同意</van-checkbox>
      <span class="desc">服务条款，隐私政策</span>
    </div>
    <div class="type"></div>
    <div class="type"></div>
  </div>
</template>

<script lang="ts" setup name="">
console.log('1-开始创建组件-setup')
const checked = ref(false)
const route = useRouter()
onBeforeMount(() => {
  console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  console.log('3.-组件挂载到页面之后执行-------onMounted')
})

const login = () => {
  route.push({ name: 'LoginByPhone' })
}
</script>
<style lang="less" scoped>
.page {
  // #F22A25
  background-color: #bebebe; // #DB2C22

  .logo {
    display: flex;
    justify-content: center;
    padding-top: 20vh;

    .bg {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f22a25;
      border-radius: 50%;
      width: 160px;
      height: 160px;
    }
  }

  .btn {
    padding: 20vh 96px 96px;
  }

  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 14px;

    .desc {
      margin-left: 8px;
    }

    // ::v-deep usage as a combinator has been deprecated. Use :deep(<inner-selector>) instead
    // ::v-deep .van-checkbox__label {
    //   color: #bebebe;
    // }
    :v-deep(.van-checkbox__label) {
      color: #bebebe;
    }
  }
}
</style>
