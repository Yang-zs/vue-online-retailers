<template>
  <Order/>
  <Card/>
  <div class="bottom">
    <Histogram/>
    <div class="test">
      <Shop/>
    </div>
  </div>
</template>

<script setup>
import Card from './card'
import Order from './order.vue'
import Histogram from './histogram.vue'
import Shop from './shop.vue'

</script>

<style lang="scss" scoped>
.bottom {
  display: flex;
  justify-content: flex-start;

  .test {
    width: 620px;
    margin-left: 27px;
    margin-top: 20px;
  }
}

</style>
