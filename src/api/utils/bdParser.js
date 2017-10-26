import cheerio from 'cheerio';

const parseAlbumList = (html) => {
  const $ = cheerio.load(html);
  const domList = $(".songlist-list ul li");
  const albums = [];
  domList.each((i, ele) => {
    const id = $(ele).find(".text-title a").attr("href").replace("/songlist/", "");
    albums[i] = {
      id,
      img: $(ele).find("img").attr("src"),
      num: $(ele).find(".num span").text(),
      title: $(ele).find(".text-title a").text(),
      author: $(ele).find(".text-user a").text(),
    }
  });

  const categoryDoms = $(".songlist-tag dl");
  const categories = [];
  categoryDoms.each((i, ele) => {
    const category = { name: $(ele).find('dt').text() };
    const typeDoms = $(ele).find('dd a');
    const types = [];
    typeDoms.each((n, tempEle) => {
      types[n] = $(tempEle).text(); 
    });
    category.types = types;
    categories[i] = category;
  });
  const pageInfo = $(".page_wiget .page-navigator-hook").attr("class");
  const startIndex = pageInfo.indexOf("'total':");
  const endIndex = pageInfo.indexOf(", 'size'");
  let total = pageInfo.substring(startIndex, endIndex);
  total = parseInt(total.replace("'total':", ''));
  return { albums, categories, total };
}

const parseAlbumInfo = (html) => {
  const $ = cheerio.load(html);
  const domList = $(".songlist-list ul li");
  const songs = [];
  domList.each((i, ele) => {
    const json = $(ele).attr("data-songitem");
    const song = JSON.parse(json);
    song.album = $(ele).find(".album-title a").attr("title");
    songs[i] = song;
  });
  const img = $(".songlist-info-pic img").attr("src");
  const title = $(".songlist-info-songlisttitle").text();

  const tagDoms = $(".songlist-info-tag a");
  const tags = [];
  tagDoms.each((i, ele) => {
    tags[i] = $(ele).text();
  });
  const desc = $(".songlist-info-desc-text").text();
  return { songs, img, title, tags, desc };
}

export default {
  parseAlbumList,
  parseAlbumInfo,
};