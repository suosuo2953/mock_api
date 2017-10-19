import cheerio from 'cheerio';

const parse = (html) => {
  const $ = cheerio.load(html);
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
  return songs;
}

export default parse;