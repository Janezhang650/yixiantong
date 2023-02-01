<template>
  <div class="address-bd">
    <i class="iconfont icon-positioning"></i>
    <span class="address">{{ address }}</span>
  </div>
</template>

<script>
export default {
  name: 'DetailAddress',
  props: {
    address: {
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
.address-bd {
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

  .address {
    color: $defaultTextColor;
    font-size: .14rem;
    line-height: .18rem;
  }
}
</style>
