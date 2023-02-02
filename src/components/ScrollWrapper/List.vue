<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <div v-if="!errorShow">
        <view-list
          v-if="field === 'view'"
          :viewData="listData[cityId]"
        ></view-list>

        <food-list
          v-if="field === 'food'"
          :foodData="listData[cityId]"
        ></food-list>

        <hotel-list
          v-if="field === 'hotel'"
          :hotelData="listData[cityId]"
        ></hotel-list>

        <massage-list
          v-if="field === 'massage'"
          :massageData="listData[cityId]"
        ></massage-list>

        <ktv-list
          v-if="field === 'ktv'"
          :ktvData="listData[cityId]"
        ></ktv-list>

        <loading :loadingShow="loadingShow"></loading>
      </div>
      <error :errorShow="errorShow"></error>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll';
import { mapState } from 'vuex';
import { ListModel } from 'models/list';
import tools from 'utils/tools';
import ViewList from './ViewList';
import FoodList from './FoodList';
import HotelList from './HotelList';
import MassageList from './MassageList';
import KtvList from './KtvList';
import Loading from './Sub/Loading.vue';
import Error from './Sub/Error.vue';

export default {
  name: 'ListScrollWrapper',
  components: {
    ViewList,
    FoodList,
    HotelList,
    MassageList,
    KtvList,
    Loading,
    Error
  },
  data () {
    return {
      errorShow: false,
      loadingShow: true,
      listData: {}
    }
  },
  computed: {
    ...mapState(['cityId', 'field'])
  },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true });

    this.getListDatas(this.cityId, this.field);
  },
  methods: {
    getListDatas (cityId, field) {
      if (!this.listData[cityId]) {
        const listModel = new ListModel();

        this.loadingShow = true;

        listModel.getListDatas(cityId, field).then(res => {
          if (res && res.status === 0) {
            this.errorShow = false;
            const data = tools.formatData(res.data, 'keyword');

            setTimeout(() => {
              this.loadingShow = false;
              this.listData[cityId] = data;
            }, 500);
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
  },
  watch: {
    cityId () {
      this.getListDatas(this.cityId, this.field);
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
