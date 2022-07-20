<template>
  <div class="dropdown">
    <el-dropdown divided size="small" split-button @command="handleCommand">
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="a">关闭其他</el-dropdown-item>
          <el-dropdown-item command="b">全部关闭</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()

const handleCommand = (command) => {
  if (command === 'a') {
    // store.commit('tagsview/Close_Other_Tags')
  } else if (command === 'b') {
    store.commit('tagsview/Delete_All_Tags')
    router.push('/index')
  }
}

</script>

<style scoped>
.dropdown {
  position: absolute;
  right: 10px;
  top: 3px;
}
</style>
