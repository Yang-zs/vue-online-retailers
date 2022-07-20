<template>
  <Order/>
  <Card/>
  <div class="bottom">
    <Histogram/>
    <div class="test">2</div>
  </div>
</template>

<script setup>
import Card from './card'
import Order from './order.vue'
import Histogram from './histogram.vue'
</script>

<style lang="scss" scoped>
.bottom {
  display: flex;
  justify-content: space-between;

  .test {
    width: 100px;
    height: 100px;
    background-color: #ff0000;
  }
}
</style>
