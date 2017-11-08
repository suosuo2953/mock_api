import Koa from 'koa';
import Logger from 'koa-logger';
import send from 'koa-send';
import bodyParser from 'koa-bodyparser';
import router from './controller';
import dbConnect from './models';

const app = new Koa();

app.use(Logger());
app.use(bodyParser());
app.use(router.routes());

dbConnect((args, db) => {
  if (!app.context.dbContainer) {
    app.context.models = db.models;
  }
});

app.use(async (ctx, next) => {
  const url = ctx.url;
  if (url.indexOf("api") == -1) {  
    await send(ctx, url);
  }
  await next();
});
app.listen(7070);
