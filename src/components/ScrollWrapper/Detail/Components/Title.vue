<template>
  <div class="title-bd">
    <i :class="['iconfont', icon]"></i>
    <span class="title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'DetailTitle',
  props: {
    icon: String,
    title: String
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';

.title-bd {
  display: flex;
  align-items: center;
  height: .44rem;
  padding: 0 .15rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  line-height: .44rem;
  box-sizing: border-box;

  .iconfont {
    margin-right: .1rem;
    color: $defaultGreen;
    font-size: .18rem;
  }

  .title {
    color: $defaultGreen;
    font-size: .16rem;
  }
}
</style>
