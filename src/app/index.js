import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './pages/MainLayout.vue';
import router from './router';

Vue.use(VueRouter);
Vue.config.debug = true;
Vue.use(Vuex)
const app = new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});