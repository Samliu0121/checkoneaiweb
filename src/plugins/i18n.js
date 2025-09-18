import { createI18n } from 'vue-i18n';
import zhTW from '@/utils/i18n/locales/zh-TW.json';

const i18n = createI18n({
  legacy: false, // 必須設定為 false，才能使用 Composition API
  locale: 'zh-TW', // 設定當前語言
  fallbackLocale: 'zh-TW', // 設定備用語言
  messages: {
    'zh-TW': zhTW,
  },
});

export default i18n;
