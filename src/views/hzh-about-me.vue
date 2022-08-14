<template>
  <transition name="Fade" mode="out-in">
    <div>
      <div class="hzh-big-block main-text">
        <div class="hzh-titl-font-line">关于博主</div>
        <p>
          <i class="iconfont icon-person AboutMeIcon" style="color: #49a9ee"></i>博主名字叫黄子涵，94年人，电子信息工程本科毕业，从事前端开发岗位。
        </p>
        <p>
          <i class="iconfont icon-aihao1 AboutMeIcon" style="color: #f46e65"></i>兴趣：编码、篮球、音乐
        </p>
        <p>
          <i class="iconfont icon-tool AboutMeIcon" style="color: #3db8c1"></i>熟悉的技术有：HTML、CSS、JavaScript、Vue.js
        </p>
        <h1 class="hzh-applet-title">本站专属小程序</h1>
        <img src="../assets/img/hzh-icon-qr.jpg" class="hzh-icon-qr" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
@import "@/assets/css/hzh-base.less";

.hzh-big-block {
  width: 60%;
  margin: 5rem auto;

  .hzh-titl-font-line {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 400;
    color: @hzhDefaultFontColor;
    margin-top: 1rem;
  }

  p {
    margin: 1rem auto;
  }

  .hzh-applet-title {
    font-size: 2rem;
    font-weight: bolder;
    color: red;
  }

  .hzh-icon-qr {
    width: 8rem;
    height: 8rem;
  }
}
</style>