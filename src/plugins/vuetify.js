import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader

const lightTheme = {
  dark: false,
  colors: {
    primary: '#ffb58a',
    secondary: '#fa320f',
    background: '#fff',
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: lightTheme
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});
