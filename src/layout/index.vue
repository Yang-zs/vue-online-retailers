<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <MyHead/>
      </el-header>
      <el-container>
        <Aside/>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import MyHead from './MyHead'
import Aside from './Aside'
</script>

<style lang='scss' scoped>
.common-layout {
  height: 100%;
}

.el-header {
  background-color: #4336c7;
  padding: 0;
  margin: 0;
}

.el-aside {
  background-color: #ffffff;
  width: fit-content;
  width: -moz-fit-content;
}

.el-main {
  background-color: #E9EEF3;
}

.el-container {
  height: 100%;
}

</style>
