import Koa from 'koa';
import serve from 'koa-static';
import Logger from 'koa-logger';
import send from 'koa-send';
import path from 'path';
import mysql from 'mysql';
import Sequelize from 'sequelize';
import models from './models';
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

models.sequelize.sync().then(function() {
  app.listen(7070);
});