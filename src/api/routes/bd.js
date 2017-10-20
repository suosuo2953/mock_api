import Router from 'koa-router';
import bd from '../service/bd';

const router = new Router();
// 歌单列表
router.get('/bd/albumlist', bd.getAlbumList);

// 歌单歌曲列表
router.get('/bd/songlist/:albumId', bd.getSongList);

router.get('/bd/download/:songId', bd.download);
export default router;