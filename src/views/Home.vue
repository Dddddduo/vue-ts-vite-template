<template>
  <div>
    <h1>首页</h1>
    <hello-world msg="欢迎来到dduo的前端模版项目！" />
    <!-- 跳转到 About 页面 -->
    <router-link to="/about" class="btn">跳转到 About 页面</router-link>
    <!-- 跳转到 Login 页面 -->
    <router-link to="/login" class="btn">跳转到 Login 页面</router-link>
  </div>
</template>

<script lang="ts" setup>
// 组件逻辑
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<style scoped>
.btn {
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>