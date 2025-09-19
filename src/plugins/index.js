import vuetify from './vuetify';
import router from '../router';
import i18n from './i18n';
import pinia from './pinia';

export function registerPlugins(app) {
  app.use(vuetify);
  app.use(router);
  app.use(i18n);
  app.use(pinia);
}
