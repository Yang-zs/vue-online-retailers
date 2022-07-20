<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <MyHead/>
      </el-header>
      <el-container>
        <Aside/>
        <el-main>
          <TagsViews/>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import MyHead from './MyHead'
import Aside from './Aside'

import TagsViews from '@/components/TagsViews.vue'
</script>

<style lang="scss" scoped>
.common-layout {
  height: 100%;

}

.main-head {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
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
  background-color: #f3f4f6;
  //padding-top: 0;
  position: relative;
  padding-top: 70px;
}

.el-container {
  height: 100%;
}
</style>
