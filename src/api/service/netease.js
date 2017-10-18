import request from 'request';
import cheerio from 'cheerio';
import parse from '../utils/neteaseParser';

const getHotSongs = async (ctx, next) => {
  return new Promise((resolve, reject) => {
    const url = "http://music.163.com/discover/playlist";
    request.get(url, (error, response, body) => {
      const songs = parse(body);
      const data = { songs };
      ctx.body = data;
      resolve();
    });
  });
}

export default {
  getHotSongs
};