<template>
  <div class="tip-bd">
    <i class="iconfont icon-tip"></i>
    <span class="tip">{{ tip }}</span>
  </div>
</template>

<script>
export default {
  name: 'DetailTip',
  props: {
    tip: {
      type: String,
      default () {
        return '加载中...';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';

.tip-bd {
  display: flex;
  align-items: center;
  min-height: .44rem;
  padding: .1rem .15rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .iconfont {
    margin-right: .1rem;
    color: #999;
    font-size: .18rem;
  }

  .tip {
    color: $defaultTextColor;
    font-size: .14rem;
    line-height: .18rem;
  }
}
</style>
