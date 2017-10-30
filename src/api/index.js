import Koa from 'koa';
import serve from 'koa-static';
import Logger from 'koa-logger';
import mysql from 'koa-mysql';
import send from 'koa-send';
import path from 'path'
import router from './controller';

const app = new Koa();

app.use(Logger());
app.use(router.routes());
app.use(async (ctx, next) => {
  const url = ctx.url;
  if (url.indexOf("api") == -1) {    
    await send(ctx, url);
  }
  await next();
});
//const db = mysql.createPool({ user: 'root', password: '', database: 'test', host: 'localhost' });

app.listen(7070);