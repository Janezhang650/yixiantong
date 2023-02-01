<template>
  <div class="name-bd">
    <i class="iconfont icon-name"></i>
    <span class="name">{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: 'DetailName',
  props: {
    name: {
      type: String,
      default () {
        return '加载中...'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.name-bd {
  height: .44rem;
  padding: .03rem .15rem 0;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .iconfont {
    color: #000;
    font-size: .18rem;
  }

  .name {
    margin-left: .1rem;
    font-size: .14rem;
  }
}
</style>
