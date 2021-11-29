<template>
  <div class="header">
    <div class="header-left">
      <el-icon class="header-left-icon"><cherry /></el-icon>
     <span>玛卡巴卡网</span>
    </div>
    <div class="header-right">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
      </el-avatar>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Cherry } from "@element-plus/icons";
export default defineComponent({
  name: 'Header',
  components: {
    Cherry
  },
  setup() {
    return {
    }
  },
});
</script>

<style lang='less' scoped>
@import './Header.less';
</style>
