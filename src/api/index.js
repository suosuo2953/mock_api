import Koa from 'koa';
import KoaStatic from 'koa-static';
import Logger from 'koa-logger';
import router from './routes';

const app = new Koa();

app.use(Logger());

app.use(router.routes());

app.listen(7070);