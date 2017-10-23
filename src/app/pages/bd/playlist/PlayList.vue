<template>
  <div class="bd-song-list"> 
    <div class="song-list-container">
      <div class="song-list-header">
        <span class="title">歌曲标题</span>
        <span class="singer">歌手</span>
      </div>
      <ul class="song-list">
        <li v-for="song in songs" v-bind:key="song.songItem.sid">
          <span class="play-icon" v-on:click="getMediaFile(song.songItem.sid)"><i class="el-icon-caret-right"/></span>
          <span class="song-name">{{song.songItem.sname}}</span>
          <span class="song-singer">{{song.songItem.author}}</span>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
  import axios from 'axios';
  import Player from '../../../components/player/index.js';
  import './index.scss';

  export default {
    data: function() {
      return {
        songs: [],
        currentMediaUrl: '',
      };
    },
    methods: {
      getMediaFile: function(mediaId) {
        axios.get(`/wrq/bd/download/${mediaId}`).then(response => {
          this.currentMediaUrl = response.data.mediaUrl;
        });
      },
    },
    created: function() {
      axios.get(`/wrq/bd/songlist/${this.$route.params.albumId}`).then(response => {
        this.songs = response.data.songs;
      });
    },
    components: { 'player': Player },
  };
</script>