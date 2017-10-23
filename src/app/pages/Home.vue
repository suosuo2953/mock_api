<template>
  <div class="home-page">
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
              <span>{{album.title}}</span>
            </p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import { Loading } from 'element-ui';
  import axios from 'axios';
  import './home.scss';

  export default {
    data () {
      return {
        albums: [],
        fullscreenLoading: true,
      };
    },
    created: function() {
      const loading = Loading.service({ fullscreen: true, text: '拼命加载中...' });
      axios.get('/wrq/bd/albumlist').then(response => {
        this.albums = response.data.albums;
        loading.close();
      });
    },
    components: { 'el-loading': Loading },
  }; 
</script>
<style>

</style>