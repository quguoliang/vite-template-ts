
const fs = require('fs');

//判断文件是否存在
function judgeFileIsExist(path) {
  return fs.existsSync(path);
}

//首字母大写
function firstLetterUpper(name) {
  return name.substring(0, 1).toUpperCase() + name.substring(1);
}

const dirParams = process.argv[2];
const BASEPATH = './src/views';
// const capPirName =
if (!dirParams) {
  console.log('文件夹名称不能为空！');
  console.log('yarn run add test');
  process.exit(0);
}

let path = BASEPATH;
let dirList = [];
if (dirParams.indexOf('/') !== -1) {
  dirList = dirParams.split('/');
  if (dirList[dirList.length - 1] === '') {
    dirList.pop();
  }

  for (const item of dirList) {
    path = path + '/' + item;
    if (!judgeFileIsExist(`${path}`)) {
      fs.mkdirSync(`${path}`);
    }
  }
} else {
  dirList = [dirParams];
  path = path + '/' + dirList[0];
  if (!judgeFileIsExist(`${path}`)) {
    fs.mkdirSync(`${path}`);
  } else {
    console.log(`该文件夹已存在，请更换文件名称！🐈🐈🐈`);
    process.exit(0);
  }
}

//页面模板
const indexTep = `<template>
  <div class="app-container ${dirList[dirList.length - 1]}">
  ${dirList[dirList.length - 1]}页面
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: '${firstLetterUpper(dirList[dirList.length - 1])}',
  components: {
   
  },
  setup() {
    return {
    }
  },
})
</script>

<style lang="less">
@import './${dirList[dirList.length - 1]}.less';
</style>
`;

//less模板
const scssTep = `.${dirList[dirList.length - 1]}{}`;

//ts模板
const tsTep = `export { default } from './${dirList[dirList.length - 1]}.vue'`;

process.chdir(`${path}`);
fs.writeFileSync(`${firstLetterUpper(dirList[dirList.length - 1])}.vue`, indexTep);
fs.writeFileSync(`${firstLetterUpper(dirList[dirList.length - 1])}.less`, scssTep);
fs.writeFileSync(`index.ts`, tsTep);
console.log('🦄创建成功ಠ_ಠ~~');