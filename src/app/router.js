import Vue from 'Vue';
import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import BdSongList from './pages/bd/playlist/PlayList.vue';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/bd/songlist/:albumId',
      component: BdSongList,
    }
  ]
});

export default router;