<template>
  <div>
    <el-row class="loginPage">
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item prop="username">
          <el-input placeholder="用户名/手机" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="密码" type="password" v-model="form.password"></el-input>
        </el-form-item>
        <p>忘记密码</p>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    login() {
      this.$refs.form.validate((valid, res) => {
        if (valid) {
          this.$store.dispatch("user/login", this.form);
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.loginPage {
  width: 350px;
  height: 100%;
  margin: 0 auto;
  .el-form {
    margin-top: 20px;
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