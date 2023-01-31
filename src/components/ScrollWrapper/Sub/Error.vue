<template>
  <div class="error" v-show="errorShow">
    <i class="iconfont icon-error"></i>
    <span class="error-text">网络走丢啦</span>
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: {
    errorShow: {
      type: Boolean,
      default () {
        return false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.error {
  @include vh-center;
  flex-direction: column;
  height: 3rem;
  color: #999;

  .iconfont {
    font-size: .5rem;
  }

  .error-text {
    font-size: .14rem;
    margin-top: .1rem;
  }
}
</style>
