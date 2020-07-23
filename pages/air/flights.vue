<template>
  <section class="container">
    <el-row>
      <el-col class="flights">
        <flightsFilters />
        <flightsListHead />
      </el-col>
      <el-col class="aside">
        <flightsAside />
      </el-col>
    </el-row>
  </section>
</template>

<script>
import flightsAside from "@/components/air/flightsAside";
import flightsFilters from "@/components/air/flightsFilters";
import flightsListHead from "@/components/air/flightsListHead";
export default {
  components: {
    flightsAside,
    flightsFilters,
    flightsListHead
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  min-width: 1000px;
  margin: 0 auto;
  .el-col {
    height: 1000px;
  }
  .flights {
    width: 745px;
    margin-top: 25px;
  }
  .aside {
    margin-left: 17px;
    width: 238px;
    margin-top: 25px;
  }
}
</style>