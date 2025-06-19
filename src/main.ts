import { createApp } from 'vue';
import App from './App.vue'; // 导入 App 组件
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');