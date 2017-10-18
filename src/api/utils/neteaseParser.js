import cheerio from 'cheerio';

const parse = (html) => {
  const $ = cheerio.load(html);
  const playList = $("#m-pl-container li");
  const list = [];
  playList.each((i, ele) => {
    list[i] = {
      img: $(ele).find("img").attr("src"),
      title: $(ele).find(".dec a").text(),
      num: $(ele).find(".nb").text(),
      author: $(ele).find(".s-fc4 a").text(),
    };
  });
  return list;
}

export default parse;