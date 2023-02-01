<template>
  <div class="view-item">
    <router-link :to="{ path: '/detail', query: { field: 'view', id: view.id }}">
      <div class="img-box">
        <img class="view-img" :src="view.img" :alt="view.intro">
      </div>
      <div class="info">
        <h1 class="title">{{ view.name }}</h1>
        <p class="stars">
          <stars :starNum="Number(view.star)"></stars>
          <span class="score">{{ view.score }}分</span>
        </p>
        <p class="other">
          <span class="item">
            ￥ <span class="price">{{ view.default_price }}</span> 起
          </span>
          <span class="item">{{ view.city_name }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import Stars from '../Sub/Stars.vue';

export default {
  name: 'ViewItem',
  components: {
    Stars
  },
  props: {
    view: Object
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';

.view-item {
  @include flex-column;
  width: 50%;
  padding: .1rem;
  background-color: #fff;
  box-sizing: border-box;

  .img-box {
    width: 100%;
    height: 1.1rem;
    overflow: hidden;

    .view-img {
      width: 100%;
      min-height: 1.1rem;
    }
  }

  .info {
    @include flex-column;

    .title {
      @include ellipsis;
      margin-top: .1rem;
      font-size: .16rem;
    }

    .stars {
      @include flex-row;
      height: .3rem;
      color: #ccc;
      font-size: .14rem;
      line-height: .3rem;

      .score,
      .active {
        color: $starColor;
      }
    }

    .other {
      @include flex-row;
      justify-content: space-between;
      height: .3rem;
      font-size: .14rem;
      line-height: .3rem;

      .price {
        color: $defaultGreen;
        font-size: .2rem;
      }
    }
  }
}
</style>
