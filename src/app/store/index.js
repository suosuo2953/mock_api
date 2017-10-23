import Vue from 'vue';
import Vuex from 'vuex';
// import * as actions from './actions';
// import * as getters from './getters';
import baidu from './modules/baidu';

Vue.use(Vuex);

export default new Vuex.Store({
  baidu,
  modules: {
    baidu,
  },
});