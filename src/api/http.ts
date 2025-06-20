import axios from 'axios';
import API_URLS from '@/config/apiUrls.ts';

// 创建 axios 实例
const http = axios.create({
    timeout: 5000 // 请求超时时间
});

// 请求拦截器
http.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 响应拦截器
http.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 示例：使用配置好的 URL 发送请求
export const userLogin = async (data: any) => {
    return http.post(API_URLS.user.login, data);
};

export const getProductList = async () => {
    return http.get(API_URLS.product.list);
};

export default http;