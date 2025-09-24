import { createApp } from 'vue';
import App from './App.vue';
import { registerPlugins } from '@/plugins';
import router from '@/router'; // 重新引入 router

const app = createApp(App);

registerPlugins(app);
app.use(router);

// 等待路由準備好後再添加重定向規則
router.isReady().then(() => {
  router.addRoute({
    path: '/',
    redirect: '/order',
  });
});

app.mount('#app');
