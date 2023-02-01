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

    <detail-open-datetime
      :dateTime="dateTime"
    ></detail-open-datetime>

    <detail-comment-keyword
      :keywords="keywords"
    ></detail-comment-keyword>

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
import DetailOpenDatetime from './Components/OpenDateTime.vue';
import DetailCommentKeyword from './Components/CommentKeyword.vue';
import DetailService from './Components/Service.vue';

export default {
  name: 'DetailMassage',
  components: {
    DetailName,
    DetailStars,
    DetailAddress,
    DetailPrice,
    DetailOpenDatetime,
    DetailCommentKeyword,
    DetailService
  },
  props: {
    name: String,
    starNum: Number,
    score: String,
    address: String,
    price: Number,
    dateTime: String,
    keywords: Array,
    service: Object
  }
}
</script>

<style lang="scss" scoped>
</style>
