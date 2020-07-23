<template>
  <el-col class="form">
    <el-row class="form-top">
      <el-col class="current">
        <i class="iconfont icondancheng"></i>
        单程
      </el-col>
      <el-col>
        <i class="iconfont iconshuangxiang"></i>
        往返
      </el-col>
    </el-row>
    <el-row class="form-content">
      <el-form :model="form">
        <el-form-item label="出发城市">
          <el-autocomplete
            placeholder="请搜索出发城市"
            :fetch-suggestions="queryDepartCity"
            :trigger-on-focus="false"
            v-model="form.departCity"
            @select="selectDepartCity"
          ></el-autocomplete>
        </el-form-item>
        <el-form-item label="到达城市">
          <el-autocomplete
            placeholder="请搜索到达城市"
            :fetch-suggestions="queryDestCity"
            :trigger-on-focus="false"
            v-model="form.destCity"
            @select="selectDestCity"
          ></el-autocomplete>
        </el-form-item>
        <el-form-item label="出发时间">
          <el-date-picker
            type="date"
            placeholder="请选择日期"
            v-model="form.departDate"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </el-form-item>
        <el-button type="primary" @click="sendSearch">
          <i class="el-icon-search"></i>搜索
        </el-button>
        <div class="change">
          <span>换</span>
        </div>
      </el-form>
    </el-row>
  </el-col>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now();
        }
      },
      form: {
        departCity: "",
        departCode: "",
        destCity: "",
        destCode: "",
        departDate: ""
      }
    };
  },
  methods: {
    //搜索机票
    sendSearch() {
      console.log(this.form);
    },
    //出发城市建议
    queryDepartCity(str, callback) {
      this.$axios({
        url: "/airs/city",
        method: "get",
        params: {
          name: str
        }
      }).then(res => {
        const { data } = res.data;
        const city = data.map(item => {
          return {
            value: item.name,
            code: item.sort
          };
        });
        callback(city);
      });
    },
    //到达城市建议
    queryDestCity(str, callback) {
      this.$axios({
        url: "/airs/city",
        method: "get",
        params: {
          name: str
        }
      }).then(res => {
        const { data } = res.data;
        const city = data.map(item => {
          return {
            value: item.name,
            code: item.sort
          };
        });
        callback(city);
      });
    },
    selectDestCity(value) {
      this.form.destCode = value.code;
    },
    selectDepartCity(value) {
      this.form.departCode = value.code;
    }
  }
};
</script>

<style lang="less" scoped>
.form {
  width: 360px;
  height: 350px;
  border: 1px solid #dddddd;
  border-top: none;
  .form-top {
    .el-col {
      width: 50%;
      height: 50px;
      text-align: center;
      line-height: 50px;
      background-color: #eeeeee;
    }
    .current {
      border-top: 2px solid #ffa500;
      background-color: #fff;
    }
  }
}
.form-content {
  padding-top: 20px;
  width: 290px;
  margin: 0 auto;
  .el-form {
    position: relative;
    width: 290px;
    .el-form-item {
      width: 290px;
    }
    /deep/ .el-input__inner {
      width: 220px;
    }
    .el-button {
      width: 220px;
      margin-left: 68px;
      font-size: 14px;
      .el-icon-search {
        margin-right: 5px;
        font-size: 12px;
      }
    }
    .change {
      position: absolute;
      top: 16px;
      right: -21px;
      height: 65px;
      width: 22px;
      border: 1px solid #cccccc;
      border-top: 2px solid #cccccc;
      border-bottom: 2px solid #cccccc;
      border-left: none;
      span {
        position: absolute;
        top: 21px;
        right: -10px;
        display: inline-block;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        color: #ffffff;
        background-color: #999999;
        font-size: 12px;
      }
    }
  }
}
</style>