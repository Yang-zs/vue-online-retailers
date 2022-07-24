<template>
  <el-card>
    <div class="top">
      <div class="left">
        <el-button type="primary" @click="dialog = true">新增</el-button>
        <el-button type="danger">批量删除</el-button>
      </div>
      <div class="right">
        <el-button icon="Refresh" text @click="getSkuList"></el-button>
      </div>
    </div>
    <el-table
      ref="multipleTableRef"
      v-loading="loading"
      :data="tableData"
      style="width: 100%;"
      @selection-change="handleSelectionChange"
    >
      <!-- 复选框 -->
      <el-table-column type="selection" width="55" />
      <el-table-column label="规格名称" property="name" />
      <el-table-column label="规格值" property="default" />
      <el-table-column label="排序" property="order" />
      <el-table-column label="状态" property="status" />
      <el-table-column label="操作">
        <template v-slot="{ row }">
          <el-button link size="small" type="primary" @click="edit(row)"
            >修改</el-button
          >
          <el-button link size="small" type="primary" @click="handleClick"
            >删除
          </el-button>
        </template>
      </el-table-column>
      <!-- <el-table-column label="Date" width="120">
          <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column> -->

      <!-- <el-table-column
          property="address"
          label="Address"
          show-overflow-tooltip
        /> -->
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageNum"
      :page-size="pageSize"
      background
      layout="prev, pager, next"
      :total="total"
    />
  </el-card>
  <!--抽屉-->
  <el-drawer
    ref="drawerRef"
    v-model="dialog"
    :before-close="handleClose"
    custom-class="demo-drawer"
    title="I have a nested form inside!"
    direction="rtl"
  >
    <div class="demo-drawer__content">
      <el-form :model="addForm">
        <!-- 规格名称 -->
        <el-form-item
          :label-width="formLabelWidth"
          label="规格名称"
          prop="name"
        >
          <el-input v-model="addForm.name" placeholder="请输入规格名称" />
        </el-form-item>
        <!-- 排序 -->
        <el-form-item label="排序" prop="order" :label-width="formLabelWidth">
          <el-input-number
            v-model="addForm.order"
            :min="1"
            :max="10"
            label="描述文字"
          ></el-input-number>
        </el-form-item>
        <!-- 状态 -->
        <el-form-item label="状态" prop="status" :label-width="formLabelWidth">
          <el-switch v-model="addForm.status" />
        </el-form-item>
        <!-- 规格值 -->
        <el-form-item label="状态" prop="status" :label-width="formLabelWidth">
          <div id="form-default-input">
            <div class="tag-box">
              <el-tag
                closable
                v-for="(item, index) in newDefault"
                :key="index"
                >{{ item }}</el-tag
              >
            </div>
            <div>
              <el-button
                v-if="!btnInp"
                type="primary"
                plain
                @click="changeBtnInp"
                >+添加值
              </el-button>
              <el-input
                v-else
                v-model="addForm.default"
                @blur="changeBtnInp"
                autofocus
              ></el-input>
            </div>
          </div>
        </el-form-item>
      </el-form>
      <div class="demo-drawer__footer">
        <el-button :loading="loading" type="primary" @click="onClick"
          >{{ loading ? '提交中 ...' : '提交' }}
        </el-button>
        <el-button @click="cancelForm">取消</el-button>
      </div>
    </div>
  </el-drawer>
</template>

<script setup>
import SkusApi from '@/api/skus'
import { ref, reactive } from 'vue'
import { ElDrawer, ElMessageBox } from 'element-plus'
// 总页
const total = ref(1)
const pageSize = ref(10)
const pageNum = ref(1)
// 当前页
const handleSizeChange = (val) => {
  pageSize.value = val
  console.log(val, 'handleSizeChange')
  // getSkuList()
}
const handleCurrentChange = (val) => {
  pageNum.value = val
  getSkuList()
  console.log(val, 'handleCurrentChange')
}
// 控制添加值 按钮 或 input
const btnInp = ref(false)
// 控制添加值为按钮或输入框
const changeBtnInp = () => {
  btnInp.value = !btnInp.value
}
const loading = ref(false)
const multipleTableRef = ref()
const multipleSelection = ref([])

const handleSelectionChange = (val) => {
  multipleSelection.value = val
}

const tableData = ref([])
// 获取规格列表
const getSkuList = async () => {
  loading.value = true
  const { data } = await SkusApi.getSkusList(pageNum.value)
  console.log(data, 'skus')
  tableData.value = data.data.list
  total.value = data.data.totalCount
  loading.value = false
}
getSkuList()
// 删除
const handleClick = () => {
  console.log('click')
}
// 刷新
const getCategoryList = () => []
// 抽屉
const formLabelWidth = '80px'
let timer

const table = ref(false)
const dialog = ref(false)

const addForm = ref({
  name: '',
  order: 1,
  status: true,
  default: ''
})

const drawerRef = ref()
// 新增
const onClick = async () => {
  try {
    const { data } = await SkusApi.addSkusList(addForm)
    console.log(data, 'response')
    getSkuList()
  } catch (error) {
    console.log(error)
  }
}

const handleClose = (done) => {
  dialog.value = true
}

const cancelForm = () => {
  loading.value = false
  dialog.value = false
  clearTimeout(timer)
}
// 修改
const newDefault = ref([])
const edit = (row) => {
  console.log(row, 'row')
  dialog.value = true
  addForm.value = row
  newDefault.value = row.default.split(',')
}
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  justify-content: space-between;
}
#form-default-input {
  width: 82.19px;
  height: 32px;
}
.tag-box {
  display: flex;
}
.el-drawer__body {
  position: relative;
  .demo-drawer__footer {
    position: absolute;
    bottom: 25px;
  }
}
.form-default-input {
  display: flex;
}
</style>
