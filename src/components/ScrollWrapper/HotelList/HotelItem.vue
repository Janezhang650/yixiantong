<template>
  <div class="hotel-item">
    <router-link :to="{ path: '/detail', query: { field: 'hotel', id: hotel.id }}">
      <div class="img-box">
        <img class="hotel-img" :src="hotel.img" :alt="hotel.intro">
      </div>
      <div class="info">
        <h1 class="title">{{ hotel.name }}</h1>
        <p class="score">{{ hotel.score }}分</p>
        <p class="area">{{ hotel.area }}</p>
        <p class="others">
          <span class="item">
            ￥<span class="price">{{ hotel.default_price }}</span>起
          </span>
          <span class="item">{{ hotel.city_name }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HotelItem',
  props: {
    hotel: Object
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';

.hotel-item {
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

      .hotel-img {
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
      font-size: .16rem;
      color: $defaultTextColor;
      box-sizing: border-box;

      .title {
        @include ellipsis;
        height: .3rem;
        line-height: .3rem;
        font-size: .18rem;
      }
      .score {
        color: $starColor;
        line-height: .3rem;
      }

      .area {
        color: #999;
        font-size: .14rem;
        line-height: .2rem;
      }

      .others {
        display: flex;
        justify-content: space-between;
        line-height: .3rem;
        font-size: .14rem;

        :nth-child(1) {
          color: $defaultGreen;
        }

        .price {
          font-size: .2rem;
        }
      }
    }
  }
}
</style>
