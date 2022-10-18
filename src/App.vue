<!--
 * @Author: DaiYu
 * @Date: 2022-02-18 16:53:01
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-18 15:51:04
 * @FilePath: \src\App.vue
-->
<script setup lang="ts">
import 'dayjs/locale/zh-cn'
</script>
<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <component v-if="route.meta && route.meta.keepAlive" :is="Component" :key="route.path" />
      </keep-alive>
    </transition>
    <component v-if="!(route.meta && route.meta.keepAlive)" :is="Component" :key="route.path" />
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
