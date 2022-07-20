<template>
  <div class="card">
    <el-card v-for="(item,index) in cardList" :key="index" shadow="hover">
      <el-icon>
        <component :is="item.icon"/>
      </el-icon>
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const cardList = ref([
  {
    path: 'user/list',
    name: '用户',
    icon: 'User',
    color: '#00a3e7'
  },
  {
    path: 'goods/list',
    name: '商品',
    icon: 'ShoppingCart',
    color: '#935bf3'
  },
  {
    path: 'order/list',
    name: '订单',
    icon: 'Document',
    color: '#ef4aec'
  },
  {
    path: 'comment/list',
    name: '评价',
    icon: 'ChatDotSquare',
    color: '#00b7a6'
  },
  {
    path: 'image/list',
    name: '图库',
    icon: 'Picture',
    color: '#ff485f'
  },
  {
    path: 'notice/list',
    name: '公告',
    icon: 'Bell',
    color: '#00b882'
  },
  {
    path: 'setting/base',
    name: '配置',
    icon: 'SetUp',
    color: '#303133'
  },
  {
    path: 'coupon/list',
    name: '优惠券',
    icon: 'Files',
    color: '#ffa123'
  }
])
const log = () => {
  console.log(cardList.value, '231')
}
log()
</script>

<style lang='scss' scoped>
.card {
  width: 100%;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .el-card {
    width: 135px;

  }
}
</style>
