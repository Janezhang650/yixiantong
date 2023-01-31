<template>
  <div class="stars-wrapper">
    <i :class="['iconfont icon-star', { active: starNum >= 1 }]"></i>
    <i :class="['iconfont icon-star', { active: starNum >= 2 }]"></i>
    <i :class="['iconfont icon-star', { active: starNum >= 3 }]"></i>
    <i :class="['iconfont icon-star', { active: starNum >= 4 }]"></i>
    <i :class="['iconfont icon-star', { active: starNum >= 5 }]"></i>
  </div>
</template>

<script>
export default {
  name: 'Stars',
  props: {
    starNum: Number
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';

.stars-wrapper {
  color: #ccc;

  .active {
    color: $starColor;
  }
}
</style>
