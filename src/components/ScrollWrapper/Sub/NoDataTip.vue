<template>
  <div class="no-data-tip">
    <span>- 没有搜索到相关结果 -</span>
  </div>
</template>

<script>
export default {
  name: 'NoDataTip'
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.no-data-tip {
  @include vh-center;
  height: 3rem;
  font-size: .16rem;
  color: #999;
}
</style>
