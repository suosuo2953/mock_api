import Router from 'koa-router';
import user from './user';
import netease from './netease';
import baidu from './baidu';

const router = new Router();
router.prefix("/api");
router.use(user.routes());
router.use(baidu.routes());
export default router;

