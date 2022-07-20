<template>
  <div class="histogram">
    <el-card
      class="box-card"
      shadow="hover"
    >
      <template #header>
        <div class="card-header">
          <span class="header-card">订单统计</span>
          <div>
            <el-check-tag :checked="chartType==='month'" style='margin-right: 8px' @click="changeChartType('month')">
              近一个月
            </el-check-tag>
            <el-check-tag :checked="chartType==='week'" style='margin-right: 8px'
                          @click="changeChartType('week')">近一周
            </el-check-tag>
            <el-check-tag :checked="chartType==='hour'" style='margin-right: 8px'
                          @click="changeChartType('hour')">近24小时
            </el-check-tag>
          </div>
        </div>
      </template>
      <div id='chartMain' style='width: 580px;height:277px;'></div>

    </el-card>
  </div>

</template>

<script setup>

import ConsoleAPi from '@/api/console.js'
import * as echarts from 'echarts'
import { ref } from 'vue'

const chartType = ref('week')
const getChartData = async () => {
  const response = await ConsoleAPi.statistics3(chartType.value)
  const res = response.data.data
  const myChart = echarts.init(document.getElementById('chartMain'))

  myChart.setOption({
    tooltip: {},
    xAxis: {
      data: res.x
    },
    yAxis: {
      data: res.y
    },
    series: [
      {
        name: '销量',
        type: 'bar',
        data: res.y
      }
    ]
  })
}
getChartData()
const changeChartType = type => {
  chartType.value = type
  getChartData()
}
</script>

<style lang="scss" scoped>
.histogram {
  margin-left: 12px;
  margin-top: 20px;

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .el-check-tag {
    margin-left: 10px;
  }
}

</style>
