<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <div v-if="!data.status">
        <no-data-tip v-show="
          (!data.viewDatas || data.viewDatas.length <= 0) &&
          (!data.foodDatas || data.foodDatas.length <= 0) &&
          (!data.hotelDatas || data.hotelDatas.length <= 0) &&
          (!data.massageDatas || data.massageDatas.length <= 0) &&
          (!data.ktvDatas || data.ktvDatas.length <= 0)
        "></no-data-tip>
        <div v-if="data.viewDatas && data.viewDatas.length > 0">
          <home-title title="景点结果："></home-title>
          <view-list :viewData="data.viewDatas"></view-list>
        </div>
        <div v-if="data.foodDatas && data.foodDatas.length > 0">
          <home-title title="美食结果："></home-title>
          <food-list :foodData="data.foodDatas"></food-list>
        </div>
        <div v-if="data.hotelDatas && data.hotelDatas.length > 0">
          <home-title title="酒店结果："></home-title>
          <hotel-list :hotelData="data.hotelDatas"></hotel-list>
        </div>
        <div v-if="data.massageDatas && data.massageDatas.length > 0">
          <home-title title="按摩结果："></home-title>
          <massage-list :massageData="data.massageDatas"></massage-list>
        </div>
        <div v-if="data.ktvDatas && data.ktvDatas.length > 0">
          <home-title title="KTV结果："></home-title>
          <ktv-list :ktvData="data.ktvDatas"></ktv-list>
        </div>
      </div>
      <error :errorShow="data.status === -1"></error>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll';
import HomeTitle from './Sub/HomeTitle.vue';
import ViewList from './ViewList';
import FoodList from './FoodList';
import HotelList from './HotelList';
import MassageList from './MassageList';
import KtvList from './KtvList';
import NoDataTip from './Sub/NoDataTip.vue';
import Error from './Sub/Error.vue';

export default {
  name: 'SearchScrollWrapper',
  components: {
    HomeTitle,
    ViewList,
    FoodList,
    HotelList,
    MassageList,
    KtvList,
    NoDataTip,
    Error
  },
  props: {
    data: Object
  },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap:true });
  }
}
</script>

<style lang="scss" scoped></style>
