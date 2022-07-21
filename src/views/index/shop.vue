<template>
  <div class="shop-container">
    <!-- top-->
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>店铺及商品提示</span>
          <el-tag class="ml-2" type="danger">店铺及商品提示</el-tag>
        </div>
      </template>
      <div class="text item">
        <el-card v-for="(item,index) in goodsList" :key="index" class="small-block" shadow="hover">
          <p class="number">{{ item.value }}</p>
          <p class="label-fade-enter-from">{{ item.label }}</p>
        </el-card>
      </div>
    </el-card>
    <!--  bottom  -->
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>交易提示</span>
          <el-tag class="ml-2" type="danger">需要立即处理的交易订单</el-tag>
        </div>
      </template>
      <div class="text item">
        <el-card v-for="(ite,i) in orderList" :key="i" class="small-block" shadow="hover">
          <p class="number">{{ ite.value }}</p>
          <p class="label-fade-enter-from">{{ ite.label }}</p>
        </el-card>
      </div>
    </el-card>

  </div>
</template>

<script setup>
import ConsoleApi from '@/api/console'
import { ref } from 'vue'

const goodsList = ref([])
const orderList = ref([])
const getList = async () => {
  const { data } = await ConsoleApi.statistics2()
  goodsList.value = data.data.goods
  orderList.value = data.data.order
  console.log(goodsList.value, 'goodsList')
  console.log(orderList.value, 'orderList')
}
getList()
</script>

<style lang="scss" scoped>
.shop-container {
  height: 382px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  // 垂直两端对齐
  justify-content: space-between;

}

.box-card {
  height: 47%;
  padding: 0;
  //background-color: #ffffff;

}

.card-header {
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.text {
  display: flex;
  justify-content: space-around;

  .small-block {
    text-align: center;

    .label-fade-enter-from {
      font-size: 12px;
    }

    p {
      margin-top: 5px;

    }
  }

  .el-card {
    background-color: #f6f6f6;
  }
}
</style>
