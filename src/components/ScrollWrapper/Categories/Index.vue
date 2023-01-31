<template>
  <div class="categories">
    <category-item
      v-for="item in fieldData"
      :key="item.id"
      :bgColor="item.bgColor"
      :icon="item.icon"
      :iconText="item.iconText"
      :field="item.field"
    ></category-item>
  </div>
</template>

<script>
import CategoryItem from './CategoryItem.vue';
import fieldData from 'data/fields';

export default {
  name: 'Categories',
  components: {
    CategoryItem
  },
  data () {
    return {
      fieldData
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';

.categories {
  @include flex-row;
  flex-wrap: wrap;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
</style>
