<template>
  <section class="container">
    <!-- 轮播图 -->
    <el-carousel :interval="5000" arrow="always" height="600px">
      <el-carousel-item v-for="(item,index) in bg" :key="index">
        <div :style="`background:url(${item.url}) no-repeat center center`" class="bg"></div>
      </el-carousel-item>
    </el-carousel>
    <!-- 搜索框 -->
    <div class="input">
      <div class="tab">
        <div class="item">
          <span class="active"></span>
          <i class="font">攻略</i>
        </div>
        <div class="item">
          <span class="mark"></span>
          <i>攻略</i>
        </div>
      </div>
      <div class="seach">
        <input type="text" placeholder="输入" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      bg: [],
      tabs: [
        {
          name: "攻略"
        },
        {
          name: "酒店"
        },
        {
          name: "机票"
        }
      ]
    };
  },
  mounted() {
    this.$axios({
      url: "/scenics/banners",
      method: "get"
    }).then(res => {
      const { data } = res.data;
      this.bg = data.map(item => {
        item.url = this.$axios.defaults.baseURL + item.url;
        return item;
      });
    });
  }
};
</script>

<style lang="less" scoped>
.container {
  position: relative;
  .el-carousel__item {
    height: 600px;
    div {
      height: 600px;
    }
  }
  .input {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -42px;
    margin-left: -275px;
    width: 552px;
    height: 83px;
    z-index: 99;
    .tab {
      display: flex;
      .item {
        position: relative;
        width: 91px;
        height: 36px;
        i {
          width: 82px;
          height: 36px;
          line-height: 36px;
          text-align: center;
          position: absolute;
          color: white;
        }
        .mark {
          width: 82px;
          height: 36px;
          position: absolute;
          display: inline-block;
          background-color: rgba(0, 0, 0, 0.7);
          transform: scale(1.1, 1.3) perspective(0.7em) rotateX(2.9deg);
          transform-origin: bottom left;
        }
        .active {
          width: 82px;
          height: 36px;
          position: absolute;
          display: inline-block;
          background-color: #eeeeee;
          transform: scale(1.1, 1.3) perspective(0.7em) rotateX(2.9deg);
          transform-origin: bottom left;
        }
        .font {
          color: #333;
        }
      }
    }
    .seach {
      input {
        text-indent: 10px;
        width: 100%;
        height: 46px;
        border: none;
        outline: none;
        border-radius: 0px 5px 5px 5px;
      }
    }
  }
}
</style>