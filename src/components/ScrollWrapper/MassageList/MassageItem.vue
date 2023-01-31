<template>
  <div class="massage-item">
    <router-link :to="{ path: '/detail', query: { field: 'massage', id: massage.id } }">
      <div class="img-box">
        <img :src="massage.img" :alt="massage.intro" class="massage-img">
      </div>
      <div class="info">
        <h1 class="title">{{ massage.name }}</h1>
        <p class="stars">
          <stars :starNum="Number(massage.star)"></stars>
          <span class="score">{{ massage.score }}分</span>
        </p>
        <p class="others">
          <span class="item">
            ￥<span class="price">{{ massage.default_price }}</span>元
          </span>
          <span class="item">{{ massage.city_name }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import Stars from '../Sub/Stars.vue';

export default {
  name: 'MassageItem',
  components: {
    Stars
  },
  props: {
    massage: Object
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';

.massage-item {
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

      .massage-img {
        width: 100%;
        height: 100%;
      }
    }

    .info {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: .1rem .1rem 0 1.2rem;
      font-size: .14rem;
      box-sizing: border-box;

      .title {
        @include ellipsis;
        height: .3rem;
        font-size: .18rem;
        line-height: .3rem;
      }

      .stars {
        @include flex-row;
        color: #ccc;
        line-height: .5rem;

        .score,
        .active {
          color: $starColor;
        }
      }

      .others {
        display: flex;
        justify-content: space-between;
        line-height: .3rem;

        .price {
          color: $defaultOrange;
          font-size: .2rem;
        }
      }
    }
  }
}
</style>
