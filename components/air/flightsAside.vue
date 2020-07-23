<template>
  <div class="asides">
    <div class="asides-top">
      <el-row>
        <el-col :span="8">
          <span class="iconfont iconweibiaoti-_huabanfuben"></span>
          <p>航协认证</p>
        </el-col>
        <el-col :span="8">
          <span class="iconfont iconbaozheng"></span>
          <p>出行保证</p>
        </el-col>
        <el-col :span="8">
          <span class="iconfont icondianhua"></span>
          <p>7x24</p>
        </el-col>
      </el-row>
      <div class="service">免费客服电话: 4006345678转2</div>
    </div>
    <div class="asides-bottom">
      <p>历史查询</p>
      <div class="history">
        <div class="left">
          <p>广州-北京</p>
          <span>2020-07-24</span>
        </div>
        <div class="right">
          <span class="btn">选择</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.asides-top {
  width: 100%;
  border: 1px solid #dddddd;
  padding-top: 20px;
  box-sizing: border-box;
  .el-row {
    text-align: center;
  }
  span {
    font-size: 40px;
  }
  p {
    font-size: 12px;
  }
  .iconweibiaoti-_huabanfuben {
    color: #409eff;
  }
  .iconbaozheng {
    color: #008000;
  }
  .icondianhua {
    color: #409eff;
  }
  .service {
    box-sizing: border-box;
    height: 30px;
    width: 100%;
    background-color: #f6f6f6;
    line-height: 30px;
    padding-left: 8px;
    margin-top: 20px;
    font-size: 14px;
  }
}
.asides-bottom {
  width: 100%;
  border: 1px solid #dddddd;
  margin-top: 20px;
  box-sizing: border-box;
  padding: 0px 0px 10px 0px;
  p {
    padding: 10px 0px;
    margin: 0px 8px;
    border-bottom: 1px solid #dddddd;
  }
  .history {
    height: 60px;
    padding: 5px 0px 0px 0px;
    margin: 0px 10px;
    border: none;
    .left {
      float: left;
      p {
        border: none;
        padding: 0px;
        margin: 0px;
      }
      span {
        font-size: 12px;
        color: #888;
      }
    }
    .right {
      float: right;
      p {
        border: none;
      }
      .btn {
        display: inline-block;
        background-color: #ffa500;
        width: 44px;
        height: 20px;
        margin-top: 13px;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        color: white;
        border-radius: 5px;
      }
    }
  }
}
</style>