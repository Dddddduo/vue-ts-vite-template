// 这边是统一管理所有接口的URL
// 定义不同环境下的后端基础 URL
const API_BASE_URL = {
    development: 'http://localhost:8080/api',
    production: 'https://your-prod-domain.com/api',
    test: 'https://your-test-domain.com/api'
};

// 根据当前环境获取对应的后端基础 URL
const getApiBaseUrl = () => {
    const env = import.meta.env.MODE;
    return API_BASE_URL[env as keyof typeof API_BASE_URL] || API_BASE_URL.development;
};

// 基础 URL
const BASE_URL = getApiBaseUrl();

// 定义所有接口的相对路径
const API_PATHS = {
    // 用户相关接口
    user: {
        login: '/user/login',
        register: '/user/register',
        profile: '/user/profile'
    },
    // 商品相关接口
    product: {
        list: '/product/list',
        detail: '/product/detail'
    }
};

// 组合基础 URL 和相对路径，生成完整的接口 URL
const API_URLS = {
    user: {
        login: `${BASE_URL}${API_PATHS.user.login}`,
        register: `${BASE_URL}${API_PATHS.user.register}`,
        profile: `${BASE_URL}${API_PATHS.user.profile}`
    },
    product: {
        list: `${BASE_URL}${API_PATHS.product.list}`,
        detail: `${BASE_URL}${API_PATHS.product.detail}`
    }
};

// 导出完整的接口 URL 对象
export default API_URLS;