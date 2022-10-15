<!--
 * @Author: DaiYu
 * @Date: 2022-04-22 17:48:47
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-06-14 10:34:47
 * @FilePath: \src\views\charts.vue
-->
<template>
  <div ref="lineChartDomRef">
    <div class="content">
      <svg-icon name="sun" />
      <svg-icon name="net-error" :size="160" />
      <svg-icon name="sun" />
      <svg-icon name="wangyiyun" :size="128" />
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { markRaw, ref, onMounted } from "vue";
// import * as echarts from "echarts";

// const lineChartInsRef = ref();
// const lineChartDomRef = ref();

// onMounted(() => {
//   // 初始化时使用markRaw，后面使用lineChartInsRef.value实例更新时，就不会报错了
//   const option = {
//     // ...
//   };
//   lineChartInsRef.value = markRaw(echarts.init(lineChartDomRef.value));
//   lineChartInsRef.value.setOption(option);

//   window.addEventListener("resize", () => {
//     lineChartInsRef.value.resize();
//   });
// });
</script>
