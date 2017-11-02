import Koa from 'koa';
import serve from 'koa-static';
import Logger from 'koa-logger';
import send from 'koa-send';
import path from 'path';
import mysql from 'mysql';
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

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'abc123_',
  database: 'my_music'
});

connection.connect((error) => {
  if (error) {
    console.log('connect to mysql failed:', error);
  } else {
    console.log('Connected to mysql!');
  }
});

app.listen(7070);