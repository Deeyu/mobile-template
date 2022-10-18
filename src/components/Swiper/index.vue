<!--
 * @Author: DaiYu
 * @Date: 2022-05-04 14:45:00
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-13 16:47:06
 * @FilePath: \src\components\MySwiper\index.vue
-->
<!-- 轮播组件 -->
<template>
  <!-- :pagination="{
      clickable: true,
    }" -->
  <swiper
    class="ul"
    :slides-per-view="5"
    :space-between="spaceBetween"
    :autoplay="autoplay"
    :scrollbar="false"
    :free-mode="freeMode"
    :modules="modules"
    :pagination="pagination"
    effect="fade"
    loop
    @swiper="onSwiper"
    @slide-change="onSlideChange"
  >
    <swiper-slide v-for="(item, index) in list" :key="index" class="li">
      <div class="box">
        <p class="title">{{ item.title }}</p>
        <p class="icon">
          <van-icon class="icon" :name="item.icon" color="#333" size="16" />
        </p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts" setup name="MySwiper">
import type { PropType } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay, FreeMode } from 'swiper'
import 'swiper/css/bundle'
interface SwiperItem {
  title: string
  icon: string
}
// enum SwiperModule {

// }
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay])
const _props = defineProps({
  list: {
    type: Array as PropType<SwiperItem[]>,
    required: true,
  },
  autoplay: {
    type: Boolean || Object,
    default: false,
  },
  loop: {
    type: Boolean,
    default: false,
  },
  spaceBetween: {
    type: Number,
    default: 20,
  },
  spacing: {
    type: Number,
    default: 0,
  },
  freeMode: {
    type: Boolean,
    default: false,
  },
  pagination: {
    type: Boolean || Object,
    default: false,
  },
})
const emit = defineEmits(['swiper', 'slideChange'])
const modules: any[] = [FreeMode]
// const swiper = useSwiper()
const onSwiper = (sw: any) => {
  console.log(sw)
  emit('swiper')
}
const onSlideChange = () => {
  console.log('slide change')
  emit('slideChange')
}
</script>
<style lang="less" scoped>
.ul {
  height: 200px;
  .title {
    font-size: 12px;
    color: #666;
  }
}
</style>
