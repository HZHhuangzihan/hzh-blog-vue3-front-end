<template>
  <div id="app" v-cloak>
    <hzh-my-loading></hzh-my-loading>
    <hzh-header></hzh-header>
    <hzh-main></hzh-main>
    <hzh-footer></hzh-footer>
  </div>
</template>

<script>
import HzhMyLoading from './views/hzh-my-loading.vue'
import HzhHeader from '@/containers/hzh-header.vue'
import HzhMain from '@/containers/hzh-main.vue'
import HzhFooter from '@/containers/hzh-footer.vue'

export default {
  name: "app",
  components: {
    HzhMyLoading,
    HzhHeader,
    HzhMain,
    HzhFooter
  },
}
</script>

<style lang="less">
@import '@/assets/css/hzh-base.less';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
