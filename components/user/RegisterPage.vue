<template>
  <div>
    <el-row class="register">
      <el-form :model="form" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="用户名手机号码"></el-input>
        </el-form-item>
        <el-form-item prop="captcha">
          <el-input v-model="form.captcha" placeholder="验证码">
            <template slot="append">
              <span @click="sendCaptchas" class="captchas">发送验证码</span>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="nickname">
          <el-input v-model="form.nickname" placeholder="昵称"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" placeholder="密码" type="password"></el-input>
        </el-form-item>
        <el-form-item prop="confirmPwd">
          <el-input v-model="form.confirmPwd" placeholder="确认密码" type="password"></el-input>
        </el-form-item>
        <el-button type="primary">注册</el-button>
      </el-form>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error("确认密码不能为空"));
      } else if (this.form.password !== value) {
        callback(new Error("两次输入密码不正确"));
      } else {
        callback();
      }
    };
    return {
      form: {
        username: "",
        nickname: "",
        captcha: "",
        password: "",
        confirmPwd: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "用户名不能为空",
            tigger: "blur"
          }
        ],
        nickname: [
          {
            required: true,
            message: "昵称不能为空",
            tigger: "blur"
          }
        ],
        captcha: [
          {
            required: true,
            message: "验证码不能为空",
            tigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            tigger: "blur"
          }
        ],
        confirmPwd: [
          {
            validator: validatePass,
            tigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    //获取手机验证码
    sendCaptchas() {
      this.$axios({
        url: "/captchas",
        method: "post",
        data: {
          tel: this.form.username
        }
      }).then(res => {
        const { code } = res.data;
        if (code) {
          this.$message.success("验证码获取成功");
          this.form.captcha = code;
        }
      });
    }
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
  .captchas {
    cursor: pointer;
  }
}
</style>