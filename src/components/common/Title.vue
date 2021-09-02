<template>
  <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal"
           @select="handleSelect"
           background-color="cornflowerblue"
           text-color="#fff"
           active-text-color="#ff0000"
           router
           >
      <el-menu-item index="/login">用户登陆界面</el-menu-item>
      <el-menu-item index="/register">用户注册界面</el-menu-item>
      <el-menu-item index="3">医生登陆界面</el-menu-item>
      <el-menu-item index="4">管理员后台登陆</el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .el-menu-demo {
    font-size: 60px;
  }
</style>
