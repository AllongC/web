<template>
  <header>
    <div class="container">
      <el-row>
        <el-col :span="4" class="logo">
          <nuxt-link to="/">
            <img src="http://157.122.54.189:9093/images/logo.jpg" alt />
          </nuxt-link>
        </el-col>
        <el-col :span="16" class="nav">
          <nuxt-link to="/">首页</nuxt-link>
          <nuxt-link to="/post">旅游攻略</nuxt-link>
          <nuxt-link to="/hotel">酒店</nuxt-link>
          <nuxt-link to="/air">国内机票</nuxt-link>
        </el-col>
        <el-col :span="4" class="login">
          <el-dropdown v-if="userInfo">
            <span class="el-dropdown-link">
              <img :src="$axios.defaults.baseURL+userInfo.user.defaultAvatar" alt />
              {{userInfo.user.nickname}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <nuxt-link to="/user/login" v-else>登录 / 注册</nuxt-link>
        </el-col>
      </el-row>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      userInfo: ""
    };
  },
  mounted() {
    this.userInfo = this.$store.state.user.userInfo;
  }
};
</script>

<style lang="less" scoped>
header {
  box-sizing: border-box;
  border-bottom: 1px solid #e4e4e4;
  box-shadow: 1px 1px 1px black black;
  .container {
    width: 1000px;
    min-width: 1000px;
    margin: 0 auto;
  }
  .el-col {
    height: 60px;
  }
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 156px;
      height: 42px;
    }
  }
  .nav {
    padding-left: 10px;
    height: 60px;
    line-height: 60px;
    a {
      display: inline-block;
      height: 60px;
      text-align: center;
      padding: 0px 20px;
      &:hover {
        height: 56px;
        border-bottom: 4px solid #409eff;
        color: #409eff;
      }
    }
    .nuxt-link-active:not(:first-child),
    .nuxt-link-exact-active {
      background-color: #409eff;
      color: white;
    }
  }
  .login {
    height: 60px;
    line-height: 60px;
    font-size: 14px;
    text-align: center;
    color: #333;
    a:hover {
      color: #409eff;
      border-bottom: 1px solid #409eff;
    }
  }
  .el-dropdown-link {
    cursor: pointer;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      vertical-align: middle;
      &:hover {
        width: 26px;
        height: 26px;
        border: 2px solid #409eff;
      }
    }
  }
}
</style>