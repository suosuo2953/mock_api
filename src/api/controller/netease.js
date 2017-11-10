import Router from 'koa-router';
import netEase from '../service/netease';

const router = new Router();
router.get('/netease/albumlist', netEase.getAlbumList);

export default router;