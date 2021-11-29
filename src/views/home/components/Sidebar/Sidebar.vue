<template>
  <div class="sidebar">
    <el-menu
      default-active="2"
      class="sidebar-menu"
      router
    >
      <el-menu-item index="1" route="/">
        <el-icon><icon-menu /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><location /></el-icon>
          <span>活动管理</span>
        </template>
        <el-menu-item index="2-1" route="/active">item one</el-menu-item>
        <el-menu-item index="2-2" route="/active">item two</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from "@element-plus/icons";
import { log } from "console";

export default defineComponent({
  name: "Sidebar",
  components: {
    Location,
    Document,
    Setting,
    IconMenu,
  },
  setup() {
    const isCollapse = ref(true);

    return {
      isCollapse,

    };
  },
});
</script>

<style lang="less">
@import "./Sidebar.less";
</style>
