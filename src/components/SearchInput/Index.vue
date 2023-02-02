<template>
  <div class="search-input">
    <div class="input-wrapper">
      <i class="iconfont icon-header-search"></i>
      <input class="input" type="text" v-model="keyword" @input="onSearch" :placeholder="placeholder">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { SearchModel } from 'models/search';
import tools from 'utils/tools';

export default {
  name: 'SearchInput',
  data () {
    return {
      placeholder: '美食 / 景点 / 酒店 / 按摩 / KTV',
      keyword: ''
    }
  },
  computed: {
    ...mapState(['cityId'])
  },
  methods: {
    onSearch: tools.throttle(function () {
      const keyword = tools.trimSpace(this.keyword);

      if (keyword.length <= 0) {
        this.$emit('onSearch', {})
        return;
      }
      const searchModel = new SearchModel();
      searchModel.searchAction(keyword, this.cityId).then(res => {
        this.$emit('onSearch', res)
      })
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.search-input {
  @include vh-center;
  height: .44rem;
  padding: .08rem .15rem;
  background-color: #fff;
  box-sizing: border-box;

  .input-wrapper {
    position: relative;
    width: 100%;
    height: 100%;

    .iconfont {
      position: absolute;
      top: .08rem;
      left: .08rem;
      color: #999;
      font-size: .16rem;
    }

    .input {
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
      border-radius: .03rem;
      font-size: .14rem;
      text-indent: .32rem;
      box-sizing: border-box;
    }
  }
}
</style>
