import Vue from 'vue';
import Vuex from 'vuex';
import userStore from './modules/user';
import baiduStore from './modules/baidu';
import neteaseStore from './modules/netease';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    baiduStore,
    userStore,
    neteaseStore,
  },
});