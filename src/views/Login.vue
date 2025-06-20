<template>
  <div>
    <button @click="login">用户登录</button>
    <button @click="getProducts">获取商品列表</button>
  </div>
</template>

<script lang="ts" setup>
import { userLogin, getProductList } from '../api/http';

const login = async () => {
  try {
    const response = await userLogin({ username: 'test', password: '123456' });
    console.log('登录成功:', response);
  } catch (error) {
    console.error('登录失败:', error);
  }
};

const getProducts = async () => {
  try {
    const response = await getProductList();
    console.log('商品列表:', response);
  } catch (error) {
    console.error('获取商品列表失败:', error);
  }
};
</script>

<style scoped>
/* 组件样式 */
</style>