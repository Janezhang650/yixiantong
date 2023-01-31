<template>
  <div class="ktv-list">
    <ktv-item
      v-for="(item, index) in ktvData"
      :key="index"
      :ktv="item"
    ></ktv-item>
  </div>
</template>

<script>
import KtvItem from './KtvItem.vue';

export default {
  name: 'KtvList',
  components: {
    KtvItem
  },
  props: {
    ktvData: Array
  }
}
</script>

<style lang="scss" scoped>

</style>
