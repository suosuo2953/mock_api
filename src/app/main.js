import Vue from 'Vue';
import App from './pages/MainLayout.vue';
import router from './router';

Vue.config.debug = true;
const app = new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});