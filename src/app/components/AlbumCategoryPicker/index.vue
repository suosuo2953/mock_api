<template>
  <div id="album-category-picker" v-bind:class="className">
    <el-popover
      ref="cat-popover"
      placement="bottom-start"
      popper-class="category-popover"
      v-model="popoverVisible"
      width="720">
      <h1>
        <el-button size="mini" v-on:click="changeType('全部')">全部风格</el-button>
      </h1>
      <div class="boundary"></div>
      <dl v-for="category in categories" :key="category.name">
        <dt class="category-name">{{category.name}}</dt>
        <dd class="type-container">
          <span v-for="type in category.types" :key="type">
            <a href="javascript:void(0)"
               class="type-value"
               v-bind:class="{ active: curType == type }"
               v-on:click="changeType(type)">{{type}}</a>
            <span class="line">|</span>
          </span>
        </dd>
      </dl>
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
      return {
        curType: '全部',
        popoverVisible: false,
      };
    },
    props: ['categories', 'className'],
    methods: {
      changeType: function(type) {
        this.curType = type;
        this.popoverVisible = false;
        this.$emit('changeType', type);
      },
    },
  }
</script>