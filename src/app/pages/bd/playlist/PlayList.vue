<template>
  <div class="album-detail">
    <div class="playlist-container">
      <div class="info">
        <div class="cover" v-bind:class="{'default': !albumInfo.img}">
          <img v-if="albumInfo.img" :src="albumInfo.img"/>
        </div>
        <div class="detail">
          <div class="title">{{albumInfo.title}}</div>
          <div class="tags">
            <span>标签:</span><el-button disabled size="mini" v-for="tag in albumInfo.tags" :key="tag">{{tag}}</el-button>
          </div>
          <div class="desc">
            介绍:{{albumInfo.desc}}
          </div>
        </div>
        <div class="clear"></div>
      </div>
      <div class="playlist">
        <div>
          <span class="text">歌曲列表</span>
          <span class="number">{{albumInfo.songs.length}}首歌</span>
        </div>
        <div class="header">
          <span class="name">歌曲</span>
          <span class="singer">歌手</span>
          <span class="album">专辑</span>
        </div>
        <ul class="song-list">
          <li v-for="(song, index) in albumInfo.songs" v-bind:key="song.songItem.sid" :class="{ odd: index % 2 != 0 }">
            <span class="index">{{index + 1}}</span>
            <span class="play-icon"></span>
            <span class="name">{{song.songItem.sname}}</span>
            <span class="singer" :title="song.songItem.author">{{song.songItem.author}}</span>
            <span class="album" :title="song.album">{{song.album}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="others"></div>
    <div class="player-container">
      <div class="wrapper">
        <my-player :audioInfo="audioInfo" />
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import {  mapActions, mapGetters } from 'vuex'
  import { Button } from 'element-ui';
  import './index.scss';

  export default {
    data: function() {
      return {
        currentMediaUrl: '',
        defaultCover: './images/music.png',
        audioInfo: {
          url: '/src/media/你还要我怎样.mp3',
          name: '你还要我怎样',
          singer: '薛之谦',
          time: 320 },
      };
    },
    methods: {
      getMediaFile: function(mediaId) {
        axios.get(`/wrq/bd/download/${mediaId}`).then(response => {
          this.currentMediaUrl = response.data.mediaUrl;
        });
      },
      ...mapActions({
        getAlbumInfo: 'getAlbumInfo',
      }),
    },
    created: function() {
      this.getAlbumInfo(this.$route.params.albumId);
      //this.getMediaFile(30675626);
    },
    computed: {
      ...mapGetters({
        albumInfo: 'albumInfo',
      }),
    },
    components: { 'el-button': Button },
  };
</script>