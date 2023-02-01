<template>
  <div class="open-datetime-bd">
    <i class="iconfont icon-datetime"></i>
    <span class="datetime">{{ dateTime }}</span>
  </div>
</template>

<script>
export default {
  name: 'DetailOpenDatetime',
  props: {
    dateTime: {
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

.open-datetime-bd {
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

  .datetime {
    color: $defaultTextColor;
    font-size: .14rem;
    line-height: .18rem;
  }
}
</style>
