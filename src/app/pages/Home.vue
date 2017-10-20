<template>
  <div class="home-page">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">百度音乐</el-menu-item>
      <el-menu-item index="2">网易云音乐</el-menu-item>
      <el-menu-item index="3">虾米音乐</el-menu-item>
    </el-menu>
    <div>
      <ul class="play-list">
        <li v-for="album in albums" v-bind:key="album.id">
          <a v-bind:href="'/bd/songlist/' + album.id">
            <img v-bind:src="album.img" />
            <div class="overlay">
              <div class="play-icon-wrapper">
                <i class="el-icon-caret-right"></i>
              </div>
            </div>
            <p class="title">
              <a href="">{{album.title}}</a>
            </p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import { Menu, MenuItem, Submenu } from 'element-ui';
  import axios from 'axios';
  import './home.scss';

  export default {
    data () {
      return {
        activeIndex: '1',
        albums: [],
      };
    },
    created: function() {
      axios.get('/wrq/bd/albumlist').then(response => {
        this.albums = response.data.albums;
      });
    },
    methods: {
      handleSelect (key, keyPath) {}
    },
    components: { "el-menu": Menu, "el-menu-item": MenuItem, "el-submenu": Submenu },
  }; 
</script>
<style>

</style>