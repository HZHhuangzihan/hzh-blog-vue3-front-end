<template>
       <div class="hzh-my-friend">
              <div class="hzh-site-content">
                     <hzh-section-title>
                            <div class="hzh-friend-header">
                                   <div class="hzh-title">友链</div>
                                   <div class="hzh-apply">
                                          <router-link to="/about#Guestbook">+ 加入</router-link>
                                   </div>
                            </div>
                     </hzh-section-title>
                     <div class="hzh-statement">
                            <p>
                                   首先将需要接入本博客站点，然后给我
                                   <router-link to="/about#Guestbook">留言</router-link>
                                   提供您站点的如下信息：
                            </p>
                            <hzh-quote>
                                   <p>站点名称：{{ hzhWebsiteInfo.name }}</p>
                                   <p>站点链接：{{ hzhWebsiteInfo.domain }}</p>
                                   <p>简短描述：{{ hzhWebsiteInfo.desc }}</p>
                            </hzh-quote>
                            <P>接入成功后将会以邮件的方式通知。</P>
                     </div>
                     <hr />
                     <div class="hzh-friend-list hzhAnimate">
                            <div class="hzh-friend-item" v-for="item in hzhList" :key="item.hzhId">
                                   <a target="_blank" :href="item.hzhPath">
                                          <div class="hzh-site-name">{{ item.hzhSiteName }}</div>
                                          <div class="hzh-site-detail">{{ item.hzhDesc }}</div>
                                   </a>
                            </div>
                     </div>
              </div>
       </div>
</template>
    
<script>
import HzhQuote from '@/components/hzh-quote.vue';
import HzhSectionTitle from '@/components/hzh-section-title.vue';

import { hzhFetchFriend } from "@/apis";

export default {
       name: "HzhMyFriend",
       data() {
              return {
                     hzhWebsiteInfo: {},
                     hzhList: [],
              };
       },
       components: {
              HzhQuote,
              HzhSectionTitle
       },
       methods: {
              hzhFetchFriend() {
                     hzhFetchFriend()
                            .then((res) => {
                                   this.hzhList = res.data || [];
                            })
                            .catch((err) => {
                                   console.log(err);
                            });
              },
              hzhGetWebSiteInfo() {
                     this.$store.dispatch("hzhGetSiteInfo").then((data) => {
                            this.hzhWebsiteInfo = data;
                     });
              },
       },
       mounted() {
              this.hzhGetWebSiteInfo();
              this.hzhFetchFriend();
       }
};
</script>
    
<style lang="less">
@import '@/assets/css/hzh-base.less';

.hzh-my-friend {
       padding-top: 5rem;

       h1.hzh-section-title {

              .hzh-friend-header {
                     width: 100%;
                     display: flex;
                     justify-content: space-between;
                     align-items: center;
                     margin-top: 5rem;
                     font-weight: 400;

                     .hzh-title {
                            font-size: 20px;
                     }

                     .hzh-apply:hover {
                            color: @hzhHoverBlue;
                     }
              }
       }

       .hzh-statement {
              margin: 3.75rem 0 1.25rem 0;

              p {
                     line-height: 2rem;

                     a {
                            color: @hzhHoverBlue;
                     }
              }

       }

       hr {
              margin: 2.5rem 0;
              border: 0;
              height: 1px;
              background-image: linear-gradient(to right,
                            rgba(0, 0, 0, 0),
                            @hzhKleinBlue,
                            rgba(0, 0, 0, 0));
       }

       .hzh-friend-list {
              width: 100%;

              .hzh-friend-item {
                     display: inline-block;
                     width: 30%;
                     margin: 0 5% 1.25rem 0;
                     padding: 0.625rem 1.875rem;
                     border: 1px solid #ececec;
                     border-radius: 3px;

                     &:hover {
                            box-shadow: 0 2px 0.75rem 0 rgba(0, 0, 0, 0.1);
                     }

                     &:nth-of-type(3n) {
                            margin-right: 0;
                     }

                     .hzh-site-name {
                            color: #8fd0cc;
                            border-bottom: 1px dotted #ececec;
                     }

                     .hzh-site-detail {
                            font-size: 13px;
                            padding-top: 0.625rem;
                     }
              }

              .hzh-friend-item,
              .hzh-site-name,
              .hzh-site-detail {
                     white-space: nowrap;
                     overflow: hidden;
                     text-overflow: ellipsis;
                     padding-bottom: 0.625rem;
                     line-height: 1.5rem;
              }
       }
}

@media (max-width: 800px) {
       .hzh-my-friend {
              padding-top: 5rem;

              .hzh-friend-header {
                     margin-top: 0;
              }

              .hzh-friend-item {

                     &:nth-of-type(3n) {
                            margin-right: 0;
                     }
              }

       }
}

@media (max-width: 600px) {
       .hzh-my-friend {
              padding-top: 5rem;

              .hzh-friend-list {
                     flex-wrap: wrap;

                     .hzh-friend-item {
                            display: block;
                            width: 100%;
                     }
              }
       }
}
</style>