import Router from 'koa-router';
import bd from '../service/bd';

const router = new Router();
router.get('/bd/playlist', bd.getPlayList);

export default router;