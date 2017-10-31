import request from 'request';
import http from 'http';
import fs from 'fs';
import cheerio from 'cheerio';
import constants from '../constants';
import parser from '../utils/bdParser';

const getAlbumList = async (ctx, next) => {
  console.log(1111);
  return new Promise((resolve, reject) => {
    const queryParam = ctx.request.query;
    const url = `${constants.BAIDU_ALBUMS_URL}/${encodeURIComponent(queryParam.tag)}?orderType=${queryParam.orderType}&offset=${queryParam.offset}`;
    request.get(url, (error, response, body) => {
      const result = parser.parseAlbumList(body);
      ctx.body = result;
      resolve();
    });
  });
}

const getAlbumInfo = async (ctx, next) => {
  return new Promise((resolve, reject) => {
    const albumId = ctx.params.albumId;
    const url = `${constants.BAIDU_ALBUM_DETAIL_URL}${albumId}`;
    request.get(url, (error, response, body) => {
      const album = parser.parseAlbumInfo(body);
      ctx.body = album;
      resolve();
    });
  });
}

const download = async (ctx, next) => {
  return new Promise((resolve, reject) => {
    const url = `${constants.BAIDU_SONG_DETAIL}${ctx.params.songId}&type=mp3`;
    request.get(url, (error, response, body) => {
      const data = JSON.parse(body);
      const song = data.data.songList[0];
      const mp3Url = song.songLink;
      http.get(mp3Url, (res) => {
        let filename = decodeURIComponent(res.headers['content-disposition'].match(/filename="(.+)"/)[1]);
        filename = filename.replace(".mp3", "");
        const filePath = `/src/media/${filename}${new Date().getTime()}.mp3`;
        const file = fs.createWriteStream("." + filePath);
        res.pipe(file);
        file.on('finish', function() {
          file.close(next);
          ctx.body = { url: filePath, name: song.songName, singer: song.artistName, time: song.time, pic: song.songPicRadio };
          resolve();
        });
      });
    });
  });
}

export default {
  getAlbumList,
  getAlbumInfo,
  download,
};