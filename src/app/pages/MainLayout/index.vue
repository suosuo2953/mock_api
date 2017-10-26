<template>
  <div class="my-music">
    <my-header />
    <router-view class="my-body"></router-view>
    <my-footer />
  </div>
</template>
<script>
  import { Menu, MenuItem, Submenu } from 'element-ui';
  import Footer from '../Footer/index.vue';
  import Header from '../Header/index.vue';
  import './index.scss';

  export default {
    components: { "my-footer": Footer, "my-header": Header },
    mounted: function() {
      console.log('mounted calculate minheight......');
      const headerHeight = document.getElementsByClassName('my-header')[0].clientHeight;
      const footerHeight = document.getElementsByClassName('my-footer')[0].clientHeight;
      const minHeight = window.innerHeight - headerHeight - footerHeight;
      document.getElementsByClassName("my-body")[0].style.minHeight = `${minHeight - 22}px`;
    },
  }; 
</script>