<template>
  <div>
    <el-row class="loginPage">
      <el-row>
        <el-input placeholder="请输入内容"></el-input>
      </el-row>
      <el-row>
        <el-input placeholder="请输入内容"></el-input>
      </el-row>
      <el-row>
        <p>忘记密码</p>
      </el-row>
      <el-row>
        <el-button type="primary">登录</el-button>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.loginPage {
  width: 350px;
  margin: 0 auto;
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