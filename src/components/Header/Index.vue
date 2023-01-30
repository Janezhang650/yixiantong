<template>
  <header class="header">
    <city-select :cityName="cityName"></city-select>
    <false-input></false-input>
  </header>
</template>

<script>
import CitySelect from './Sub/CitySelect.vue';
import FalseInput from './Sub/FalseInput.vue'

export default {
  name: 'HomeHeader',
  components: {
    CitySelect,
    FalseInput
  },
  data () {
    return {
      cityName: '全部'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';

.header {
  @include flex-row;
  height: $headerHeight;
  background-color: $defaultBgColor;
}
</style>
