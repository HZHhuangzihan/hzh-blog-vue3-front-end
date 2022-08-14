<template>
    <div class="hzh-main">
        <router-view></router-view>
        <hzh-back-top></hzh-back-top>
    </div>
</template>
    
<script>
import HzhBackTop from '@/components/hzh-back-top.vue';

export default {
    name: "HzhMain",
    data() {
        return {
            minHeight: 600,
        }
    },
    components: {
        HzhBackTop
    }
}
</script>
    
<style lang="less">
@import '@/assets/css/hzh-base.less';

.hzh-main {
    min-height: -moz-calc(100vh - 5rem);
    min-height: -webkit-calc(100vh - 5rem);
    min-height: calc(100vh - 5rem);
}
</style>