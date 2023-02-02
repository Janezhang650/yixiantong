<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <categories></categories>
      <div v-if="!errorShow">
        <home-title :title="homeTitle.viewTitle"></home-title>
        <view-list :viewData="homeDatas.viewData"></view-list>
        <home-title :title="homeTitle.foodTitle"></home-title>
        <food-list :foodData="homeDatas.foodData"></food-list>
        <home-title :title="homeTitle.hotelTitle"></home-title>
        <hotel-list :hotelData="homeDatas.hotelData"></hotel-list>
        <home-title :title="homeTitle.massageTitle"></home-title>
        <massage-list :massageData="homeDatas.massageData"></massage-list>
        <home-title :title="homeTitle.ktvTitle"></home-title>
        <ktv-list :ktvData="homeDatas.ktvData"></ktv-list>
      </div>
      <error :errorShow="errorShow"></error>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll';
import { mapState } from 'vuex';
import { IndexModel } from 'models/index';
import tools from 'utils/tools';

import Categories from './Categories';
import HomeTitle from './Sub/HomeTitle.vue';
import ViewList from './ViewList';
import FoodList from './FoodList';
import HotelList from './HotelList';
import MassageList from './MassageList';
import KtvList from './KtvList';
import Error from './Sub/Error.vue';

export default {
  name: 'HomeScrollWrapper',
  components: {
    Categories,
    HomeTitle,
    ViewList,
    FoodList,
    HotelList,
    MassageList,
    KtvList,
    Error
  },
  data () {
    return {
      errorShow: false,
      homeTitle: {
        viewTitle: '推荐景点',
        foodTitle: '推荐美食',
        hotelTitle: '推荐酒店',
        massageTitle: '推荐按摩',
        ktvTitle: '推荐KTV'
      },
      homeDatas: {
        viewData:[],
        foodData: [],
        hotelData: [],
        massageData: [],
        ktvData: []
      }
    }
  },
  computed: {
    ...mapState(['cityId'])
  },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true });
    this.getHomeDatas(this.cityId);
  },
  methods: {
    getHomeDatas (cityId) {
      const indexModel = new IndexModel();
      indexModel.getHomeDatas(cityId).then(res => {
        if (res && res.status === 0) {
          this.errorShow = false;
          const data = res.data;
          this.homeDatas.viewData = data.viewDatas;
          this.homeDatas.foodData = tools.formatData(data.foodDatas, 'keyword');
          this.homeDatas.hotelData = data.hotelDatas;
          this.homeDatas.massageData = data.massageDatas;
          this.homeDatas.ktvData = data.ktvDatas;
        } else {
          this.errorShow = true;
          console.log({
            errorCode: res.status,
            errorMsg: res.error
          });
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
