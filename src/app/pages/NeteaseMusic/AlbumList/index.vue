<template>
  <div class="home-page">
    <div class="wrapper">
      <span class="cur-type">{{curType}}</span>
      <album-category-picker
        :categories="neteaseCategories"
        className="bd-category-picker"
        v-on:changeType="changeType" />
      <div class="switch" @change="changSwitchValue">
        <el-radio-group v-model="switchValue" size="small">
          <el-radio-button label="热门"></el-radio-button>
          <el-radio-button label="最新"></el-radio-button>
        </el-radio-group>
      </div>
      <div class="boundary"></div>
      <ul class="play-list">
        <li v-for="album in neteaseAlbums" v-bind:key="album.id">
          <a v-bind:href="'/netease/songlist/' + album.id">
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
      <div class="pagination-container" v-show="neteaseTotal/pageSize > 1">
        <el-pagination
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :current-page="curPage"
          :total="neteaseTotal"
          :page-size="pageSize"></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
  import { Loading, Pagination, Radio, RadioGroup, RadioButton } from 'element-ui';
  import axios from 'axios';
  import {  mapActions, mapGetters } from 'vuex'
  import './index.scss';

  export default {
    data () {
      return {
        loading: true,
        curType: '全部',
        pageSize: 20,
        curPage: 1,
        switchValue: '热门',
        switchObject: { '热门': 'hot' , '最新': 'new' },
        loading: Loading.service(),
      };
    },
    computed: {
      ...mapGetters({
        neteaseAlbums: 'neteaseAlbums',
        neteaseCategories: 'neteaseCategories',
        neteaseTotal: 'neteaseTotal',
      }),
    },
    created: function() {
      const params = { tag: this.curType, offset: (this.curPage - 1) * this.pageSize, order: this.switchObject[this.switchValue] };
      this.getNeteaseAlbums(params).then(() => {
        setTimeout(() => {
          this.loading.close();
        }, 600);
      });
    },
    methods: {
      handleSelect (key, keyPath) {},
      ...mapActions({
        getNeteaseAlbums: 'getNeteaseAlbums',
      }),
      changeType: function(type) {
        this.curType = type;
        this.curPage = 1;
        const params = { cat: this.curType, offset: (this.curPage - 1) * this.pageSize, order: this.switchObject[this.switchValue] };
        this.getNeteaseAlbums(params);
      },
      handleCurrentChange: function(val) {
        this.curPage = val;
        const params = { cat: this.curType, offset: (val - 1) * this.pageSize, order: this.switchObject[this.switchValue] };
        this.getNeteaseAlbums(params);
      },
      changSwitchValue: function() {
        const params = { cat: this.curType, offset: (this.curPage - 1) * this.pageSize, order: this.switchObject[this.switchValue] };
        this.getNeteaseAlbums(params);
      }
    },
    components: { 'el-pagination': Pagination, 'el-radio-group': RadioGroup, 'el-radio-button': RadioButton },
  }; 
</script>
<style>

</style>