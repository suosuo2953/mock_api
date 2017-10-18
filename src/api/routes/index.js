import Router from 'koa-router';
import user from './user';
import netease from './netease';

const router = new Router();
router.prefix("/wrq");
router.use(netease.routes());
router.use(user.routes());
export default router;
