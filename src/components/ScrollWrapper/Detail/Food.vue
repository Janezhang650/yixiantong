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

    <detail-recom
      :recom="recom"
    ></detail-recom>

    <detail-comment-keyword
      :keywords="keywords"
    ></detail-comment-keyword>
  </div>
</template>

<script>
import DetailName from './Components/Name.vue';
import DetailStars from './Components/Stars.vue';
import DetailAddress from './Components/Address.vue';
import DetailPrice from './Components/Price.vue';
import DetailOpenDatetime from './Components/OpenDateTime.vue';
import DetailRecom from './Components/Recom.vue';
import DetailCommentKeyword from './Components/CommentKeyword.vue';

export default {
  name: 'DetailFood',
  components: {
    DetailName,
    DetailStars,
    DetailAddress,
    DetailPrice,
    DetailOpenDatetime,
    DetailRecom,
    DetailCommentKeyword
  },
  props: {
    name: String,
    starNum: Number,
    score: String,
    address: String,
    price: Number,
    dateTime: String,
    recom: String,
    keywords: Array
  }
}
</script>

<style lang="scss" scoped>
</style>
