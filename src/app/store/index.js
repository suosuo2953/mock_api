import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import baidu from './modules/baidu';

Vue.use(Vuex);

export default new Vuex.Store({
  baidu,
  modules: {
    baidu,
    user,
  },
});