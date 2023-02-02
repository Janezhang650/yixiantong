<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <div v-if="!errorShow">
        <swiper :picData="detailData.pics"></swiper>

        <detail-food
          v-if="field === 'food'"
          :name="detailData.name"
          :starNum="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="Number(detailData.default_price)"
          :dateTime="detailData.open_datetime"
          :recom="detailData.recom"
          :keywords="detailData.comment_keyword"
        ></detail-food>

        <detail-view
          v-if="field === 'view'"
          :name="detailData.name"
          :starNum="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="Number(detailData.default_price)"
          :dateTime="detailData.open_datetime"
          :tip="detailData.tip"
          :intro="detailData.intro"
          :ticketInfo="detailData.ticket_info"
        ></detail-view>

        <detail-hotel
          v-if="field === 'hotel'"
          :name="detailData.name"
          :starNum="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="Number(detailData.default_price)"
          :service="detailData.service"
        ></detail-hotel>

        <detail-massage
          v-if="field === 'massage'"
          :name="detailData.name"
          :starNum="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="Number(detailData.default_price)"
          :dateTime="detailData.open_datetime"
          :keywords="detailData.comment_keyword"
          :service="detailData.service"
        ></detail-massage>

        <detail-ktv
          v-if="field === 'ktv'"
          :name="detailData.name"
          :starNum="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="Number(detailData.default_price)"
          :service="detailData.service"
        ></detail-ktv>
      </div>
      <error :errorShow="errorShow"></error>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll';

import { DetailModel } from 'models/detail';
import tools from 'utils/tools';
import Swiper from './Sub/Swiper.vue';
import DetailFood from './Detail/Food.vue';
import DetailView from './Detail/View.vue';
import DetailHotel from './Detail/Hotel.vue';
import DetailMassage from './Detail/Massage.vue';
import DetailKtv from './Detail/Ktv.vue';
import Error from './Sub/Error.vue';

export default {
  name: 'DetailScrollWrapper',
  components: {
    Swiper,
    DetailFood,
    DetailView,
    DetailHotel,
    DetailMassage,
    DetailKtv,
    Error
  },
  data () {
    return {
      errorShow: false,
      field: '',
      id: '0',
      detailData: {}
    }
  },
  mounted () {
    this.field = this.$route.query.field;
    this.id = this.$route.query.id;

    this.scroll = new BetterScroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true });
    this.getDetail(this.field, this.id);
  },
  activated () {
    this.currentField = this.$route.query.field;
    this.currentId = this.$route.query.id;

    if (this.currentField !== this.field && this.currentId !== this.id) {
      this.field = this.currentField;
      this.id = this.currentId;

      this.getDetail(this.field, this.id);
    }
  },
  methods: {
    getDetail (field, id) {
      const detailModel = new DetailModel();
      detailModel.getDetail(field, id).then(res => {
        if (res && res.status === 0) {
          const data = res.data;
          this.errorShow = false;

          data.pics && (data.pics = tools.jsonToArr(data.pics));
          data.recom && (data.recom = tools.replaceToSpace(data.recom));
          data.comment_keyword && (data.comment_keyword = tools.strToArr(data.comment_keyword));
          data.service && (data.service = tools.jsonToArr(data.service));

          this.detailData = data;
        } else {
          this.errorShow = true;
          console.log({
            errorCode: res.status,
            errorMsg: res.error
          });
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
