<template>
  <section class="container">
    <el-row>
      <el-col class="flights"></el-col>
      <el-col class="aside">
        <flightsAside />
      </el-col>
    </el-row>
  </section>
</template>

<script>
import flightsAside from "@/components/air/flightsAside";
export default {
  components: {
    flightsAside
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  min-width: 1000px;
  margin: 25px auto;
  .el-col {
    height: 1000px;
  }
  .flights {
    width: 745px;
  }
  .aside {
    margin-left: 17px;
    width: 238px;
  }
}
</style>