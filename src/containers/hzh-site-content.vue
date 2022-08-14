<template>
    <div class="hzh-site-content hzhAnimate">
        <hzh-top-feature></hzh-top-feature>

        <main class="hzh-site-main" :class="{ 'hzhSearch': hzhHideSlogan }">
            <hzh-section-title v-if="!hzhHideSlogan">推荐</hzh-section-title>
            <template v-for="item in hzhPostList">
                <hzh-post :hzhPost="item"></hzh-post>
            </template>
        </main>

        <div class="hzh-more" v-show="hzhHasNextPage">
            <div class="hzh-more-btn" @click="hzhLoadMore">加载更多</div>
        </div>
    </div>
</template>

<script>
import { hzhFetchList } from "@/apis";

import HzhPost from '@/containers/hzh-post.vue';
import HzhSectionTitle from '@/components/hzh-section-title.vue'
import HzhFeature from '@/components/hzh-feature.vue'
import HzhSmallIco from '@/components/hzh-small-ico.vue'
import HzhTopFeature from "@/components/hzh-top-feature.vue";

export default {
    name: "HzhSiteContent",
    data() {
        return {
            hzhPostList: [],
            hzhCurrPage: 1,
            hzhHasNextPage: false,
        }
    },
    components: {
        HzhPost,
        HzhSectionTitle,
        HzhFeature,
        HzhSmallIco,
        HzhTopFeature
    },
    methods: {
        hzhFetchList() {
            hzhFetchList()
                .then((res) => {
                    this.hzhPostList = res.data.hzhItems || [];
                    this.hzhCurrPage = res.data.hzhPage;
                    this.hzhHasNextPage = res.data.hzhHasNextPage;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        hzhLoadMore() {
            hzhFetchList({ hzhPage: this.hzhCurrPage + 1 }).then((res) => {
                this.hzhPostList = this.hzhPostList.concat(res.data.hzhItems || []);
                this.hzhCurrPage = res.data.hzhPage;
                this.hzhHasNextPage = res.data.hzhHasNextPage;
            });
        },
    },
    mounted() {
        this.hzhFetchList();
    },
}
</script>

<style scoped lang="less">
@import '@/assets/css/hzh-base.less';

.hzh-site-main {
    padding-top: 5rem;

    &.hzhSearch {
        padding-top: 0;
    }
}

.hzh-more {
    margin: 3.125rem 0;

    .hzh-more-btn {
        width: 6.25rem;
        height: 2.5rem;
        line-height: 2.5rem;
        text-align: center;
        color: #adadad;
        border: 0.0625rem solid #adadad;
        border-radius: 1.25rem;
        margin: 0 auto;
        cursor: pointer;
    }

    .hzh-more-btn:hover {
        color: @hzhHoverBlue;
        border: 0.0625rem dashed @hzhHoverBlue;
    }
}

@media (max-width: 1050px) {
    .hzh-site-main {
        padding-top: 2.5rem;
    }

    .hzh-site-content .hzh-search-result {
        margin-bottom: 1.25rem;
        font-size: 16px;
    }
}
</style>