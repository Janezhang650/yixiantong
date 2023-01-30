<template>
  <div class="city-item">
    <span
      class="city-name"
      @click="onCityClick(cityInfo)"
    >
      {{ cityInfo.cityName }}
    </span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ListItem',
  props: {
    cityInfo: Object
  },
  methods: {
    ...mapMutations(['selectCity']),
    onCityClick (cityInfo) {
      this.selectCity(cityInfo);
      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';

.city-item {
  @include flex-row;
  align-items: center;
  padding-left: .15rem;
  height: $headerHeight;
  font-size: .16rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
</style>
