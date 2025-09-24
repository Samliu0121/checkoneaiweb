import { createApp } from 'vue';
import App from './App.vue';
import { registerPlugins } from '@/plugins';
import router from '@/router'; // 重新引入 router
import '@/styles/scss/style.scss'; // 引入全域樣式

const app = createApp(App);

registerPlugins(app);
app.use(router);

app.mount('#app');
