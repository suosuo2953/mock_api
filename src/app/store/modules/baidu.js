import axios from 'axios';
import * as types from '../mutations-types';

const state = {
  albums: [],
  categories: [],
  songs: [],
  total: 0,
  albumInfo: { songs: [], title: '', img: '', tags: [] },
};

const getters = {
  albums: (state) => {
    return state.albums;
  },
  categories: (state) => {
    return state.categories;
  },
  total: (state) => {
    return state.total;
  },
  albumInfo: () => {
    return state.albumInfo;
  }
};

const actions = {
  getAlbums ({ commit, state }, params) {
    const url = `/api/bd/albumlist?tag=${params.tag}&orderType=${params.orderType}&offset=${params.offset}`;
    axios.get(url).then(response => {
      const albums = response.data.albums;
      const categories = response.data.categories;
      const total = response.data.total;
      commit(types.GET_ALBUM_LIST, { albums, categories, total });
    });
  },
  getAlbumInfo ({ commit, state }, albumId) {
    const url = `/api/bd/albuminfo/${albumId}`;
    axios.get(url).then(response => {
      const albumInfo = response.data;
      commit(types.GET_ALBUM_INFO, albumInfo);
    });
  },
};

const mutations = {
  [types.GET_ALBUM_LIST](state, { albums, categories, total }) {
    state.albums = albums;
    state.categories = categories;
    state.total = total;
  },
  [types.GET_ALBUM_INFO](state, albumInfo) {
    state.albumInfo = albumInfo;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
}