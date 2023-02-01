<template>
  <div class="stars-bd">
    <i class="iconfont icon-smile"></i>
    <stars :starNum="starNum"></stars>
    <span class="score">{{ score }}分</span>
  </div>
</template>

<script>
import Stars from '../../Sub/Stars.vue';

export default {
  name: 'DetailStars',
  components: {
    Stars
  },
  props: {
    starNum: Number,
    score: {
      type: String,
      default () {
        return '0.0';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';

.stars-bd {
  @include flex-row;
  height: .44rem;
  padding: .03rem .15rem 0;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .icon-smile {
    margin: .08rem .1rem 0 0;
    color: #999;
    font-size: .18rem;
  }

  .score {
    margin: .1rem 0 0 .15rem;
    color: $defaultOrange;
    font-size: .16rem;
  }
}
</style>
