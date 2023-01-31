<template>
  <div class="massage-list">
    <massage-item
      v-for="(item, index) in massageData"
      :key="index"
      :massage="item"
    ></massage-item>
  </div>
</template>

<script>
import MassageItem from './MassageItem.vue';

export default {
  name: 'MassageList',
  components: {
    MassageItem
  },
  props: {
    massageData: Array
  }
}
</script>

<style lang="scss" scoped>
</style>
