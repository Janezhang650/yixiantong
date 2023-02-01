<template>
  <div class="comment-keyword-bd">
    <detail-title
      icon="icon-haoping"
      title="关键评论词"
    ></detail-title>
    <div class="comment-keyword">
      <span
        class="keyword"
        v-for="(item, index) in keywords"
        :key="index"
      >
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
import DetailTitle from './Title.vue';

export default {
  name: 'DetailCommentKeyword',
  components: {
    DetailTitle
  },
  props: {
    keywords: Array
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';

.comment-keyword-bd {
  @include flex-column;
  margin-top: .1rem;
  background-color: #fff;

  .comment-keyword {
    @include flex-row;
    flex-wrap: wrap;
    padding: .1rem .15rem;
    font-size: .14rem;
    line-height: .18rem;

    .keyword {
      @include vh-center;
      height: .25rem;
      padding: 0 .05rem;
      margin: 0 .05rem .05rem 0;
      border: 1px solid $defaultGreen;
      border-radius: 3px;
      color: $defaultGreen;
    }
  }
}
</style>
