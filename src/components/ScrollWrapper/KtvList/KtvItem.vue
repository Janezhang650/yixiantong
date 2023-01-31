<template>
  <div class="ktv-item">
    <router-link :to="{ path: '/detail', query: { field: 'ktv', id: ktv.id } }">
      <div class="img-box">
        <img class="ktv-img" :src="ktv.img" :alt="ktv.intro">
      </div>
      <div class="info">
        <h1 class="title">{{ ktv.name }}</h1>
        <p class="stars">
          <stars :starNum="Number(ktv.star)"></stars>
          <span class="score">{{ ktv.score }}分</span>
        </p>
        <p class="others">
          <span class="item">
            ￥<span class="price">{{ ktv.default_price }}</span>元
          </span>
          <span class="item">{{ ktv.area }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import Stars from '../Sub/Stars.vue';

export default {
  name: 'KtvItem',
  components: {
    Stars
  },
  props: {
    ktv: Object
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';

.ktv-item {
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

      .ktv-img {
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

        .price {
          color: $defaultGreen;
          font-size: .2rem;
        }
      }
    }
  }
}
</style>
