import axios from 'axios';
import * as types from '../mutations-types';

const state = {
  userInfo: null,
};

const getters = {
  userInfo: (state) => {
    return state.userInfo;
  },
};

const actions = {
  login ({ commit, state }, params) {
    const url = "/api/user/login";
    axios.post(url, params).then(response => {
      console.log('response:', response);
      commit(types.USER_LOGIN, { });
    });
  },
};

const mutations = {
  [types.USER_LOGIN](state, { }) {
    state.userInfo = {};
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
}

