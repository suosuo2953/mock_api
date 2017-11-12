<template>
  <div class="my-header">
    <div class="wrapper">
      <el-menu :default-active="activeIndex" class="el-menu-tab" mode="horizontal" @select="handleSelect">
        <a href="/baidu/albumlist"><el-menu-item index="1">百度音乐</el-menu-item></a>
        <a href="/netease/albumlist"><el-menu-item index="2">网易云音乐</el-menu-item></a>
        <a href="/xiami/albumlist"><el-menu-item index="3">虾米音乐</el-menu-item></a>
      </el-menu>
      <div class="user-aciton">
        <el-button type="text" v-on:click="showLoginPop=true">登录</el-button>
        <el-button type="primary" v-on:click="showLoginPop=true">注册</el-button>
      </div>
      <div class="clear"></div> 
    </div>
    <el-dialog size="tiny" :visible.sync="showLoginPop" custom-class="login-dialog">
      <div class="login-header">
        <h1>登录MyMusic</h1>
        <h2>与世界分享你的知识、经验和见解</h2>
      </div>
      <div class="login-body">
        <el-input type="text" placeholder="用户名" v-model="username" :maxlength="15" />
        <el-input class="password" type="password" placeholder="密码" v-model="password" :maxlength="15" />
        <el-button class="login-btn" type="primary" size="size" v-on:click="login({username, password})">登录</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import {  mapActions, mapGetters } from 'vuex'
  import { Menu, MenuItem, Submenu, Button, Dialog, Input } from 'element-ui';
  import './index.scss';
  export default {
    name: 'my-header',
    data () {
      return {
        username: '',
        password: '',
        activeIndex: '1',
        showLoginPop: false,
      };
    },
    components: { "el-menu": Menu, "el-menu-item": MenuItem,
      "el-submenu": Submenu, "el-button": Button, "el-dialog": Dialog,
      "el-input": Input },
    computed: {
      ...mapGetters({
        userInfo: 'userInfo',
      }),
    },
    methods: {
      ...mapActions({
        login: 'login',
      }),
      handleSelect: function(key, keyPath) {
        console.log(key, keyPath);
      },
    }
  };
</script>