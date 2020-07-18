<template>
  <section>
    <div class="container">
      <div class="content">
        <el-row class="tab">
          <el-col :span="12" class="active tabs">登录</el-col>
          <el-col :span="12" class="tabs">注册</el-col>
        </el-row>
        <el-row class="login"></el-row>
        <el-row class="register"></el-row>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
section {
  height: 700px;
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
      display: none;
      width: 400px;
      height: 440px;
      background-color: #fff;
    }
  }
}
</style>