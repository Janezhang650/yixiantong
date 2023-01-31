<template>
  <div class="food-list">
    <food-item
      v-for="(item, index) of foodData"
      :key="index"
      :food="item"
    ></food-item>
  </div>
</template>

<script>
import FoodItem from './FoodItem.vue';

export default {
  name: 'FoodList',
  components: {
    FoodItem
  },
  props: {
    foodData: Array
  }
}
</script>

<style lang="scss" scoped>
</style>
