import axios from 'axios';
import * as types from '../mutations-types';

const state = {
  albums: [],
  songs: [],
};

const getters = {
  albums: (state) => {
    return state.albums;
  },
};

const actions = {
  getAlbums ({ commit, state }, params) {
    axios.get('/wrq/bd/albumlist').then(response => {
      const albums = response.data.albums;
      commit(types.GET_ALBUMS, { albums });
    });
  }
};

const mutations = {
  [types.GET_ALBUMS](state, { albums }) {
    state.albums = albums;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
}