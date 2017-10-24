import axios from 'axios';
import * as types from '../mutations-types';

const state = {
  albums: [],
  categories: [],
  songs: [],
};

const getters = {
  albums: (state) => {
    return state.albums;
  },
  categories: (state) => {
    return state.categories;
  }
};

const actions = {
  getAlbums ({ commit, state }, params) {
    axios.get('/wrq/bd/albumlist?tag=全部&orderType=0').then(response => {
      const albums = response.data.albums;
      const categories = response.data.categories;
      commit(types.GET_ALBUM_DATA, { albums, categories });
    });
  }
};

const mutations = {
  [types.GET_ALBUM_DATA](state, { albums, categories }) {
    state.albums = albums;
    state.categories = categories;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
}