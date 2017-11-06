import Vue from 'Vue';
import VueRouter from 'vue-router';
import BD_AlbumList from './pages/BaiduMusic/AlbumList/index.vue';
import BD_AlbumDetail from './pages/BaiduMusic/AlbumDetail/index.vue';
import About from './pages/About.vue';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: BD_AlbumList,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/bd/songlist/:albumId',
      component: BD_AlbumDetail,
    }
  ]
});

export default router;