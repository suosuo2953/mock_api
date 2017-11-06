<template>
  <div class="home-page">
    <div>
      <span class="cur-type">{{curType}}</span>
      <album-category-picker
        :categories="categories"
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
      <div class="pagination-container" v-show="total/pageSize > 1">
        <el-pagination
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :current-page="curPage"
          :total="total"
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
        switchObject: { '热门': 1 , '最新': 0 },
        loading: Loading.service(),
      };
    },
    computed: {
      ...mapGetters({
        albums: 'albums',
        categories: 'categories',
        total: 'total',
      }),
    },
    created: function() {
      const params = { tag: this.curType, offset: (this.curPage - 1) * this.pageSize, orderType: this.switchObject[this.switchValue] };
      this.getAlbums(params).then(() => {
        setTimeout(() => {
          this.loading.close();
        }, 600);
      });
    },
    methods: {
      handleSelect (key, keyPath) {},
      ...mapActions({
        getAlbums: 'getAlbums',
      }),
      changeType: function(type) {
        this.curType = type;
        this.curPage = 1;
        const params = { tag: this.curType, offset: (this.curPage - 1) * this.pageSize, orderType: this.switchObject[this.switchValue] };
        this.getAlbums(params);
      },
      handleCurrentChange: function(val) {
        this.curPage = val;
        const params = { tag: this.curType, offset: (val - 1) * this.pageSize, orderType: this.switchObject[this.switchValue] };
        this.getAlbums(params);
      },
      changSwitchValue: function() {
        const params = { tag: this.curType, offset: (this.curPage - 1) * this.pageSize, orderType: this.switchObject[this.switchValue] };
        this.getAlbums(params);
      }
    },
    components: { 'el-pagination': Pagination, 'el-radio-group': RadioGroup, 'el-radio-button': RadioButton },
  }; 
</script>
<style>

</style>