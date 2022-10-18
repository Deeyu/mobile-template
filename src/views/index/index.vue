<!--
 * @Author: DaiYu
 * @Date: 2022-02-18 17:30:23
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-18 09:02:46
 * @FilePath: \src\views\index\index.vue
-->
<template>
  <div class="index">
    <div class="content">
      <div class="banner">
        <van-swipe :autoplay="30000" lazy-render indicator-color="#fff">
          <van-swipe-item v-for="image in images" :key="image">
            <img class="img" :src="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="Index">
import { useAppStore } from '@/store/modules/home'
onBeforeMount(() => {
  console.log(123)
})
const appStore = useAppStore()
const images = reactive<string[]>([
  'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
])
onMounted(async () => {
  await appStore.getBanner()
})
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
