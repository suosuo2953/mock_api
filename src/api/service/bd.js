import request from 'request';
import cheerio from 'cheerio';
import parse from '../utils/bdParser';

const getPlayList = async (ctx, next) => {
  return new Promise((resolve, reject) => {
    const url = "http://music.baidu.com/songlist";
    request.get(url, (error, response, body) => {
      const songs = parse(body);
      const data = { songs };
      ctx.body = data;
      resolve();
    });
  });
}

export default {
  getPlayList
};