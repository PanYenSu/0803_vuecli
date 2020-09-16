import Vue from 'vue';
import 'bootstrap';
import axios from 'axios';
import VueAxios from 'vue-axios';
import jquery from 'jquery';
import {
  ValidationObserver,
  ValidationProvider, configure, localize, extend,
} from 'vee-validate'; // 驗證套件
import * as rules from 'vee-validate/dist/rules'; // 規則檔案（ex: email...）
import zhTW from 'vee-validate/dist/locale/zh_TW.json'; // 語系檔案
// import 'bootstrap';
// Bus
import './bus';
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
import '@fortawesome/fontawesome-free/css/all.css';
// import Swiper JS
import VueAwesomeSwiper from 'vue-awesome-swiper';
// import Swiper styles
import 'swiper/css/swiper.css';
// import { default as swal } from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import App from './App.vue';
import router from './router';
import currencyFilter from './filters/currency';

window.$ = jquery;

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

Vue.component('Loading', Loading);

// vee-validate
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
}); // 所有驗證規則
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});
localize('tw', zhTW);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
Vue.use(VueAwesomeSwiper);

Vue.filter('currency', currencyFilter);
// Vue.filter('currency', (num) => {
//   const n = Number(num);
//   return `$${n.toFixed(0).replace(/./g, (c, i, a) => {
//     const currency =
//  (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c);
//     return currency;
//   })}`;
// });

new Vue({
  created() {
    AOS.init(
      {
        duration: 2000,
      },
    );
  },
  router,
  render: (h) => h(App),
}).$mount('#app');
