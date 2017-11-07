import Koa from 'koa';
import serve from 'koa-static';
import Logger from 'koa-logger';
import send from 'koa-send';
import path from 'path';
import orm from 'orm';
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

orm.connectAsync("mysql://root:abc123_@localhost/my_music")
  .then(db => {
    db.load("./models", (err) => {
      const User = db.models.User;
    });
    db.syncPromise();
  })
  .catch(err => {
    console.error('Connection error: ' + err);
  });

app.listen(7070);
