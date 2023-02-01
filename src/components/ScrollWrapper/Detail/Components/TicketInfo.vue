<template>
  <div class="ticket-info-bd">
    <detail-title
      icon="icon-intro"
      title="购票信息"
    ></detail-title>
    <div class="ticket-info">
      {{ ticketInfo }}
    </div>
  </div>
</template>

<script>
import DetailTitle from './Title.vue';

export default {
  name: 'DetailTicketInfo',
  components: {
    DetailTitle
  },
  props: {
    ticketInfo: {
      type: String,
      default () {
        return '加载中...'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';

.ticket-info-bd {
  @include flex-column;
  margin-top: .1rem;
  background-color: #fff;

  .ticket-info {
    padding: .1rem .15rem;
    color: $defaultTextColor;
    font-size: .14rem;
    line-height: .18rem;
    text-indent: 2em;
  }
}
</style>
