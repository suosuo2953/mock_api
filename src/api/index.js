import Koa from 'koa';
import KoaStatic from 'koa-static';
import Logger from 'koa-logger';
import router from './routes';
import mysql from 'koa-mysql';

const app = new Koa();

app.use(Logger());
app.use(router.routes());

//const db = mysql.createPool({ user: 'root', password: '', database: 'test', host: 'localhost' });

app.listen(7070);