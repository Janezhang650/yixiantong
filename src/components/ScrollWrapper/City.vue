<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <current-city></current-city>
      <city-list></city-list>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll';
import CurrentCity from './CityList/CurrentCity.vue';
import CityList from './CityList';

export default {
  name: 'CityScrollWrapper',
  components: {
    CurrentCity,
    CityList
  },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true });
  }
}
</script>

<style lang="scss" scoped>

</style>
