<template>
    <transition name="fade" mode="out-in">
        <div class="UrlCardList FriendUrlCard">
            <div class="UrlCardTr">
                <div class="UrlCardTd" v-for="(item, i) in hzhLaboratoryList" v-bind:key="i">
                    <!--@click="UpdateRouter('BlogDetail', item)-->
                    <div class="lab-cover">
                        <img v-bind:src="item.hzhArticleCover" v-if="item.hzhArticleCover">
                    </div>
                    <div class="UrlIconName">
                        <div class="UrlName">{{ item.Title }}</div>
                    </div>
                    <div class="UrlSummary">{{ item.Summary }}</div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { hzhFetchLaboratory } from '@/apis'

export default {
    name: "HzhMyLaboratory",
    // components: {
    //   Pagination: Pagination
    // },
    data() {
        return {
            hzhLaboratoryList: []
        }
    },
    //   return {
    //     Wrapper: false,
    //     FriendUrlNickName: '',
    //     FriendUrlAdress: '',
    //     FriendUrlDescript: '',
    //     FriendsUrlList: '',
    //     FriendUrlIcoUrl: '',
    //     // 弹框显隐动画
    //     FadeAnimate: false,

    //     // 文章底线
    //     AticleBottom: false,

    //     FriendUrlPlaceholder: true
    //   }
    // },
    // methods: {
    //   //初始化友链列表
    //   GetFriendUrlList: function () {
    //     var That = this,
    //       mvpUrl = [],//记录有标记的数据
    //       newArray;

    //     this.SQFrontAjax({
    //       Url: '/api/ArticleRead/foreend',
    //       UploadData: {
    //         PagnationData: {
    //           Skip: 0,
    //           Limit: 8
    //         },
    //         ArticleTag: '试验田',
    //         orderType:{  // 以优先级排序，需要传入此字段及值
    //           order:1
    //         }
    //       },
    //       Success: function (data) {
    //         That.FriendsUrlList = data;
    //       }
    //     });
    //   },
    // 切换路由
    //   UpdateRouter: function (RouterName, articleMessage) {
    //     if (articleMessage._id) {
    //       this.$router.push({
    //         name: RouterName,
    //         query: {
    //           _id:articleMessage._id,
    //           Title:articleMessage.Title,
    //           from:'试验田'
    //         }
    //       });
    //     } else {
    //       this.bus.$emit('TopBar', {
    //         Active: 1,
    //         MobileMenuActive: 1
    //       });
    //       this.$router.push({
    //         name: RouterName
    //       });
    //     }
    //   },
    // },
    // mounted: function () {
    //   this.GetFriendUrlList();
    //   // 切换Topbar高亮
    //   Store.commit("ChangeActive", 3);

    //   // 创建日志
    //   this.createLog({
    //     moduleType:'menu',
    //     operateType:'选择菜单',
    //     operateContent:'试验田'
    //   });
    // },
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

    .UrlCardList {
        width: 100vw;
        margin: 1rem auto 0;
        min-height: 29rem;
        background-color: @hzhWhite;
        padding: 2rem 2rem 2rem;
        background-color: unset;
        padding: 0;
        display: block;
        z-index: 999;

        .UrlCardTr {
            .hzh-flex('center');
            flex-wrap: wrap;
            position: relative;
            min-height: 70vh;
            margin-top: 1rem;
            top: 5rem;

            .UrlCardTd {
                flex: 1;
                margin: 0.5rem;
                padding: 0;
                background-color: @hzhWhite;
                cursor: pointer;
                min-width: 20%;
                top: 5rem;

                img {
                    width: 100%;
                    height: 100%;
                }

                &:hover {
                    transform: scale(0.95);
                    transition: all 0.3s;
                }
            }
        }
    }
}

@media only screen and (max-device-width: 768px) {

    .UrlCardList {
        background-color: @hzhWhite;
    }

    .FriendUrlCard {
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

.lab-cover {
    height: 180px;
}

.lab-cover img {
    width: 100%;
    height: 100%;
}

.UrlIconName {
    .hzh-flex(center);
    padding: 1.2rem 1rem 1rem 1rem;
}

.UrlIconName img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
}

.UrlName {
    height: 1.5rem;
    line-height: 1.5rem;
    font-size: 1.1rem;
}

.UrlSummary {
    color: #777;
    padding: 0 1rem 1rem;
}

@keyframes FadeIn {
    0% {
        transform: scale(0.9)
    }

    20% {
        transform: scale(0.925)
    }

    60% {
        transform: scale(0.95)
    }

    80% {
        transform: scale(0.975)
    }

    100% {
        transform: scale(1)
    }
}

@keyframes FadeOut {
    0% {
        transform: scale(1)
    }

    20% {
        transform: scale(0.975)
    }

    60% {
        transform: scale(0.95)
    }

    80% {
        transform: scale(0.925)
    }

    100% {
        transform: scale(0.9)
    }
}
</style>
