import cheerio from 'cheerio';

const parseAlbumList = (html) => {
  const $ = cheerio.load(html);
  const donList = $(".songlist-list ul li");
  const albums = [];
  donList.each((i, ele) => {
    const id = $(ele).find(".text-title a").attr("href").replace("/songlist/", "");
    albums[i] = {
      id,
      img: $(ele).find("img").attr("src"),
      num: $(ele).find(".num span").text(),
      title: $(ele).find(".text-title a").text(),
      author: $(ele).find(".text-user a").text(),
    }
  });
  return albums;
}

const parseSongList = (html) => {
  const $ = cheerio.load(html);
  const domList = $(".songlist-list ul li");
  const songs = [];
  domList.each((i, ele) => {
    const json = $(ele).attr("data-songitem");
    songs[i] = JSON.parse(json);
  });
  return songs;
}

export default {
  parseAlbumList,
  parseSongList
};