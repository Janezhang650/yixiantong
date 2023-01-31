<template>
  <div class="category-item">
    <div class="icon"
      :style="{ backgroundColor: bgColor }"
      @click="onRouteTo(field)"
    >
      <i class="iconfont" :class="icon"></i>
    </div>
    <p class="icon-text">{{ iconText }}</p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'CategoryItem',
  props: {
    bgColor: String,
    icon: String,
    field: String,
    iconText: {
      type: String,
      default () {
        return '分类'
      }
    }
  },
  methods: {
    ...mapMutations(['selectField']),
    onRouteTo (field) {
      this.selectField(field);
      this.$router.push('/list');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';

.category-item {
  @include flex-column;
  @include vh-center;
  width: 20%;
  padding: .2rem 0;

  .icon {
    @include vh-center;
    width: .4rem;
    height: .4rem;
    border-radius: 50%;
    color: #fff;

    .iconfont {
      font-size: .26rem;
    }
  }

  .icon-text {
    margin-top: .1rem;
    font-size: .14rem;
  }
}
</style>
