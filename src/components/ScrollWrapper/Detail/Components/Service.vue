<template>
  <div class="service-bd">
    <detail-title
      icon="icon-service"
      title="商家服务"
    ></detail-title>
    <div class="service-content">
      <p>停车场：{{ service && service.parking ? '有' : '无' }}</p>
      <p>WIFI: {{ service && service.wifi ? '有' : '无' }}</p>
    </div>
  </div>
</template>

<script>
import DetailTitle from './Title.vue';

export default {
  name: 'DetailService',
  components: {
    DetailTitle
  },
  props: {
    service: Object
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';

.service-bd {
  @include flex-column;
  margin-top: .1rem;
  background-color: #fff;

  .service-content {
    padding: .1rem .15rem;
    color: $defaultTextColor;
    font-size: .14rem;
    line-height: .18rem;
    box-sizing: border-box;
  }
}
</style>
