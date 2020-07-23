<template>
  <section class="container">
    <div class="header">
      <span class="iconfont iconfeiji"></span>
      <span>国内机票</span>
    </div>
    <div class="air">
      <searchForm />
      <el-col class="board">
        <img src="http://157.122.54.189:9093/images/pic_sale.jpeg" alt />
      </el-col>
    </div>
    <div class="service">
      <el-row>
        <el-col>
          <i class="iconfont iconweibiaoti-_huabanfuben"></i>
          <span>100%航协认证</span>
        </el-col>
        <el-col>
          <i class="iconfont iconbaozheng"></i>
          <span>出行保证</span>
        </el-col>
        <el-col>
          <i class="iconfont icondianhua"></i>
          <span>7x24小时服务</span>
        </el-col>
      </el-row>
    </div>
    <div class="special">
      <div class="special-top">
        <i class="iconfont icontejiajipiao"></i>
        <h4>特价机票</h4>
      </div>
      <div class="special-bottom">
        <el-row>
          <el-col v-for="(item,index) in data" :key="index">
            <img :src="$axios.defaults.baseURL+item.cover" alt />
            <p>
              <span>{{item.departCity}}-{{item.destCity}}</span>
              <span class="right">￥{{item.price}}</span>
            </p>
          </el-col>
        </el-row>
      </div>
    </div>
  </section>
</template>

<script>
import searchForm from "@/components/air/searchForm";
export default {
  data() {
    return {
      data: null
    };
  },
  components: {
    searchForm
  },
  mounted() {
    this.$axios({
      url: "/airs/sale",
      method: "get"
    }).then(res => {
      const { data } = res.data;
      this.data = data;
    });
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  min-width: 1000px;
  margin: 0 auto;
  .header {
    margin: 20px 0px;
    > span {
      font-size: 20px;
      color: #ffa500;
    }
  }
  .air {
    height: 350px;
    margin-bottom: 20px;
    .board {
      margin-left: 16px;
      width: 620px;
      height: 350px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .service {
    height: 58px;
    padding: 8px 0px;
    width: 100%;
    background-color: #f5f5f5;
    border: 1px solid #dddddd;
    margin-bottom: 20px;
    box-sizing: border-box;
    .el-col {
      width: 332px;
      height: 42px;
      line-height: 42px;
      text-align: center;
      &:not(:last-child) {
        border-right: 1px solid #dddddd;
      }
      span {
        display: inline-block;
        vertical-align: top;
      }
      i {
        font-size: 30px;
      }
      .iconbaozheng {
        color: #00807f;
      }
      .iconweibiaoti-_huabanfuben,
      .icondianhua {
        color: #409eff;
      }
    }
  }
  .special {
    width: 100%;
    margin-bottom: 30px;
    .special-top {
      height: 30px;
      line-height: 30px;
      margin-bottom: 20px;
      i {
        float: left;
        color: #409eff;
        font-size: 20px;
        margin-top: 2px;
      }
      h4 {
        float: left;
        margin-left: 5px;
        font-size: 20px;
        font-weight: normal;
        color: #409eff;
      }
    }
    .special-bottom {
      height: 180px;
      border: 1px solid #dddddd;
      padding: 15px;
      box-sizing: border-box;
      .el-col {
        position: relative;
        width: 225px;
        height: 150px;
        margin: 0px 8px;
        img {
          width: 225px;
          height: 150px;
        }
        p {
          position: absolute;
          bottom: 0;
          z-index: 99;
          width: 100%;
          padding: 0px 10px;
          height: 30px;
          line-height: 30px;
          background-color: rgba(0, 0, 0, 0.5);
          color: #fff;
          box-sizing: border-box;
          font-size: 14px;
          .left {
            float: left;
          }
          .right {
            float: right;
          }
        }
      }
    }
  }
}
</style>