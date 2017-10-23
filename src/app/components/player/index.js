import Vue from 'vue';
import Player from './index.vue'

const player = {
    install:function(Vue){
        Vue.component('Player', Player)
    }
};

export default player;