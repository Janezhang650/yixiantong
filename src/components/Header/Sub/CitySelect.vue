<template>
  <div class="city-select">
    <router-link to="City">
      <span class="city-name">{{ cityName }}</span>
      <i class="iconfont icon-header-arrow"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CitySelect',
  props: {
    cityName: String
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';

.city-select {
  @include flex-row;
  width: .6rem;

  a {
    @include vh-center;
    width: 100%;
    height: $headerHeight;
    line-height: .5rem;

    .city-name {
      font-size: .16rem;
      font-weight: bold;
    }

    .iconfont {
      margin-left: .03rem;
      font-size: .08rem;
      vertical-align: -.003rem;
    }
  }
}
</style>
