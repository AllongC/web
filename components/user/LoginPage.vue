<template>
  <div>
    <el-row class="loginPage">
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入内容"></el-input>
        </el-form-item>
        <p>忘记密码</p>
        <el-button type="primary">登录</el-button>
      </el-form>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {}
    };
  }
};
</script>

<style lang="less" scoped>
.loginPage {
  width: 350px;
  height: 100%;
  margin: 0 auto;
  .el-form-item {
    margin: 0;
  }
  .el-input {
    margin: 12px 0px;
  }
  p {
    font-size: 12px;
    color: #66b1ff;
    margin: 10px 0px;
    text-align: right;
  }
  .el-button {
    margin-top: 5px;
    width: 100%;
  }
}
</style>