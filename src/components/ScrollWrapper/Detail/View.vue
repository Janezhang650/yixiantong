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

    <detail-tip
      :tip="tip"
    ></detail-tip>

    <detail-intro
      :intro="intro"
    ></detail-intro>

    <detail-ticket-info
      :ticketInfo="ticketInfo"
    ></detail-ticket-info>
  </div>
</template>

<script>
import DetailName from './Components/Name.vue';
import DetailStars from './Components/Stars.vue';
import DetailAddress from './Components/Address.vue';
import DetailPrice from './Components/Price.vue';
import DetailOpenDatetime from './Components/OpenDateTime.vue';
import DetailTip from './Components/Tip.vue';
import DetailIntro from './Components/Intro';
import DetailTicketInfo from './Components/TicketInfo.vue';

export default {
  name: 'DetailView',
  components: {
    DetailName,
    DetailStars,
    DetailAddress,
    DetailPrice,
    DetailOpenDatetime,
    DetailTip,
    DetailIntro,
    DetailTicketInfo
  },
  props: {
    name: String,
    starNum: Number,
    score: String,
    address: String,
    price: Number,
    dateTime: String,
    tip: String,
    intro: String,
    ticketInfo: String
  }
}
</script>

<style lang="scss" scoped>
</style>
