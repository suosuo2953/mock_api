import cheerio from 'cheerio';

const parseAlbumList = (html) => {
  const $ = cheerio.load(html);
  const albums = [];
  const albumDomList = $("#m-pl-container li");
  albumDomList.each((i, ele) => {
    const albumId = $(ele).find("a.icon-play").attr("data-res-id");
    albums[i] = {
      id: albumId,
      img: $(ele).find("img").attr("src"),
      num: $(ele).find(".nb").text(),
      title: $(ele).find(".dec a").text(),
      author: $(ele).find(".nm").text(),
    };
  });

  const categoryDomList = $("#cateListBox .f-cb");
  const categories = [];
  categoryDomList.each((i, ele) => {
    const category = { name: $(ele).find("dt").text() };
    categories[i] = category;
    const types = [];
    const typeDomList = $(ele).find("dd a");
    typeDomList.each((j, typeEle) => {
      types[j] = $(typeEle).text();
    });
    category.types = types;
  });

  const pageDomList = $(".u-page a.zpgi");
  const lastPageDom = $(".u-page a.zpgi")[pageDomList.length - 1];
  const total = parseInt($(lastPageDom).text()) * 35;
  return { albums, categories, total };
}

const parseAlbumDetail = (html) => {

};

export default {
  parseAlbumList,
  parseAlbumDetail,
};