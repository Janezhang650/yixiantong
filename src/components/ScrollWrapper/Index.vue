<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <categories></categories>
      <home-title :title="homeTitle.viewTitle"></home-title>
      <view-list :viewData="homeDatas.viewData"></view-list>
      <home-title :title="homeTitle.foodTitle"></home-title>
      <food-list :foodData="homeDatas.foodData"></food-list>
      <home-title :title="homeTitle.hotelTitle"></home-title>
      <home-title :title="homeTitle.massageTitle"></home-title>
      <home-title :title="homeTitle.ktvTitle"></home-title>
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

export default {
  name: 'HomeScrollWrapper',
  components: {
    Categories,
    HomeTitle,
    ViewList,
    FoodList
  },
  data () {
    return {
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
    this.scroll = new BetterScroll(this.$refs.wrapper);
    this.getHomeDatas(this.cityId);
  },
  methods: {
    getHomeDatas (cityId) {
      const indexModel = new IndexModel();
      indexModel.getHomeDatas(cityId).then(res => {
        if (res && res.status === 0) {
          const data = res.data;
          this.homeDatas.viewData = data.viewDatas;
          this.homeDatas.foodData = tools.formatData(data.foodDatas, 'keyword');
          this.homeDatas.hotelData = data.hotelDatas;
          this.homeDatas.massageData = data.massageDatas;
          this.homeDatas.ktvData = data.ktvDatas;
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
