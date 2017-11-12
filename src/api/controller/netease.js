import Router from 'koa-router';
import netEase from '../service/netease';

const router = new Router();
router.get('/netease/albumlist', netEase.getAlbumList);

router.get('/netease/albuminfo/:albumId', netEase.getAlbumInfo);

export default router;