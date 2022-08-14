<template>
  <div class="hzh-my-home">
    <hzh-swiper></hzh-swiper>
    <hzh-site-content></hzh-site-content>
  </div>
</template>

<script>
import HzhSwiper from '@/containers/hzh-swiper.vue'
import HzhSiteContent from '@/containers/hzh-site-content.vue';

export default {
  name: "HzhMyHome",
  components: {
    HzhSwiper,
    HzhSiteContent
  }
}
</script>

<style>

</style>