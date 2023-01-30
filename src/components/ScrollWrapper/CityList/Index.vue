<template>
  <div class="city-list">
    <list-item
      v-for="(item, index) of cityData"
      :key="index"
      :cityInfo="item"
    ></list-item>
  </div>
</template>

<script>
import ListItem from './ListItem.vue';
import cityData from 'data/cities';

export default {
  name: 'CityList',
  components: {
    ListItem
  },
  data () {
    return {
      cityData
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
