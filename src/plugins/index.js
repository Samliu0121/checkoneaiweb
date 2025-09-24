import vuetify from './vuetify';
import i18n from './i18n';
import pinia from './pinia';

export function registerPlugins(app) {
  app.use(vuetify);
  app.use(i18n);
  app.use(pinia);
}
