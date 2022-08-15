<template>
    <transition name="fade" mode="out-in">
        <div class="hzh-lab-list">
            <div class="hzh-lab-tr">
                <div class="hzh-lab-td" v-for="(item, i) in hzhLaboratoryList" v-bind:key="i">
                    <!--@click="UpdateRouter('BlogDetail', item)-->
                    <div class="hzh-lab-cover">
                        <img v-bind:src="item.hzhArticleCover" v-if="item.hzhArticleCover">
                    </div>
                    <div class="hzh-lab-titlewrap">
                        <div class="hzh-lab-title">{{ item.hzhTitle }}</div>
                    </div>
                    <div class="hzh-lab-summary">{{ item.hzhSummary }}</div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { hzhFetchLaboratory } from '@/apis'

export default {
    name: "HzhMyLaboratory",
    data() {
        return {
            hzhLaboratoryList: []
        }
    },
    methods: {
        hzhFetchLaboratory() {
            hzhFetchLaboratory()
                .then((res) => {
                    this.hzhLaboratoryList = res.data || [];
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    },
    mounted() {
        this.hzhFetchLaboratory();
    }
}
</script>

<style scoped lang="less">
@import "@/assets/css/hzh-base.less";

@media only screen and (min-device-width: 768px) {

    .hzh-lab-list {
        width: 100vw;
        margin: 1rem auto 0;
        min-height: 29rem;
        background-color: @hzhWhite;
        padding: 2rem 2rem 2rem;
        background-color: unset;
        padding: 0;
        display: block;
        z-index: 999;

        .hzh-lab-tr {
            .hzh-flex('center');
            flex-wrap: wrap;
            position: relative;
            min-height: 70vh;
            margin-top: 1rem;
            top: 5rem;

            .hzh-lab-td {
                flex: 1;
                margin: 0.5rem;
                padding: 0;
                background-color: @hzhWhite;
                cursor: pointer;
                min-width: 20%;
                top: 5rem;

                &:hover {
                    transform: scale(0.95);
                    transition: all 0.3s;
                }

                .hzh-lab-cover {
                    height: 180px;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

                .hzh-lab-summary {
                    color: #777;
                    padding: 0 1rem 1rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .hzh-lab-titlewrap {
                    .hzh-flex(center);
                    padding: 1.2rem 1rem 1rem 1rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;


                    .hzh-lab-title {
                        height: 1.5rem;
                        line-height: 1.5rem;
                        font-size: 1.1rem;
                    }
                }
            }
        }
    }
}

@media only screen and (max-device-width: 768px) {

    .UrlCardList {
        background-color: @hzhWhite;
        background-color: unset;
    }

    .UrlCardTd {
        flex: 1;
        width: 100%;
        margin: 1rem 1rem 0rem 1rem;
        padding: 1rem;
        background-color: @hzhWhite
    }

    .UrlCardTr {
        .hzh-flex('center');
        flex-wrap: wrap;
        position: relative;
        min-height: 70vh;
    }

    .UrlCardTr {
        .hzh-flex('center');
        flex-wrap: wrap;
        position: relative;
        min-height: 70vh;
    }
}
</style>
