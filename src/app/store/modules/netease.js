import axios from 'axios';
import * as types from '../mutations-types';

const state = {
  neteaseAlbums: [],
  neteaseCategories: [],
  neteaseSongs: [],
  neteaseTotal: 0,
  neteaseAlbumInfo: { songs: [], title: '', img: '', tags: [] },
  neteaseSongInfo: { name: '' },
};

const getters = {
  neteaseAlbums: (state) => {
    return state.neteaseAlbums;
  },
  neteaseCategories: (state) => {
    return state.neteaseCategories;
  },
  neteaseTotal: (state) => {
    return state.neteaseTotal;
  },
  neteaseAlbumInfo: () => {
    return state.neteaseAlbumInfo;
  },
  neteaseSongInfo: () => {
    return state.neteaseSongInfo;
  }
};

const actions = {
  getNeteaseAlbums ({ commit, state }, params) {
    const url = `/api/netease/albumlist?cat=${params.cat}&order=${params.order}&offset=${params.offset}`;
    axios.get(url).then(response => {
      const neteaseAlbums = response.data.albums;
      const neteaseCategories = response.data.categories;
      const neteaseTotal = response.data.total;
      commit(types.GET_NETEASE_ALBUM_LIST, { neteaseAlbums, neteaseCategories, neteaseTotal });
    });
  },
  getNeteaseAlbumInfo ({ commit, state }, albumId) {
    const url = `/api/bd/albuminfo/${albumId}`;
    axios.get(url).then(response => {
      const neteaseAlbumInfo = response.data;
      commit(types.GET_NETEASE_ALBUM_INFO, neteaseAlbumInfo);
    });
  },
  getNeteaseSongInfo ({ commit, state }, songId) {
    const url = `/api/bd/download/${songId}`;
    axios.get(url).then(response => {
      commit(types.GET_NETEASE_SONG_INFO, response.data);
    });
  },
};

const mutations = {
  [types.GET_NETEASE_ALBUM_LIST](state, { neteaseAlbums, neteaseCategories, neteaseTotal }) {
    state.neteaseAlbums = neteaseAlbums;
    state.neteaseCategories = neteaseCategories;
    state.neteaseTotal = neteaseTotal;
  },
  [types.GET_NETEASE_ALBUM_INFO](state, neteaseAlbumInfo) {
    state.neteaseAlbumInfo = neteaseAlbumInfo;
  },
  [types.GET_NETEASE_SONG_INFO](state, neteaseSongInfo) {
    state.neteaseSongInfo = neteaseSongInfo;
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
}