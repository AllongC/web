<template>
  <div>
    <el-row class="register">
      <el-form :model="form">
        <el-form-item>
          <el-input placeholder="用户名手机号码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="验证码">
            <template slot="append">发送验证码</template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="昵称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="密码" type="paswword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="确认密码" type="paswword"></el-input>
        </el-form-item>
        <el-button type="primary">注册</el-button>
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
.register {
  width: 350px;
  margin: 0 auto;
  .el-form-item {
    margin: 20px 0px;
  }
  .el-button {
    margin: 20px 0px;
    width: 100%;
  }
}
</style>