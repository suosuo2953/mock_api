import Vue from 'vue';
import VueRouter from 'vue-router';
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import 'reset-css/reset.css';
import store from './store';
import App from './pages/MainLayout.vue';
import router from './router';

Vue.use(VueRouter);
Vue.config.debug = true;
const app = new Vue({
  el: '#app',
  store,
  router: router,
  render: h => h(App),
});