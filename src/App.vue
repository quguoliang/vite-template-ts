<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { APIS } from './services/api/api';
export default defineComponent({
  components: {},
  setup() {
    onMounted(async () => {
      const data = await APIS.PublicApi.loginGet({ usename: '张三', password: '123456' });
      console.log(data);
    });
  }
});
</script>

<style>
body {
  margin: 0;
}
#app {
}
</style>
