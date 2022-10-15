<!--
 * @Author: DaiYu
 * @Date: 2022-04-23 17:30:52
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-13 16:45:51
 * @FilePath: \src\components\Tabbar.vue
-->
<template>
  <div class="tabbar">
    <van-tabbar
      v-model="active"
      active-color="#E72D2C"
      inactive-color="#bebebe"
      placeholder
      safe-area-inset-bottom
      @change="onChange"
    >
      <van-tabbar-item>
        <span>发现</span>
        <template #icon="props">
          <div :class="props.active ? 'active' : ''">
            <svg-icon
              name="wangyiyun"
              :color="props.active ? '#fff' : '#bebebe'"
              :size="props.active ? 18 : 24"
            />
            <!-- <svg-icon
            :name="props.active ? 'wangyiyun1' : 'wangyiyun'"
            :size="props.active ? 24 : 30"
          ></svg-icon> -->
          </div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>播客</span>
        <template #icon="props">
          <div :class="props.active ? 'active' : ''">
            <svg-icon
              name="radio"
              :color="props.active ? '#fff' : '#bebebe'"
              :size="props.active ? 18 : 24"
            />
          </div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>我的</span>
        <template #icon="props">
          <div :class="props.active ? 'active' : ''">
            <svg-icon
              name="music"
              :color="props.active ? '#fff' : '#bebebe'"
              :size="props.active ? 18 : 24"
            />
          </div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>关注</span>
        <template #icon="props">
          <div :class="props.active ? 'active' : ''">
            <svg-icon
              name="peoples"
              :color="props.active ? '#fff' : '#bebebe'"
              :size="props.active ? 18 : 24"
            />
          </div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>云村</span>
        <template #icon="props">
          <div :class="props.active ? 'active' : ''">
            <svg-icon
              name="m"
              :color="props.active ? '#fff' : '#bebebe'"
              :size="props.active ? 18 : 24"
            />
          </div>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts" setup name="Tabbar">
// 没有提供设置 props 默认值的方式
// let props = withDefaults(
//   // 使用 defineProps宏可以用来定义组件的入参
//   defineProps<{
//     tabs: any[],
//   }>(),
//   {
//     tabs: []
//   }
// )

const active = ref(0)
onBeforeMount(() => {})
onMounted(() => {})
const onChange = (index: typeof active.value) => {
  console.log(index)
}
</script>
<style lang="less" scoped>
.active {
  background-color: #e72d2c;
  background-image: linear-gradient(to bottom left, rgb(229, 128, 128), #e72d2c);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  &:deep(.svg-icon-spin) {
    animation: loadingCircle 0.1s linear;
    @keyframes loadingCircle {
      0% {
        transform: scale(0.5);
      }
      100% {
        transform: scale(1);
      }
    }
  }
}
</style>
