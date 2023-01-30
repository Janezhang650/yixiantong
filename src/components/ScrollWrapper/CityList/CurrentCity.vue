<template>
  <div class="current-city">
    <span>当前城市：</span>
    <router-link :to="{ name: path }">
      <i class="iconfont icon-positioning"></i>
      <span class="city-name">{{ this.cityName }}</span>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CurrentCity',
  data () {
    return {
      path: 'Index'
    }
  },
  computed: {
    ...mapState(['cityName'])
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';

.current-city {
  @include flex-row;
  align-items: center;
  padding-left: .15rem;
  height: $headerHeight;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  font-size: .16rem;

  .iconfont {
    color: $defaultBgColor;
  }
}
</style>
