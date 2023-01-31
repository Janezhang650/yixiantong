<template>
  <div class="food-item">
    <router-link :to="{ path: '/detail', query: { field: 'food', id: food.id } }">
      <div class="img-box">
        <img class="food-img" :src="food.img" :alt="food.intro">
      </div>
      <div class="info">
        <h1 class="title">{{ food.name }}</h1>
        <p class="stars">
          <stars :starNum="Number(food.star)"></stars>
          <span class="price">￥{{ food.default_price }}/人</span>
        </p>
        <p class="keyword">
          <span class="badge" v-for="(item, index) in food.keyword" :key="index">{{ item }}</span>
        </p>
        <p class="other">
          <span class="item">{{ food.field }}</span>
          <span class="item">{{ food.area }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import Stars from '../Sub/Stars.vue';

export default {
  name: 'FoodItem',
  components: {
    Stars
  },
  props: {
    food: Object
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';

.food-item {
  position: relative;
  background-color: #fff;
  border-bottom: 1px solid #ddd;

  a {
    @include flex-row;

    .img-box {
      width: 1.2rem;
      height: 1.2rem;
      padding: .1rem;
      box-sizing: border-box;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .info {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding:.1rem .1rem 0 1.2rem;
      font-size: .16rem;

      .title {
        @include ellipsis;
      }

      .stars {
        @include flex-row;
        font-size: .14rem;
        line-height: .3rem;

        .price {
          color: $defaultTextColor;
        }
      }

      .keyword {
        height: .3rem;
        line-height: .3rem;
        overflow: hidden;

        .badge {
          margin-left: .05rem;
          padding: 0 .05rem;
          background-color: #fbf4e4;
          color: #be9e4d;
          font-size: .14rem;
        }
      }

      .other {
        display: flex;
        justify-content: space-between;
        font-size: .14rem;
        line-height: .25rem;
      }
    }
  }
}
</style>
