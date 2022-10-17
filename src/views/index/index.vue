<!--
 * @Author: DaiYu
 * @Date: 2022-02-18 17:30:23
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-17 09:00:52
 * @FilePath: \src\views\index\index.vue
-->
<template>
  <div class="index">
    <app-header />
    <div class="content">
      <div class="banner">
        <van-swipe :autoplay="30000" lazy-render indicator-color="#fff">
          <van-swipe-item v-for="image in images" :key="image">
            <img class="img" :src="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 金刚区 -->
      <div class="jingang">
        <!-- <div class="ul">
          <div class="li" v-for="item in jingangList" :key="item.title">{{item.title}}</div>
        </div> -->
        <my-swiper :list="jingangList" :free-mode="true" />
      </div>
      <!-- 推荐歌单 -->
      <div class="recommend"></div>
      <!-- 热门播客 -->
      <div class="hot"></div>
    </div>
    <!-- 播放工具 -->
    <div class="playtool"></div>
  </div>
</template>

<script lang="ts" setup name="Index">
import { useAppStore } from '@/store/modules/home'
onBeforeMount(() => {
  console.log(123)
})
const appStore = useAppStore()
const jingangList = reactive([
  { title: '每日推荐', icon: '' },
  { title: '私人FM', icon: '' },
  { title: '歌单', icon: '' },
  { title: '排行榜', icon: '' },
  { title: '直播', icon: '' },
  { title: '数字专辑', icon: '' },
  { title: '有声书', icon: '' },
  { title: '关注新歌', icon: '' },
  { title: '歌房', icon: '' },
  { title: '游戏专区', icon: '' },
])
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
