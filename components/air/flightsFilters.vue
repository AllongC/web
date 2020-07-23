<template>
  <div class="container">
    <el-row class="filter">
      <el-col class="left">
        <p>单程：广州 - 上海 / 2020-07-23</p>
      </el-col>
      <el-col class="right">
        <el-select v-model="value" placeholder="起飞机场">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-select v-model="value" placeholder="起飞时间">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-select v-model="value" placeholder="航空公司">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-select v-model="value" placeholder="机型">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row class="clear">
      筛选：
      <span>撤销</span>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        }
      ],
      value: ""
    };
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  font-size: 14px;
  .filter {
    .left {
      width: 250px;
      height: 30px;
      line-height: 30px;
    }
    .right {
      width: 495px;
      /deep/ .el-input__inner {
        width: 114px;
        height: 30px;
        line-height: 30px;
        padding: 0px;
        margin: 0px;
        padding-left: 10px;
        font-size: 12px;
        margin-right: 5px;
      }
      /deep/ .el-icon-arrow-up {
        line-height: 30px;
      }
    }
  }
  .clear {
    margin-top: 10px;
    span {
      display: inline-block;
      width: 56px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      background-color: #ecf5ff;
      color: #409eff;
      font-size: 10px;
      border-radius: 14px;
      border: 1px solid #409eff;
      box-sizing: border-box;
    }
  }
}
</style>