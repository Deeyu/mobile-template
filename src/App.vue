<!--
 * @Author: DaiYu
 * @Date: 2022-02-18 16:53:01
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-17 08:52:41
 * @FilePath: \src\App.vue
-->
<script setup lang="ts">
import 'dayjs/locale/zh-cn'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
const cachedViews = reactive([])
</script>

<template>
  <router-view v-slot="{ Component, route }" class="app-container">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews" :max="100123">
        <component :is="Component" :key="route.path" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<style lang="less">
// :deep() 之前的 '>>>' 已经被废弃，现在使用:deep()伪类
#app {
  height: 100vh;
  overflow-x: hidden;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @black;
}
</style>
