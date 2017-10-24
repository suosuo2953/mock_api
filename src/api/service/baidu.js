import request from 'request';
import http from 'http';
import fs from 'fs';
import cheerio from 'cheerio';
import constants from '../constants';
import parser from '../utils/bdParser';

const getAlbumList = async (ctx, next) => {
  return new Promise((resolve, reject) => {
    const queryParam = ctx.request.query;
    const url = `${constants.BAIDU_ALBUMS_URL}/${queryParam.tag}?orderType=${queryParam.orderType}`;
    request.get(url, (error, response, body) => {
      const result = parser.parseAlbumList(body);
      ctx.body = result;
      resolve();
    });
  });
}

const getSongList = async (ctx, next) => {
  return new Promise((resolve, reject) => {
    const albumId = ctx.params.albumId;
    const url =  `http://music.baidu.com/songlist/${albumId}`;
    request.get(url, (error, response, body) => {
      const songs = parser.parseSongList(body);
      const data = { songs };
      ctx.body = data;
      resolve();
    });
  });
}

const download = async (ctx, next) => {
  return new Promise((resolve, reject) => {
    const url = `http://music.baidu.com/data/music/fmlink?songIds=${ctx.params.songId}&type=mp3`;
    request.get(url, (error, response, body) => {
      const data = JSON.parse(body);
      const mp3Url = data.data.songList[0].songLink;
      http.get(mp3Url, (res) => {
        let filename = decodeURIComponent(res.headers['content-disposition'].match(/filename="(.+)"/)[1]);
        filename = filename.replace(".mp3", "");
        const filePath = `/src/media/${filename}${new Date().getTime()}.mp3`;
        const file = fs.createWriteStream("." + filePath);
        res.pipe(file);
        file.on('finish', function() {
          file.close(next);
          ctx.body = { mediaUrl: filePath };
          resolve();
        });
      });
    });
  });
}

export default {
  getAlbumList,
  getSongList,
  download
};