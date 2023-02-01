<template>
  <div class="detail-wrapper">
    <detail-name :name="name"></detail-name>

    <detail-stars
      :starNum="starNum"
      :score="score"
    ></detail-stars>

    <detail-address
      :address="address"
    ></detail-address>

    <detail-price
      :price="price"
    ></detail-price>

    <detail-service
      :service="service"
    ></detail-service>
  </div>
</template>

<script>
import DetailName from './Components/Name.vue';
import DetailStars from './Components/Stars.vue';
import DetailAddress from './Components/Address.vue';
import DetailPrice from './Components/Price.vue';
import DetailService from './Components/Service.vue';

export default {
  name: 'DetailKtv',
  components: {
    DetailName,
    DetailStars,
    DetailAddress,
    DetailPrice,
    DetailService
  },
  props: {
    name: String,
    starNum: Number,
    score: String,
    address: String,
    price: Number,
    service: Object
  }
}
</script>

<style lang="scss" scoped>
</style>
