<template>
  <section>
    <el-carousel :interval="5000" arrow="always" height="600px">
      <el-carousel-item v-for="(item,index) in bg" :key="index">
        <div :style="`background:url(${item.url}) no-repeat center center`" class="bg"></div>
      </el-carousel-item>
    </el-carousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      bg: [{ url: "http://157.122.54.189:9095/assets/images/th02.jfif" }]
    };
  }
};
</script>

<style lang="less" scoped>
.el-carousel__item {
  height: 600px;
  div {
    height: 600px;
  }
}
</style>