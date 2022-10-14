<!--
 * @Author: DaiYu
 * @Date: 2022-04-22 11:25:59
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-04-25 19:45:33
 * @FilePath: \src\components\HelloWorld.vue
-->
<script setup lang="ts" name="HelloWorld">
defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <van-button type="primary" @click="count++">count is: {{ count }}</van-button>
  <svg-icon name="sun.svg" />
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
