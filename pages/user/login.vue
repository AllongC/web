<template>
  <section>
    <div class="container">
      <div class="content">
        <el-row class="tab">
          <el-col
            :span="12"
            class="tabs"
            v-for="(item,index) in tab"
            :key="index"
            :class="{active:index==current}"
            @click.native="changeCurrent(index)"
          >{{item.name}}</el-col>
        </el-row>
        <LoginPage class="login" :class="{none:current==1}" />
        <RegisterPage class="register" :class="{none:current==0}" />
      </div>
    </div>
  </section>
</template>

<script>
import LoginPage from "@/components/user/LoginPage";
import RegisterPage from "@/components/user/RegisterPage";
export default {
  components: {
    LoginPage,
    RegisterPage
  },
  data() {
    return {
      tab: [
        {
          name: "登录"
        },
        {
          name: "注册"
        }
      ],
      current: 0
    };
  },
  methods: {
    changeCurrent(index) {
      this.current = index;
    }
  }
};
</script>

<style lang="less" scoped>
section {
  height: 700px;
  width: 100%;
  background: url(http://157.122.54.189:9095/assets/images/th03.jfif) center 0;
  .container {
    position: relative;
    height: 700px;
    width: 1000px;
    max-width: 1000px;
    margin: 0 auto;
    .content {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -200px;
      margin-top: -200px;
    }
    .tab {
      width: 400px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background-color: #eeeeee;
      color: #333;
      .tabs {
        cursor: pointer;
      }
      .active {
        width: 200px;
        border-top: 2px solid #ffa500;
        color: #ffa500;
        font-weight: bold;
        background-color: #fff;
      }
    }
    .login {
      width: 400px;
      height: 240px;
      background-color: #fff;
    }
    .register {
      width: 400px;
      background-color: #fff;
    }
    .none {
      display: none;
    }
  }
}
</style>