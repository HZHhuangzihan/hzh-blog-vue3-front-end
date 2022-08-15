<template>
  <div class="hzh-footer">
    <div class="hzh-footer-main">
      <div class="hzh-footer-item" v-if="hzhSocials.length">
        <div v-for="item in hzhSocials" :key="item.id">
          <a target="_blank" class="hzh-out-link" :href="item.href"><i class="iconfont" :class="item.icon"></i>{{
              item.title
          }}</a>
        </div>
      </div>
      <div class="hzh-footer-item">
        <div style="font-size: 17px; font-weight: bold">特别鸣谢</div>
        <div>
          <a target="_blank" class="hzh-out-link" href="http://www.dianping.com/shop/G6xzDc5r7yaLW4Km">木辛工作室</a>
        </div>
        <div>
          <a target="_blank" class="hzh-out-link" href="http://www.dianping.com/shop/G350hLdl4aQLPfJy">阿伽西大排档</a>
        </div>
        <div>
          <a target="_blank" class="hzh-out-link" href="https://www.aliyun.com/">阿里云</a>
        </div>
      </div>
      <div class="hzh-footer-item">
        <div>小站已经苟活{{ hzhRunTimeInterval }}</div>
        <div>
          <a target="_blank" class="hzh-out-link" href="#">☞后台管理</a>
        </div>
      </div>
    </div>
    <div class="hzh-copyright">
      Copyright © 2022 by <a target="_blank" class="hzh-out-link" href=""></a>.
      All rights reserved. |
      <a target="_blank" class="hzh-out-link" href="http://www.beian.miit.gov.cn">粤ICP备2021148361号</a>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "HzhFooter",
  data() {
    return {
      hzhSocials: [],
    }
  },
  methods: {
    hzhGetSocial() {
      this.$store.dispatch("hzhGetSocials").then((data) => {
        this.hzhSocials = data;
      });
    }
  },
  computed: {
    hzhRunTimeInterval() {
      return this.$store.state.hzhRunTimeInterval;
    },
  },
  created() {
    this.hzhGetSocial();
    this.$store.dispatch("hzhInitComputeTime");
  },
}
</script>

<style lang="less">
@import '@/assets/css/hzh-base.less';

.hzh-footer {
  bottom: 0;
  padding: 2%;
  border-top: 1px solid #f7f7f7;
  font-size: 13px;
  color: #9c9c9c;
  z-index: 999;

  a.hzh-out-link:hover {
    color: @hzhHoverBlue;
  }

  .hzh-footer-main {
    max-width: 800px;
    margin: 0 auto 20px auto;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;

    .hzh-footer-item {
      flex: 1;

      &>div {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 10px;
      }

      i {
        margin-right: 10px;
      }
    }
  }

  .hzh-copyright {
    text-align: center;
  }
}

@media (max-width: 900px) {

  .hzh-footer-main {
    .hzh-footer-item {
      flex: 1;

      &>div {
        display: flex;
        justify-content: center;

      }

      i {
        margin-right: 10px;
      }
    }
  }
}

@media (max-width: 600px) {
  .hzh-footer {
    .hzh-footer-main {
      display: block;

      .hzh-footer-item {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
      }

      &>div {
        display: flex;
        align-content: center;
      }

    }
  }
}
</style>
