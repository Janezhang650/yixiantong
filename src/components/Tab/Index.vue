<template>
  <nav class="tab">
    <tab-item
      v-for="(item, index) of cityData"
      :key="index"
      :cityInfo="item"
    ></tab-item>
  </nav>
</template>

<script>
import TabItem from './TabItem.vue';
import cityData from 'data/cities';

export default {
  name: 'Tab',
  components: {
    TabItem
  },
  data () {
    return {
      cityData
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.tab {
  @include flex-row;
  flex-wrap: nowrap;
  height: .44rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
</style>
