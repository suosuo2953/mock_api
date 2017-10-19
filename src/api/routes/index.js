import Router from 'koa-router';
import user from './user';
import netease from './netease';
import bd from './bd';

const router = new Router();
router.prefix("/wrq");
router.use(netease.routes());
router.use(bd.routes());
router.use(user.routes());
export default router;
