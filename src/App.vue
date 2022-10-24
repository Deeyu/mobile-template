<!--
 * @Author: DaiYu
 * @Date: 2022-02-18 16:53:01
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-21 16:52:50
 * @FilePath: \src\App.vue
-->
<script setup lang="ts">
import 'dayjs/locale/zh-cn'
</script>
<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <template v-if="route.meta && route.meta.keepAlive">
        <keep-alive>
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </template>
      <component v-else :is="Component" :key="route.path" />
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
