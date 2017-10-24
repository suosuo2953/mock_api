import Router from 'koa-router';

const router = new Router();

router.get('/user', (ctx, next) => {
  ctx.response.body = 'rest api';
  next();
}).post('/user/1', (ctx, next) => {
  ctx.response.body = 'this is post api';
  next();
});

export default router;