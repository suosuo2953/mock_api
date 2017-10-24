<template>
  <div id="album-category-picker">
    <el-popover
      ref="cat-popover"
      popper-class=""
      width="720">
      <h1>
        <el-button size="mini">全部风格</el-button>
      </h1>
      <dl v-for="category in categories" :key="category.name"></dl>
    </el-popover>
    <el-button v-popover:cat-popover size="small">选择分类 <i class="el-icon-arrow-down" /></el-button>
  </div>
</template>
<script>
  import { Button, Popover } from 'element-ui'; 
  import './index.scss';

  export default {
    name: 'album-category-picker',
    components: { 'el-button': Button, 'el-popover': Popover },
    data: function() {
      return {};
    },
    props: ['categories'],
  }
</script>
