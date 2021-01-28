import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Cookies from 'js-cookie';
import './permission'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// Cookies.set('token', 'LKJISDFKNWGLKLSKNFNWLEIN1213LKNFLGIHFNK3');

Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
