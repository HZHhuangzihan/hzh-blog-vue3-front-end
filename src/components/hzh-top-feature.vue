<template>
    <div class="hzh-top-feature" v-if="!hzhHideSlogan">
        <hzh-section-title>
            <div style="display: flex; align-items: flex-end;">
                聚焦<hzh-small-ico></hzh-small-ico>
            </div>
        </hzh-section-title>
        <div class="hzh-feature-content">
            <div class="hzh-feature-item" v-for="item in hzhFeatures" :key="item.title">
                <hzh-feature :data="item"></hzh-feature>
            </div>
        </div>
    </div>
</template>

<script>
import { hzhFetchFocus } from "@/apis";

import HzhSectionTitle from '@/components/hzh-section-title.vue'
import HzhFeature from '@/components/hzh-feature.vue'
import HzhSmallIco from '@/components/hzh-small-ico.vue'

export default {
    name: "HzhTopFeature",
    data() {
        return {
            hzhFeatures: [],
        }
    },
    components: {
        HzhSectionTitle,
        HzhFeature,
        HzhSmallIco,
    },
    methods: {
        hzhFetchFocus() {
            hzhFetchFocus()
                .then((res) => {
                    this.hzhFeatures = res.data || [];
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },
    mounted() {
        this.hzhFetchFocus();
    },
}
</script>

<style scoped lang="less">
@import '@/assets/css/hzh-base.less';

.hzh-top-feature {
    width: 100%;
    height: auto;
    margin-top: 1.875rem;

    .hzh-feature-content {
        margin-top: 0.625rem;
        display: flex;
        justify-content: space-between;
        position: relative;

        .hzh-feature-item {
            width: 32.9%;
        }
    }
}

@media (max-width: 1050px) {
    .hzh-top-feature {
        display: none;
    }
}
</style>