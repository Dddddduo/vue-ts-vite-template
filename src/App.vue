<template>
  <div id="app">
    <!-- 路由出口，用于渲染当前路由对应的组件 -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
// 组件逻辑
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<style scoped>
/* 组件样式 */
</style>