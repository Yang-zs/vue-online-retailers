<template>
  <div class="myHeader">
    <div class="left">
     <span>
        <i class="el-icon mr-1"></i>
       <!--<img alt="" src="http://www.w3.org/2000/svg" srcset="">-->
      积云编程
     </span>
      <!--:type="isCollapse.value ? 'arrow-left' : 'arrow-right'"-->
      <el-icon class="mr-1">
        <Expand/>
      </el-icon>
    </div>
    <div class="right"></div>
  </div>
</template>

<script setup>
import { Expand } from '@element-plus/icons-vue'
</script>

<style lang='scss' scoped>
.myHeader {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left {
    width: 300px;
    height: 100%;
    background-color: green;
  }

  .right {
    width: 240px;
    height: 100%;
    background-color: red;
  }
}
</style>
