import Vue from 'Vue';
import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ]
});

export default router;