import Vue from 'Vue';
import VueRouter from 'vue-router';
import BD_AlbumList from './pages/BD_AlbumList/index.vue';
import About from './pages/About.vue';
import BdSongList from './pages/BD/PlayList/PlayList.vue';

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
      component: BdSongList,
    }
  ]
});

export default router;