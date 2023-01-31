<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <categories></categories>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll';
import Categories from './Categories';

export default {
  name: 'HomeScrollWrapper',
  components: {
    Categories
  },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.wrapper);
  }
}
</script>

<style lang="scss" scoped>
</style>
