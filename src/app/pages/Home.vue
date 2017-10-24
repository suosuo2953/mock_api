<template>
  <div class="home-page">
    <div>
      <album-category-picker :categories="categories" />
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
  import { mapState, mapActions, mapGetters } from 'vuex'
  import './home.scss';

  export default {
    data () {
      return {
      };
    },
    computed: {
      ...mapGetters({
        albums: 'albums',
        categories: 'categories',
      }),
    },
    created: function() {
      this.getAlbums();
    },
    methods: {
      handleSelect (key, keyPath) {},
      ...mapActions({
        getAlbums: 'getAlbums',
      }),
    },
  }; 
</script>
<style>

</style>