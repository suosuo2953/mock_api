import Router from 'koa-router';
import loginService from '../service/user';

const router = new Router();

router.post("/user/login", loginService.login);

export default router;