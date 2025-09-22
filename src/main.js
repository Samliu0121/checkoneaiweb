import { createApp } from 'vue';
import { createPinia } from 'pinia'; // 導入 createPinia
import App from './App.vue';
import { registerPlugins } from '@/plugins';

const app = createApp(App);
const pinia = createPinia(); // 創建 Pinia 實例

app.use(pinia); // 註冊 Pinia
registerPlugins(app);

app.mount('#app');
