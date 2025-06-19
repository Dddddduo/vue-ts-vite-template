import { createRouter, createWebHistory } from 'vue-router';
// 使用仅类型导入
import type { RouteRecordRaw } from 'vue-router';

// 模拟页面组件，实际使用时需替换为真实组件
const Home = () => import('@/views/Home.vue');
const About = () => import('@/views/About.vue');
const NotFound = () => import('@/views/NotFound.vue');

// 定义路由
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;