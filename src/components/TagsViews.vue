<template>
  <div>
    <el-tabs
      v-model="active"
      class="demo-tabs"
      type="card"
      @tab-remove="removeTab"
      @tab-click="tabClick"
    >
      <!-- <el-tab-pane label="后台首页"></el-tab-pane> -->
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.name"
        :closable="item.path !== '/index'"
        :label="item.title"
        :name="item.path"
      >
        {{ item.content }}
      </el-tab-pane>
    </el-tabs>
    <Dropdown/>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import Dropdown from '@/components/Dropdown'

const store = useStore()
const router = useRouter()
const active = ref('')
// 获取过来的路由信息给他
const editableTabs = ref()
// 获取存储的tagsViews
const getTagsViews = () => {
  editableTabs.value = store.getters.tagsViews
}
getTagsViews()

// 点击tagsViews删除
const removeTab = (targetName) => {
  const index = editableTabs.value.findIndex((item) => item.path === targetName)
  store.commit('tagsview/Delete_Single_Tags', index)
  active.value = editableTabs.value[index - 1].path
}
// tab 被选中时触发
const tabClick = ({ props: { name } }) => {
  const newName = name

  router.push(name)
}
// 默认选中第一个
const defaultActive = () => {
  active.value = editableTabs.value[0].path
}
defaultActive()

// watch监听路由变化
watch(
  () => router.currentRoute.value.path,
  (toPath) => {
    const obj = {
      path: toPath,
      title: router.currentRoute.value.meta.title
    }
    store.commit('tagsview/SET_TAGSVIEWS', obj)
  },
  {
    immediate: true,
    deep: true
  }
)
</script>

<style lang="scss" scoped>
.el-tabs {
  position: absolute;
  top: 0;
}

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
  border-color: #ffffff;
}

::v-deep .el-tabs__item {
  height: 32px;
  background-color: #ffffff;
  border-radius: 4px;
  line-height: 32px;
  text-align: center;
  margin: 0 6px;
  border-color: #ffffff;
}

::v-deep .el-tabs__header {
  border: 1px solid #ffffff;
}
</style>
