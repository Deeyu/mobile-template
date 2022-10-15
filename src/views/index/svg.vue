<!--
 * @Author: DaiYu
 * @Date: 2022-04-29 15:04:56
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-13 16:41:07
 * @FilePath: \src\views\index\svg.vue
-->
<template>
  <div>
    <div ref="box" class="box"></div>
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
    >
      <path
        id="path"
        ref="getLoadedLength"
        d="M903.3 597.3c0-158-123.4-287.6-278.8-297.7l-18.5-76c-3.2-13-1.1-26.4 5.9-37.8 6.9-11.4 17.9-19.4 30.9-22.6 26.8-6.5 53.9 10 60.4 36.8 5.4 22.2 27.7 35.8 50 30.4 22.2-5.4 35.8-27.8 30.4-50-17.3-71.1-89.2-114.9-160.3-97.6-34.5 8.4-63.6 29.7-82 60s-24 65.9-15.6 100.4l15.6 64C435.9 335.3 358 431.6 357.8 545.7c-0.1 13.1 1.5 26.3 4.6 39.1 10.2 41.8 36 77.2 72.8 99.5 25.6 15.6 54.3 23.6 83.5 23.6 12.8 0 25.6-1.5 38.4-4.6 41.8-10.2 77.2-36 99.5-72.8s29.1-80 18.9-121.8l-30-123.2c99.6 19 175.2 106.7 175.2 211.7 0 38.4-10.2 76.1-29.5 108.9 0 0.1-0.1 0.1-0.2 0.2-42.6 72.7-111 124.4-192.5 145.6-81.5 21.3-166.5 9.5-239.1-33.2-72.7-42.6-124.4-111-145.6-192.5-21.2-81.5-9.5-166.5 33.2-239.1 42-71.6 109.3-123 189.4-144.8 22-6 35.1-28.7 29.1-50.8-6-22-28.7-35.1-50.8-29.1-101.1 27.5-186 92.4-239.1 182.8-111.3 189.5-47.6 434 141.8 545.1 63.1 37 132.4 54.7 200.8 54.7 136.7 0 270-70.4 344.1-196.6 26.8-45.7 41-97.9 41-151.1zM440.5 546c0-75.4 51-138.9 120.3-158.2L595 528.3c4.9 20.3 1.7 41.4-9.2 59.3-10.9 17.9-28.1 30.4-48.4 35.4-20.4 4.9-41.4 1.7-59.3-9.2-17.9-10.9-30.4-28.1-35.4-48.4-1.5-6.3-2.3-12.7-2.2-19"
        fill="#bebebe"
        class="icon"
        stroke="red"
        stroke-width="10"
      />
      <!-- stroke-dasharray="6412.88671875"
        stroke-dashoffset="6412.88671875" -->
    </svg>
    <van-button block type="primary" @click="start">开始</van-button>
  </div>
</template>

<script lang="ts" setup name="">
import { gsap } from 'gsap'
// import { PixiPlugin } from 'gsap/PixiPlugin'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
gsap.registerPlugin(MotionPathPlugin)

// gsap.from('.icon', { duration: 2, delay: 1, x: 300 })
const getLoadedLength = ref<null | SVGPathElement>(null)
onMounted(() => {
  console.log('获取路径的总长度: ' + getLoadedLength.value?.getTotalLength())
})
const start = () => {
  // 创建时间轴
  const tl = gsap.timeline({ repeat: -1, yoyo: false })
  // gsap.to('.box', {
  //   repeat: -1,
  //   motionPath: {
  //     path: '#path',
  //     align: '#path',
  //     alignOrigin: [1, 1],
  //     autoRotate: true,
  //   },
  //   duration: 10,
  // })
  tl.fromTo('#path', { drawSVG: '0%' }, { drawSVG: '100%', duration: 5 })
}
</script>
<style lang="less" scoped>
.box {
  width: 30px;
  height: 30px;
  background: red;
  border-radius: 50%;
}
// .test:hover {
//   .icon {
//     stroke-dashoffset: 0;
//   }
// }
// path {
//   transition: stroke-dashoffset 2.5s linear 0s;
// }
</style>
