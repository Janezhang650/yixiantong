<template>
  <header class="header">
    <back-ward></back-ward>
    <h2 class="title">{{ title }}</h2>
  </header>
</template>

<script>
import BackWard from './Sub/Backward.vue';
export default {
  name: 'CommonHeader',
  components: {
    BackWard
  },
  props: {
    title: {
      type: String,
      default () {
        return '一线生活通'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';
@import '~styles/mixins.scss';

.header {
  position: relative;
  @include vh-center;
  height: $headerHeight;
  background-color: $defaultBgColor;

  .title {
    font-size: .16rem;
  }
}
</style>
