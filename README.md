# Vue 3 + TypeScript + Vite 快速启动模板

## 项目简介
这是一个基于 **Vue 3**、**TypeScript** 和 **Vite** 构建的前端项目快速启动模板，旨在帮助开发者快速搭建生产级别的前端项目。模板采用现代化开发架构，集成了路由、状态管理、API 请求等核心功能，并通过 TypeScript 提供类型安全保障，提升开发效率和代码可维护性。

**仓库地址**：[https://github.com/Dddddduo/vue-ts-vite-template](https://github.com/Dddddduo/vue-ts-vite-template)
**作者**：[Dduo](https://github.com/Dddddduo)
**开发耗时**：1 天

## 技术栈
| 技术/工具 | 版本 | 说明 |
|----------|------|------|
| Vue 3 | ^3.5.13 | 渐进式 JavaScript 框架 |
| TypeScript | ~5.8.3 | 带有类型系统的 JavaScript 超集 |
| Vite | ^6.3.5 | 下一代前端构建工具 |
| Vue Router | ^4.5.1 | Vue 官方路由管理器 |
| Axios | ^1.10.0 | 基于 Promise 的 HTTP 客户端 |
| Element Plus | ^2.4.3 | 面向 Vue 3 的高质量组件库 |

## 已实现功能
### 核心架构
- ✅ **Vue 3 基础架构**：基于单文件组件（SFC）和 `<script setup>` 语法糖
- ✅ **TypeScript 完整配置**：包含 `tsconfig.json`、`tsconfig.app.json` 等类型定义
- ✅ **Vite 构建配置**：支持热更新、代码分割和生产环境优化

### 路由与导航
- ✅ **Vue Router 配置**：完成基础路由配置和动态路由加载
- ✅ **路由守卫**：支持登录验证和页面权限控制

### 数据交互
- ✅ **Axios 集成**：封装统一的 HTTP 请求管理
- ✅ **请求拦截器**：处理 token 验证和错误统一处理
- ✅ **API 接口管理**：模块化的接口请求封装

### 项目结构
- ✅ **清晰的目录层级**：按功能模块组织代码（组件、视图、工具等）
- ✅ **公共资源管理**：静态资源、样式文件统一管理

## 目录结构详解
```
vue-ts-vite-template/
├── .idea/                  # IDEA 项目配置文件
├── node_modules/           # 依赖包
├── public/                 # 静态资源（直接复制到输出目录）
│   ├── index.html          # 入口 HTML 文件
│   └── favicon.ico         # 网站图标
├── src/                    # 源代码目录
│   ├── api/                # API 请求接口
│   ├── assets/             # 资源文件（图片、样式、字体等）
│   ├── components/         # 通用组件
│   ├── router/             # 路由配置
│   ├── utils/              # 工具函数
│   ├── views/              # 页面视图
│   ├── App.vue             # 根组件
│   └── main.ts             # 入口文件
├── .DS_Store               # macOS 系统文件
├── README.md               # 项目说明文档
├── index.html              # 生产环境入口文件
├── package-lock.json       # 依赖版本锁定文件
├── package.json            # 项目依赖和脚本配置
├── tsconfig.app.json       # 应用程序 TypeScript 配置
├── tsconfig.json           # 主 TypeScript 配置
├── tsconfig.node.json      # Node.js 环境 TypeScript 配置
└── vite.config.ts          # Vite 构建配置
```
### 关键目录解析
#### `src/api/`
- **功能**：封装 API 请求接口，包含 Axios 实例配置、请求拦截器和响应处理
- **结构**：
  - `index.ts`：Axios 实例和请求拦截器
  - `user.ts`：用户相关接口
  - `api.ts`：其他业务接口

#### `src/router/`
- **功能**：路由配置和导航管理
- **结构**：
  - `index.ts`：路由表和全局守卫
  - `modules/`：模块路由拆分

#### `src/utils/`
- **功能**：工具函数库
- **包含**：
  - `storage.ts`：本地存储操作
  - `validate.ts`：数据验证
  - `request.ts`：请求工具

## 快速开始
### 环境要求
- Node.js ≥ 16
- npm ≥ 8 或 yarn ≥ 3

### 安装与运行
1. **克隆仓库**
```bash
git clone https://github.com/Dddddduo/vue-ts-vite-template.git
cd vue-ts-vite-template
```
2. **安装依赖**
```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install
```
3. **启动开发服务器**
```bash
# npm
npm run dev

# yarn
yarn dev
```
4. **构建生产版本**
```bash
# npm
npm run build

# yarn
yarn build
```
5. **本地预览生产版本**
```bash
# npm
npm run preview

# yarn
yarn preview
```

## 配置说明
### Vite 配置
- 配置文件：`vite.config.ts`
- **主要配置**：
  - 开发服务器端口（默认 `3000`）
  - 代理配置（用于本地开发时对接后端接口）
  - 静态资源处理
  - 生产环境优化选项

### TypeScript 配置
- 主配置：`tsconfig.json`
- 应用配置：`tsconfig.app.json`
- 节点配置：`tsconfig.node.json`
- **关键配置项**：
  - `strict: true`：开启严格类型检查
  - `jsx: 'vue-jsx'`：支持 Vue JSX 语法
  - `paths`：路径别名配置（如 `@/*` 指向 `src/*`）

## 组件与接口使用说明
### 组件开发规范
1. **组件命名**：采用 PascalCase 命名法（如 `HelloWorld.vue`）
2. **组件结构**：
```vue
<template>
  <!-- 模板内容 -->
</template>

<script setup lang="ts">
// TypeScript 逻辑
</script>

<style scoped>
/* 作用域样式 */
</style>
```

### API 请求使用示例
```typescript
import { getUserInfo } from '@/api/user'

// 获取用户信息
getUserInfo({ userId: 1 })
  .then(res => {
    console.log('用户信息:', res.data)
  })
  .catch(error => {
    console.error('请求错误:', error)
  })
```

### 路由导航示例
```typescript
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// 跳转到登录页
router.push('/login')

// 获取当前路由参数
const userId = route.params.userId as string
```

## 详细配置与开发步骤
### 一、配置路由
#### 1. 创建路由配置文件
首先，在 `src/router` 目录下创建路由配置文件。如果该目录不存在，请先创建它。
```bash
# 创建路由目录和文件
mkdir src/router
touch src/router/index.ts src/router/routes.ts
```
#### 2. 定义路由表
编辑 `src/router/routes.ts` 文件，定义应用的路由：
```typescript
// src/router/routes.ts
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'), // 确保 Home.vue 存在于 src/views/ 目录下
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: {
      public: true, // 标记为公共路由，无需登录即可访问
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  },
];

export default routes;
```
#### 3. 创建路由实例
编辑 `src/router/index.ts` 文件，创建路由实例并配置路由守卫：
```typescript
// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// 全局前置守卫，用于验证登录状态
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token'); // 检查本地存储中是否有 token
  
  // 如果路由需要认证且用户未登录，重定向到登录页
  if (!to.meta.public && !isAuthenticated) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
```
#### 4. 在主应用中使用路由
修改 `src/main.ts` 文件，将路由挂载到应用中：
```typescript
// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 导入路由

createApp(App)
  .use(router) // 使用路由
  .mount('#app');
```

### 二、配置后端路径
#### 1. 创建 API 目录和配置文件
在 `src` 目录下创建 `api` 目录，并创建相关配置文件：
```bash
# 创建 API 目录和文件
mkdir src/api
touch src/api/index.ts src/api/config.ts src/api/request.ts
```
#### 2. 配置后端基础路径
编辑 `src/api/config.ts` 文件，设置后端 API 的基础路径：
```typescript
// src/api/config.ts
// 根据环境变量设置 API 基础路径
const baseURL = import.meta.env.DEV
  ? 'http://localhost:3000/api' // 开发环境
  : 'https://your-production-api.com/api'; // 生产环境

export default {
  baseURL,
};
```
#### 3. 创建 Axios 实例
编辑 `src/api/request.ts` 文件，创建并配置 Axios 实例：
```typescript
// src/api/request.ts
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import config from './config';

// 创建 axios 实例
const service = axios.create({
  baseURL: config.baseURL,
  timeout: 10000, // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 在发送请求之前添加 token 到请求头
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 处理请求错误
    console.error('请求错误:', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 处理响应数据
    const res = response.data;
    if (res.code !== 200) {
      // 处理业务错误
      console.error('业务错误:', res.message);
      return Promise.reject(new Error(res.message || 'Error'));
    } else {
      return res;
    }
  },
  (error) => {
    // 处理 HTTP 错误
    console.error('HTTP 错误:', error);
    return Promise.reject(error);
  }
);

export default service;
```
#### 4. 封装业务接口
在 `src/api` 目录下创建具体业务接口文件，例如 `src/api/user.ts`：
```typescript
// src/api/user.ts
import request from './request';

// 获取用户信息
export function getUserInfo(params: { userId: number }) {
  return request.get('/user', { params });
}
```

### 三、创建组件
#### 1. 新建组件文件
在 `src/components` 目录下创建新的组件文件，例如创建一个简单的按钮组件 `MyButton.vue`：
```bash
touch src/components/MyButton.vue
```
#### 2. 编写组件代码
编辑 `src/components/MyButton.vue` 文件：
```vue
<template>
  <button class="my-button" @click="handleClick">
    {{ buttonText }}
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 接收外部传入的按钮文本
const props = defineProps<{
  buttonText: string;
}>();

const handleClick = () => {
  console.log('按钮被点击了');
};
</script>

<style scoped>
.my-button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
```
#### 3. 使用组件
在页面组件中使用创建好的组件，例如在 `src/views/Home.vue` 中使用 `MyButton.vue`：
```vue
<template>
  <div>
    <h1>首页</h1>
    <MyButton buttonText="点击我" />
  </div>
</template>

<script setup lang="ts">
import MyButton from '@/components/MyButton.vue';
</script>
```

## 官方文档链接
- **Vue 3 官方文档**：[https://vuejs.org/](https://vuejs.org/)
- **TypeScript 官方文档**：[https://www.typescriptlang.org/](https://www.typescriptlang.org/)
- **Vite 官方文档**：[https://vitejs.dev/](https://vitejs.dev/)
- **Vue Router 官方文档**：[https://router.vuejs.org/](https://router.vuejs.org/)
- **Axios 官方文档**：[https://axios-http.com/](https://axios-http.com/)

## 项目扩展建议
1. **状态管理**：可集成 Pinia 或 Vuex 实现全局状态管理
2. **UI 组件库**：已预留 Element Plus 集成入口，可直接使用
3. **单元测试**：可添加 Vitest 进行组件和函数测试
4. **国际化**：可通过 vue-i18n 实现多语言支持

## 贡献指南
如果您发现任何问题或有优化建议，欢迎提交 Issue 或 Pull Request。
1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 提交 Pull Request

## 联系方式
- **作者 GitHub**：[https://github.com/Dddddduo](https://github.com/Dddddduo)
- **博客**：[https://gczdy.blog.csdn.net/](https://gczdy.blog.csdn.net/)

如果这个模板对您有帮助，欢迎给项目点个 ⭐，感谢支持！
```

如果你还想对文档内容、格式做调整，比如增减模块、修改示例，欢迎随时告诉我。 
