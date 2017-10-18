import Router from 'koa-router';
import netEase from '../service/netease';

const router = new Router();
router.get('/netease/hot', netEase.getHotSongs);

export default router;