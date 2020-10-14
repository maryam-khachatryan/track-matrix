import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
    theme: {
        options: { customProperties: true },
        themes: {
          light: {
            primary: '#000B2C',
            // anchor: '#000B2C',
            secondary: '#FBFBFD',
            accent: '#F6F9FD',
            // error: '#b71c1c',
          },
          dark: {
            // primary: colors.blue.lighten3,
          },
        },
      },
});
