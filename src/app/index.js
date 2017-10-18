import Vue from 'Vue';
//import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-default/index.css'
import App from './pages/MainLayout.vue';
import router from './router';

Vue.config.debug = true;
//Vue.use(ElementUI);
const app = new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});