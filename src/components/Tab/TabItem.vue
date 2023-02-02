<template>
  <div
    :class="['tab-item', { current: cityInfo.cityId === cityId }]"
    @click="onTabClick(cityInfo)"
  >
    <span>{{ cityInfo.cityName }}</span>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'TabItem',
  props: {
    cityInfo: Object
  },
  computed: {
    ...mapState(['cityId'])
  },
  methods: {
    ...mapMutations(['selectCity']),
    onTabClick (cityInfo) {
      this.selectCity(cityInfo);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';

.tab-item {
  @include vh-center;
  flex: 1;
  height: 100%;
  border-bottom: 2px solid #fff;
  font-size: .16rem;
  box-sizing: border-box;

  &.current {
    color: $defaultGreen;
    border-color: $defaultGreen;
  }
}
</style>
