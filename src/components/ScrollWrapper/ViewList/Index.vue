<template>
  <div class="view-list">
    <view-item
      v-for="(item, index) of viewData"
      :key="index"
      :view="item"
    ></view-item>
  </div>
</template>

<script>
import ViewItem from './ViewItem.vue';

export default {
  name: 'ViewList',
  components: {
    ViewItem
  },
  props: {
    viewData: Array
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.view-list {
  @include flex-row;
  flex-wrap: wrap;
}
</style>
