<template>
  <el-aside>
    <el-menu
      :collapse="store.getters.isCollapse"
      class="el-menu-vertical-demo"
      :default-active="$route.path"
      router
      unique-opened
    >
      <menu-tree
        v-for="(item, i) in menuList"
        :key="i"
        :i="i"
        :item="item"
      ></menu-tree>
    </el-menu>
  </el-aside>
</template>

<script setup>
import MenuTree from './MenuTree.vue'
import { useStore } from 'vuex'
import { filterMenus } from '@/utils/filterMenus'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const li = router.getRoutes()
console.log(li, 'li')
const store = useStore()
const menuList = computed(() => {
  return filterMenus(store.getters.menus)
})
// console.log(menuList, 'menuList')
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
