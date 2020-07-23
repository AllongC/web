<template>
  <el-row class="info-header" type="flex">
    <el-col :span="8">航空信息</el-col>
    <el-col :span="8">起飞时间</el-col>
    <el-col :span="8">到达时间</el-col>
    <el-col :span="8">价格</el-col>
  </el-row>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.info-header {
  height: 40px;
  line-height: 40px;
  width: 100%;
  padding: 0px 20px;
  margin-top: 20px;
  background-color: #f6f6f6;
  box-sizing: border-box;
  border: 1px solid #dddddd;
  text-align: center;
  font-size: 12px;
  color: #333;
}
</style>