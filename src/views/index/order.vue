<template>
  <div class="console">
    <!-- 支付状态 -->
    <div class="payment-status">
      <el-card
        v-for="(item, index) in cardList"
        :key="index"
        class="box-card"
        shadow="hover"
      >
        <template #header>
          <div class="card-header">
            <span class="header-card">{{ item.subTitle }}</span>
            <el-tag :type="item.unitColor" color="#ffffff">{{
                item.unit
              }}
            </el-tag>
          </div>
        </template>
        <h1>{{ item.value }}</h1>
        <el-divider></el-divider>
        <!-- 51 -->
        <div class="text item">
          <span>{{ item.subTitle }}</span>
          <span>{{ item.subValue }}</span>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import ConsoleApi from '@/api/console'
import { reactive, ref } from 'vue'

const cardList = ref([])
const orderList = async () => {
  const { data } = await ConsoleApi.statistics1()
  cardList.value = data.data.panels
}
orderList()
</script>

<style lang="scss" scoped>
.console {
  .payment-status {
    width: 100%;
    display: flex;
    justify-content: space-around;

    .el-card {
      width: 295.5px;
      position: relative;

      .card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .el-tag {
          position: absolute;
          right: 15px;
        }
      }

      h1 {
        padding: 25px 0;
        color: #697280;
        font-size: 1.875rem;
      }

      .text {
        display: flex;
        justify-content: space-between;
        color: #697280;
        font-size: 0.875rem;

        .item {
          display: flex;
          justify-content: space-between;

          span {
            font-size: 14px;
            font-weight: bold;
          }
        }
      }
    }
  }
}

::v-deep .el-card__header {
  width: 100%;
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f9fafb;
}
</style>
