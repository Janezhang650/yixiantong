<template>
  <div class="price-bd">
    <i class="iconfont icon-price"></i>
    <span class="price">￥{{ price || 0 }}元起</span>
  </div>
</template>

<script>
export default {
  name: 'DetailPrice',
  props: {
    price: {
      type: Number,
      default () {
        return 0;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';

.price-bd {
  height: .44rem;
  padding: .03rem .15rem 0;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .iconfont {
    margin: .08rem .1rem 0 0;
    color: #000;
    font-size: .18rem;
  }

  .price {
    margin-top: .1rem;
    color: $defaultOrange;
    font-size: .16rem;
  }
}
</style>
