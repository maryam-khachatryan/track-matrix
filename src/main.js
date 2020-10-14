import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import './assets/styles/main.scss';
import BaseSelect from "./components/BaseSelect";
import BaseInput from "./components/BaseInput";
import BaseDatePicker from "./components/BaseDatePicker";
import BaseSwitch from "./components/BaseSwitch";
import RichTextEditor from 'rich-text-editor-vuetify'
 
 
Vue.use(RichTextEditor)

Vue.config.productionTip = false;
Vue.component('base-select', BaseSelect);
Vue.component('base-input', BaseInput);
Vue.component('base-date-picker', BaseDatePicker);
Vue.component('base-switch', BaseSwitch);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
