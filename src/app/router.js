import Vue from 'Vue';
import VueRouter from 'vue-router';
import BD_AlbumList from './pages/BaiduMusic/AlbumList/index.vue';
import BD_AlbumDetail from './pages/BaiduMusic/AlbumDetail/index.vue';
import Netease_AlbumList from './pages/NeteaseMusic/AlbumList/index.vue';
import About from './pages/About.vue';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/netease/albumlist',
      component: Netease_AlbumList,
    },
    {
      path: '/baidu/albumlist',
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