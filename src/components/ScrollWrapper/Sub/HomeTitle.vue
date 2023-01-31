<template>
  <div class="home-title">
    <p class="title">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'HomeTitle',
  props: {
    title: {
      type: String,
      default () {
        return '享受生活';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';

.home-title {
  height: $headerHeight;
  padding-left: .15rem;
  margin-top: .1rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  line-height: .5rem;

  .title {
    font-size: .18rem;
  }
}
</style>
