<template>
  <div class="home">
    <el-container>
      <el-header class="header">
        <div></div>
        <h3>星荣医院管理系统</h3>
        <el-dropdown @command="userCommand">
                 <span class="el-dropdown-link">
                   用户你好
                  <i class="el-icon-arrow-down el-icon--right"></i>
                 </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="userCenter">用户中心</el-dropdown-item>
            <el-dropdown-item command="logout">注销登陆</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu router default-active="2" class="el-menu-vertical-demo">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>公告</span>
              </template>
              <el-menu-item index="/video">
                <span slot="title" @click="">影视咨询</span>
              </el-menu-item>
              <el-menu-item index="/game">
                <span slot="title" @click="">电竞咨询</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-custom"></i>
                <span>医生模块</span>
              </template>
              <el-menu-item index="/docquery">
                <span slot="title" @click="">医生信息全部查询</span>
              </el-menu-item>
              <el-menu-item index="/docadd">
                <span slot="title" @click="">医生信息添加</span>
              </el-menu-item>
              <el-menu-item index="/video">
                <span slot="title" @click="">医生信息修改</span>
              </el-menu-item>
              <el-menu-item index="/game">
                <span slot="title" @click="">医生信息删除</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-user"></i>
                <span>用户模块</span>
              </template>
              <el-menu-item index="/docquery">
                <span slot="title" @click="">用户操作</span>
              </el-menu-item>
              <el-menu-item index="/docadd">
                <span slot="title" @click="">用户操作</span>
              </el-menu-item>
              <el-menu-item index="/video">
                <span slot="title" @click="">用户操作</span>
              </el-menu-item>
              <el-menu-item index="/game">
                <span slot="title" @click="">用户操作</span>
              </el-menu-item>
            </el-submenu>
            <el-menu-item index="/dati">
              <i class="el-icon-edit"></i>
              <span slot="title">随即答题</span>
            </el-menu-item>
            <el-menu-item index="/star">
              <i class="el-icon-search"></i>
              <span slot="title">明星查询</span>
            </el-menu-item>
            <el-menu-item index="/star">
              <i class="el-icon-setting"></i>
              <span slot="title">系统设置</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right" v-if="this.$route.path != '/home'">
          </el-breadcrumb>
          <div class="welcomeInfo" v-else>
            欢迎登陆首页！
          </div>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "",
    data(){
      return {
        loginer:JSON.parse(sessionStorage.getItem('loginer'))
      }
    },
    methods:{
      userCommand(command){
        if (command == 'logout') {
          this.$confirm('此操作将退出登录, 是否继续?', '注销', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            window.sessionStorage.removeItem('loginer');
            this.$router.replace('/');
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消操作'
            });
          });
        }
      }
    }
  }
</script>

<style scoped>
  .header{
    line-height: 60px;
    background: #409eff;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #fff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .welcomeInfo{
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: #409eff;
  }
</style>
