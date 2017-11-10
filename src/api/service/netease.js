import request from 'request';
import cheerio from 'cheerio';
import constants from '../constants';
import parser from '../utils/neteaseParser';

const getAlbumList = async (ctx, next) => {
  return new Promise((resolve, reject) => {
    const queryParam = ctx.request.query;
    const cat = queryParam.cat || '';
    const order = queryParam.order || '';
    const limit = queryParam.limit || 20;
    const offset = queryParam.offset || 20;
    const url = `${constants.NETEASE_ALBUMS_URL}?cat=${encodeURIComponent(cat)}&order=${order}&limit=${limit}&offset=${offset}`;
    request.get(url, (error, response, body) => {
      const result = parser.parseAlbumList(body);
      ctx.body = result;
      resolve();
    });
  });
}

export default {
  getAlbumList
};