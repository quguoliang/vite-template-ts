<template>
  <div class="home-page">
    <Header/>
    <div class="home-page-content">
      <Sidebar/>
      <router-view class="home-page-content-main"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default defineComponent({
  name:'HomePage',
  components: {
    Sidebar,
    Header
  },
  setup() {
  
  },
});
</script>

<style lang="less" scoped>
@import './HomePage.less';
</style>