<!--
 * @Author: DaiYu
 * @Date: 2022-04-23 17:15:07
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-13 16:41:27
 * @FilePath: \src\components\AppHeader.vue
-->
<!--  -->
<template>
  <div class="header_box">
    <div class="header">
      <div class="left">
        <svg-icon name="menu" color="#000" size="22" />
      </div>
      <div class="center">
        <div class="search">
          <van-icon class="icon" name="search" color="#333" size="16" />
          {{ search }}
        </div>
      </div>
      <div class="right">
        <svg-icon name="voice" color="#000" size="22" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="AppHeader">
// interface DataProps {}
// const data: DataProps = reactive({})
onBeforeMount(() => {})
onMounted(() => {})
const search = ref('张国荣')
// const placeholder = ref('')
// // const refData = toRefs(data)
// const tabIndex = ref(0)
// const back = () => {
//   alert('header头部， 点击返回')
// }
// const title = () => {
//   alert('header头部， 点击title')
// }
// const rightClick = () => {
//   alert('右侧点击事件')
// }
// const changeTab = (tab: any) => {
//   tabIndex.value = tab.paneKey as number
// }
</script>
<style lang="less" scoped>
.header_box {
  height: 88px;
  // background-color: #F8F3F2;
}
.header {
  display: flex;
  height: 88px;
}
.left,
.right {
  display: flex;
  align-items: center;
}
.center {
  display: flex;
  align-items: center;
  flex: 1;
  padding: 0 30px;
  .search {
    flex: 1;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 44px;
    color: #999;
    font-size: 24px;
    :deep(.icon) {
      margin-right: 8px;
    }
  }
}
</style>
