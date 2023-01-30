<template>
  <header class="header">
    <city-select :cityName="cityName"></city-select>
    <false-input></false-input>
  </header>
</template>

<script>
import { mapState } from 'vuex';
import CitySelect from './Sub/CitySelect.vue';
import FalseInput from './Sub/FalseInput.vue'

export default {
  name: 'HomeHeader',
  components: {
    CitySelect,
    FalseInput
  },
  computed: {
    ...mapState(['cityName'])
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
