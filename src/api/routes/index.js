import Router from 'koa-router';
import user from './user';

const router = new Router();
router.prefix("/wrq");
router.use(user.routes());

export default router;
