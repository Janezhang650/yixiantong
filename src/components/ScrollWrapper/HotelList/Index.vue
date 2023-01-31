<template>
  <div class="hotel-list">
    <hotel-item
      v-for="(item, index) in hotelData"
      :key="index"
      :hotel="item"
    ></hotel-item>
  </div>
</template>

<script>
import HotelItem from './HotelItem.vue';

export default {
  name: 'HotelList',
  components: {
    HotelItem
  },
  props: {
    hotelData: Array
  }
}
</script>

<style lang="scss" scoped>
</style>
