<template>
  <div class="false-input">
    <router-link to="Search">
      <div class="input">
        <i class="iconfont icon-header-search"></i>
        <p class="placeholder">{{ placeholderText }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'FalseInput',
  data () {
    return {
      placeholderText: '美食 / 景点 / 酒店 / 按摩 / KTV'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';

.false-input {
  flex: 1;
  padding: .06rem .1rem .06rem 0;
  box-sizing: border-box;

  .input {
    @include flex-row;
    @include vh-center;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 5px;
    color: #999;

    .iconfont {
      margin-right: .05rem;
      font-size: .18rem;
      vertical-align: -.02rem;
    }

    .placeholder {
      font-size: .14rem;
    }
  }
}
</style>
