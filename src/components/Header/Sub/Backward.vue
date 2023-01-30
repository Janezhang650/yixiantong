<template>
  <div class="back-ward" @click="onBackClick">
    <i class="iconfont icon-header-arrow-left"></i>
  </div>
</template>

<script>
export default {
  name: 'BackWard',
  methods: {
    onBackClick () {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';

.back-ward {
  position: absolute;
  top: 0;
  left: 0;
  @include flex-row;
  @include vh-center;
  width: $headerHeight;
  height: $headerHeight;

  .iconfont {
    font-size: .2rem;
  }
}
</style>
