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
            :highlight-first-item="true"
            @select="selectDepartCity"
          ></el-autocomplete>
        </el-form-item>
        <el-form-item label="到达城市">
          <el-autocomplete
            placeholder="请搜索到达城市"
            :fetch-suggestions="queryDestCity"
            :trigger-on-focus="false"
            v-model="form.destCity"
            :highlight-first-item="true"
            @select="selectDestCity"
          ></el-autocomplete>
        </el-form-item>
        <el-form-item label="出发时间">
          <el-date-picker
            type="date"
            placeholder="请选择日期"
            v-model="form.departDate"
            :picker-options="pickerOptions"
            @change="changeDate"
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
import moment from "moment";
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
      const query = {
        ...this.form,
        departCity: this.form.departCity.replace(/市$/, ""),
        destCity: this.form.destCity.replace(/市$/, "")
      };
      this.$router.push({
        path: "/air/flights",
        query
      });
    },
    //时间触发事件
    changeDate(value) {
      this.form.departDate = moment(value).format("YYYY-MM-DD");
    },
    //统一搜索
    searchCity(str) {
      return this.$axios({
        url: "/airs/city",
        method: "get",
        params: {
          name: str
        }
      }).then(res => {
        const { data } = res.data;
        const city = data.map(item => {
          return {
            value: item.name.replace(/市$/, ""),
            code: item.sort
          };
        });
        return city;
      });
    },
    //出发城市建议
    queryDepartCity(str, callback) {
      this.searchCity(str).then(city => {
        if (city.length > 0) {
          this.form.departCode = city[0].code;
        }
        callback(city);
      });
    },
    //到达城市建议
    queryDestCity(str, callback) {
      this.searchCity(str).then(city => {
        if (city.length > 0) {
          this.form.destCode = city[0].code;
        }
        callback(city);
      });
    },
    //获取出发城市的编号
    selectDestCity(value) {
      this.form.destCode = value.code;
    },
    //获取到达城市的编号
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