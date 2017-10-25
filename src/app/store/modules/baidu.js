import axios from 'axios';
import * as types from '../mutations-types';

const state = {
  albums: [],
  categories: [],
  songs: [],
  total: 0,
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
  }
};

const actions = {
  getAlbums ({ commit, state }, params) {
    const url = `/wrq/bd/albumlist?tag=${params.tag}&orderType=${params.orderType}&offset=${params.offset}`;
    axios.get(url).then(response => {
      const albums = response.data.albums;
      const categories = response.data.categories;
      const total = response.data.total;
      commit(types.GET_ALBUM_DATA, { albums, categories, total });
    });
  }
};

const mutations = {
  [types.GET_ALBUM_DATA](state, { albums, categories, total }) {
    state.albums = albums;
    state.categories = categories;
    state.total = total;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
}