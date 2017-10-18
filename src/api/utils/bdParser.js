import cheerio from 'cheerio';

const parse = () => {
  //const url = "http://music.baidu.com/songlist";
  const $ = cheerio.load(body);
  const songDoms = $(".songlist-list ul li");
  const songs = [];
  songDoms.each((i, ele) => {
    songs[i] = {
      img: $(ele).find("img").attr("src"),
      //num: $(ele).find(".num span").text(),
      title: $(ele).find(".text-title a").text(),
      author: $(ele).find(".text-user a").text(),
    }
  });
  const data = { songs };
  return data;
}