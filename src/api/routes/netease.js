import Router from 'koa-router';
import request from 'request';
import cheerio from 'cheerio';
import netEase from '../service/netease';

const router = new Router();

router.get('/netease/hot', (ctx, next) => {
  return new Promise((resolve, reject) => {
    const url = "http://music.baidu.com/songlist";
    request.get(url, (error, response, body) => {
      const $ = cheerio.load(body);
      const songDoms = $(".songlist-list ul li");
      const songs = [];
      songDoms.each((i, ele) => {
        if (i == 0) {

          console.log($(ele).find(".num span"));
        }
        songs[i] = {
          img: $(ele).find("img").attr("src"),
          //num: $(ele).find(".num span").text(),
          title: $(ele).find(".text-title a").text(),
          author: $(ele).find(".text-user a").text(),
        }
      });
      const data = { songs };
      ctx.body = data;
      resolve();
    });
  });
});

//router.get('/netease/hot', netEase.getHotSongs);

export default router;