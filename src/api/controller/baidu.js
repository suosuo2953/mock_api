import Router from 'koa-router';
import baidu from '../service/baidu';

const router = new Router();
// 歌单列表
router.get('/bd/albumlist', baidu.getAlbumList);

// 歌单歌曲列表
router.get('/bd/songlist/:albumId', baidu.getSongList);

router.get('/bd/download/:songId', baidu.download);
export default router;