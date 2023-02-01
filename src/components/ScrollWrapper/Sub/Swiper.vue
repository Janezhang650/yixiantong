<template>
  <div class="swiper-wrapper">
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="(item, index) of picData"
        :pic="item"
        :key="index"
      >
        <img class="swiper-img" :src="item">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

export default {
  name: 'Swiper',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    picData: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables.scss';

.swiper-wrapper >>> .swiper-pagination-bullet-active {
  background-color: $defaultGreen;
}
.swiper-wrapper {
  height: 2rem;
}

.swiper-img {
  width: 100%;
  height: 100%;
}
</style>
