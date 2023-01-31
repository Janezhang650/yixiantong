<template>
  <div class="container">
    <home-header></home-header>
    <home-scroll-wrapper></home-scroll-wrapper>
  </div>
</template>

<script>
import HomeHeader from '@/components/Header';
import HomeScrollWrapper from '@/components/ScrollWrapper/Index';

export default {
  name: 'Index',
  components: {
    HomeHeader,
    HomeScrollWrapper
  }
}
</script>

<style lang="scss" scoped>
</style>
