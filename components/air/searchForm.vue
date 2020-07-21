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
      <el-form>
        <el-form-item label="出发城市">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="到达城市">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="出发时间">
          <el-date-picker type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-button type="primary">
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
export default {};
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
    .el-input {
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