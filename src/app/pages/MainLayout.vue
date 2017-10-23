<template>
  <div class="my-music">  
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">百度音乐</el-menu-item>
      <el-menu-item index="2">网易云音乐</el-menu-item>
      <el-menu-item index="3">虾米音乐</el-menu-item>
    </el-menu>  
    <router-view class="body-container"></router-view>
  </div>
</template>
<script>
  import { Menu, MenuItem, Submenu } from 'element-ui';
  import './main.scss';

  export default {
    data () {
      return {
        activeIndex: '1',
      };
    },
    components: { "el-menu": Menu, "el-menu-item": MenuItem, "el-submenu": Submenu },
  }; 
</script>