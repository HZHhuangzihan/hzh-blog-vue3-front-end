<template>
  <div class="hzh-time-line">
    <div class="sky">
      <div class="cloud_one"></div>
      <div class="cloud_two"></div>
    </div>

    <div class="train">
      <div class="engine-front">
        <div class="chimney">
          <div class="smoke"></div>
          <div class="smoke smoke-2"></div>
          <div class="smoke smoke-3"></div>
          <div class="smoke smoke-4"></div>
        </div>
      </div>

      <div class="engine-body"></div>

      <div class="compartment">
        <div class="compartment-window"></div>
      </div>

      <div class="compartment compartment-two">
        <div class="compartment-window"></div>
      </div>

      <div class="compartment compartment-three">
        <div class="compartment-window"></div>
      </div>

      <div class="wheel-holder">
        <div class="wheel"></div>
        <div class="wheel wheel-2">
          <div class="wheel-joint"></div>
          <div class="wheel-joint wheel-joint-2"></div>
        </div>
        <div class="wheel wheel-3"></div>
        <div class="wheel wheel-4"></div>
        <div class="wheel wheel-5"></div>
        <div class="wheel wheel-6"></div>
        <div class="wheel wheel-7"></div>
        <div class="wheel wheel-8"></div>
        <div class="wheel wheel-9"></div>
      </div>
    </div>

    <div class="UrlCardList TimeLineCardList">
      <div v-for="(Item, Index) in hzhTimeLineList" v-bind:key="Index">
        <div class="TimeLineTr" v-if="Index % 2 == 0">
          <div class="TimeLineTdLeft"></div>
          <div class="TimeLineTdCenter"></div>
          <div class="TimeLineTdRight">
            <div class="BubbleRight">
              <span class="TimeLineTime">{{ Item.CreateDate }}</span>{{ Item.TextContent }}
            </div>
          </div>
        </div>
        <div class="TimeLineTr" v-if="Index % 2 != 0">
          <div class="TimeLineTdLeft">
            <div class="Bubble">
              <span class="TimeLineTime">{{ Item.CreateDate }}</span>{{ Item.TextContent }}
            </div>
          </div>
          <div class="TimeLineTdCenter"></div>
          <div class="TimeLineTdRight"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { hzhFetchTimeLine } from "@/apis";

export default {
  name: "HzhTimeLine",
  data() {
    return {
      hzhTimeLineList: {
        type: [String, String]
      },
    };
  },
  methods: {
    hzhFetchTimeLine() {
      hzhFetchTimeLine()
        .then((res) => {
          this.hzhTimeLineList = res.data || [];
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.hzhFetchTimeLine();
  }
};
</script>

<style scoped lang="less">
@import "@/assets/css/hzh-base.less";

.hzh-time-line {
  width: 100vw;
  height: 78vh;

  .sky {
    top: 5rem;
    height: 63%;
    width: 100%;
    position: relative;
    animation: movement 50s ease-out 0s infinite normal none;
    overflow: hidden;
    background-image:
      radial-gradient(closest-side, #65b7ff, #b2eaff);
    background-size:
      130vmax 130vmax,
      80vmax 80vmax,
      90vmax 90vmax,
      110vmax 110vmax,
      90vmax 90vmax,
      40vmax 40vmax,
      90vmax 90vmax,
      150vmax 150vmax;
    background-position:
      -80vmax -80vmax,
      60vmax 60vmax,
      10vmax 10vmax,
      -30vmax -30vmax,
      50vmax 50vmax,
      30vmax 30vmax,
      -20vmax -20vmax,
      -40vmax -40vmax;

    .cloud_one {
      background: url('../assets/img/cloud_one.webp') no-repeat;
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      animation: cloudOne 2s linear 0s infinite normal none;
    }

    .cloud_two {
      background: url('../assets/img/cloud_two.webp') no-repeat;
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      animation: cloudTwo 10s linear 0s infinite normal none;
    }

    @keyframes movement {

      0%,
      100% {
        background-size:
          130vmax 130vmax,
          80vmax 80vmax,
          90vmax 90vmax,
          110vmax 110vmax,
          90vmax 90vmax,
          40vmax 40vmax,
          90vmax 90vmax,
          150vmax 150vmax;
        background-position:
          -80vmax -80vmax,
          60vmax 60vmax,
          10vmax 10vmax,
          -30vmax -30vmax,
          50vmax 50vmax,
          30vmax 30vmax,
          -20vmax -20vmax,
          -40vmax -40vmax;
      }

      25% {
        background-size:
          150vmax 150vmax,
          100vmax 100vmax,
          110vmax 110vmax,
          130vmax 130vmax,
          110vmax 110vmax,
          60vmax 60vmax,
          110vmax 110vmax,
          180vmax 180vmax;
        background-position:
          -60vmax -60vmax,
          80vmax 80vmax,
          30vmax 30vmax,
          -10vmax -10vmax,
          70vmax 70vmax,
          50vmax 50vmax,
          20vmax 20vmax,
          -20vmax -20vmax;
      }

      50% {
        background-size:
          170vmax 170vmax,
          120vmax 120vmax,
          130vmax 130vmax,
          150vmax 150vmax,
          130vmax 130vmax,
          80vmax 80vmax,
          130vmax 130vmax,
          200vmax 200vmax;
        background-position:
          -40vmax -40vmax,
          100vmax 100vmax,
          50vmax 50vmax,
          10vmax 10vmax,
          90vmax 90vmax,
          70vmax 70vmax,
          40vmax 40vmax,
          20vmax 20vmax;
      }

      75% {
        background-size:
          190vmax 190vmax,
          140vmax 140vmax,
          150vmax 150vmax,
          170vmax 170vmax,
          150vmax 150vmax,
          100vmax 100vmax,
          150vmax 150vmax,
          220vmax 220vmax;
        background-position:
          -20vmax -20vmax,
          120vmax 120vmax,
          70vmax 70vmax,
          30vmax 30vmax,
          50vmax 50vmax,
          90vmax 90vmax,
          60vmax 60vmax,
          40vmax 40vmax;
      }
    }

    @keyframes cloudOne {
      0% {
        transform: translateX(-80%);
      }

      100% {
        transform: translateX(80%);
        ;
      }
    }

    @keyframes cloudTwo {
      0% {
        transform: translateX(-80%);
      }

      100% {
        transform: translateX(80%);
        ;
      }
    }

    .train {
      bottom: 12.6rem;
      height: 10rem;
      position: absolute;
      left: 100%;
      width: 44rem;
      z-index: 1;
    }

    .engine-front,
    .engine-front::before,
    .engine-front::after {
      background: #0f0f0f;
      background: linear-gradient(0deg, #0f0f0f, #262626, #0f0f0f);
      border: 0.1rem solid rgba(255, 255, 255, 0.15);
      border-radius: 50% 0 0 50%;
      border-right: none;
    }

    .engine-front {
      animation: body-upDown 0.3s infinite;
      border-radius: 0.5rem 0 0 0.5rem;
      bottom: 1.4rem;
      height: 4.6rem;
      left: 0;
      position: absolute;
      width: 8rem;
    }

    .engine-front::before,
    .engine-front::after {
      content: "";
      position: absolute;
      height: 70%;
      left: -0.9rem;
      top: 50%;
      transform: translate(0, -50%);
      width: 0.8rem;
    }

    .engine-front::after {
      height: 40%;
      left: -1.4rem;
      width: 0.5rem;
    }
  }

  .chimney {
    background: #990000;
    height: 2.2rem;
    left: 2.5rem;
    position: absolute;
    top: -2.3rem;
    width: 1.7rem;

    .chimney::before,
    .chimney::after {
      content: "";
      position: absolute;
    }

    .chimney::before {
      animation: up-down 0.3s infinite;
      border-bottom: none;
      border-left: 0.5rem solid transparent;
      border-right: 0.5rem solid transparent;
      border-top: 0.8rem solid orange;
      left: 50%;
      top: -0.9rem;
      transform: translate(-50%, 0);
      width: 160%;
    }

    .smoke {
      animation: move-smoke 0.4s linear infinite;
      background: rgba(255, 255, 255, 0.8);
      border-radius: 50%;
      height: 1.4rem;
      left: 0.2rem;
      position: absolute;
      top: -1.5rem;
      width: 0.8rem;
      z-index: -1;

      .smoke-2 {
        animation-delay: 0.1s;
        left: 0.4rem;
      }

      .smoke-3 {
        animation-delay: 0.2s;
        left: 0.6rem;
      }

      .smoke-4 {
        left: 0.8rem;
      }
    }
  }

  .engine-body {
    animation: body-upDown 0.3s 0.1s infinite;
    background: #b30000;
    background: linear-gradient(0deg, #330000, red, #990000);
    border-radius: 0 0 0.4rem 0;
    bottom: 1.4rem;
    height: 7rem;
    left: 8rem;
    position: absolute;
    width: 5rem;
  }

  .engine-body::before,
  .engine-body::after {
    content: "";
    left: 50%;
    position: absolute;
    transform: translate(-50%, 0);
  }

  .engine-body::before {
    animation: up-down 0.3s 0.2s infinite;
    background: #660000;
    background: linear-gradient(0deg, #660000, #990000, #660000);
    border-radius: 50% 50% 0 0;
    height: 1.2rem;
    top: -1.2rem;
    width: 130%;
  }

  .engine-body::after {
    background: #b3e0f2;
    border-radius: 0.2rem;
    height: 40%;
    top: 1rem;
    width: 45%;
  }

  .wheel::before,
  .wheel::after {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .wheel-holder {
    height: 2.8rem;
    bottom: 0;
    position: absolute;
    width: 100%;

    .wheel {
      animation: rotate 2s linear infinite;
      background: orange;
      border: 0.3rem solid rgba(0, 0, 0, 0.6);
      border-radius: 50%;
      height: 2.8rem;
      left: 1rem;
      position: absolute;
      width: 2.8rem;
    }

    .wheel-2 {
      left: 4.5rem;
    }

    .wheel-3 {
      border-width: 0.5rem;
      height: 3.8rem;
      left: 8.7rem;
      top: -1.1rem;
      width: 3.8rem;
    }

    .wheel-4 {
      left: 15.7rem;
    }

    .wheel-5 {
      left: 19.5rem;
    }

    .wheel-6 {
      left: 25.7rem;
    }

    .wheel-7 {
      left: 29.5rem;
    }

    .wheel-8 {
      left: 35.7rem;
    }

    .wheel-9 {
      left: 39.5rem;
    }
  }

  .wheel::before,
  .wheel::after {
    content: "";
    position: absolute;
  }

  .wheel::before {
    background: rgba(0, 0, 0, 0.3);
    height: 86%;
    width: 0.2rem;
  }

  .wheel::after {
    background: #996300;
    background: -webkit-radial-gradient(circle at center, #b37400 30%, #996300 30%);
    background: -moz-radial-gradient(circle at center, #b37400 30%, #996300 30%);
    background: -o-radial-gradient(circle at center, #b37400 30%, #996300 30%);
    background: -ms-radial-gradient(circle at center, #b37400 30%, #996300 30%);
    background: radial-gradient(circle at center, #b37400 30%, #996300 30%);
    border-radius: 50%;
    height: 40%;
    width: 40%;
  }

  .compartment {
    animation: body-upDown 0.3s infinite;
    background: #186c8e;
    background: -webkit-linear-gradient(#104b63 50%, #1f8dba);
    background: -moz-linear-gradient(#104b63 50%, #1f8dba);
    background: -o-linear-gradient(#104b63 50%, #1f8dba);
    background: -ms-linear-gradient(#104b63 50%, #1f8dba);
    background: linear-gradient(#104b63 50%, #1f8dba);
    border-radius: 0 0 0.3rem 0.3rem;
    bottom: 1.4rem;
    height: 5rem;
    left: 15rem;
    position: absolute;
    width: 8rem;
  }

  .compartment-two {
    animation: body-upDown 0.3s 0.1s infinite;
    left: 25rem;
  }

  .compartment-two .compartment-window::before {
    animation: up-down 0.3s 0.3s infinite;
  }

  .compartment-three {
    animation: body-upDown 0.3s 0.2s infinite;
    left: 35rem;
  }

  .compartment-three .compartment-window::before {
    animation: up-down 0.35s infinite;
  }

  .compartment::before,
  .compartment::after {
    background: black;
    border: 0.4rem solid transparent;
    bottom: 0.4rem;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);
    content: "";
    height: 0.8rem;
    position: absolute;
    width: 0.9rem;
  }

  .compartment::before {
    border-left: 0.4rem solid rgba(255, 255, 255, 0.3);
    left: -0.9rem;
  }

  .compartment::after {
    border-right: 0.4rem solid rgba(255, 255, 255, 0.3);
    left: -2rem;
  }

  .compartment-window {
    background: #1f8dba;
    background: -moz-linear-gradient(90deg, transparent 0.8rem, skyblue 0.8rem) left/2.4rem 100%;
    background: -webkit-linear-gradient(90deg, transparent 0.8rem, skyblue 0.8rem) left/2.4rem 100%;
    background: -o-linear-gradient(90deg, transparent 0.8rem, skyblue 0.8rem) left/2.4rem 100%;
    background: -ms-linear-gradient(90deg, transparent 0.8rem, skyblue 0.8rem) left/2.4rem 100%;
    background: linear-gradient(90deg, transparent 0.8rem, skyblue 0.8rem) left/2.4rem 100%;
    height: 40%;
    position: absolute;
    top: 0.7rem;
    width: 100%;
  }

  .compartment-window::before,
  .compartment-window::after {
    content: "";
    position: absolute;
  }

  .compartment-window::before {
    animation: up-down 0.3s 0.1s infinite;
    background: #104b63;
    border-radius: 50% 50% 0 0;
    height: 0.6rem;
    left: 50%;
    top: -1.4rem;
    transform: translate(-50%, 0);
    width: 110%;
  }

  @keyframes up-down {

    0%,
    100% {
      transform: translate(-50%, 0);
    }

    50% {
      transform: translate(-50%, -0.3rem);
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(-360deg);
    }
  }

  @keyframes move-train {
    100% {
      transform: translateX(-154rem);
    }
  }

  @keyframes body-upDown {

    0%,
    100% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(-0.2rem);
    }
  }

  @keyframes move-smoke {
    0% {
      -webkit-filter: blur(0);
      -moz-filter: blur(0);
      -o-filter: blur(0);
      -ms-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }

    50% {
      -webkit-filter: blur(0.2rem);
      -moz-filter: blur(0.2rem);
      -o-filter: blur(0.2rem);
      -ms-filter: blur(0.2rem);
      filter: blur(0.2rem);
      opacity: 0.6;
      transform: translate(0, -3rem) scale(2);
    }

    100% {
      -webkit-filter: blur(0.3rem);
      -moz-filter: blur(0.3rem);
      -o-filter: blur(0.3rem);
      -ms-filter: blur(0.3rem);
      filter: blur(0.3rem);
      opacity: 0;
      transform: translate(2.5rem, -6rem) scale(3);
    }
  }

  @keyframes wheel-joint {
    100% {
      transform: rotate(360deg);
    }
  }
}

.TimeLineCardList {
  position: absolute;
  top: 30rem;
  z-index: 998;

  .TimeLineTr {
    .hzh-flex(center);
    position: relative;

    .TimeLineTdLeft {
      flex: 1;
      padding-right: 2rem;
      position: relative;

      .Bubble {
        margin-right: 1rem;
        margin: 1rem 0;
        position: relative;
        background-color: @hzhWhite;
        border-radius: 5px;
        padding: 1rem;
        border: 1px solid @hzhThemeColor;

        &:before {
          content: "";
          border: 8px solid transparent;
          width: 0;
          height: 0;
          display: inline-block;
          border-left: 8px solid @hzhThemeColor;

          right: -16px;
          position: absolute;
          top: 1.3rem;
        }

        &:after {
          content: "";
          width: 1rem;
          height: 1rem;
          display: inline-block;
          background-color: @hzhThemeColor;
          border-radius: 100%;
          border: 0.25rem solid @hzhWhite;

          position: absolute;
          right: -2.90rem;
          top: 1rem;
          z-index: 998;
        }

        .TimeLineTime {
          color: @hzhThemeColor;
          margin-right: 1rem;
        }
      }
    }

    .TimeLineTdCenter {
      width: 2px;
      height: 100%;
      background-color: @hzhThemeColor;
      height: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
    }

    .TimeLineTdRight {
      padding-left: 2rem;
      flex: 1;

      .BubbleRight {
        margin-right: 1rem;
        margin: 1rem 0;
        position: relative;
        background-color: @hzhWhite;
        border-radius: 5px;
        padding: 1rem;
        border: 1px solid @hzhThemeColor;
      }

      .BubbleRight:before {
        content: "";
        border: 8px solid transparent;
        width: 0;
        height: 0;
        display: inline-block;
        border-right: 8px solid @hzhThemeColor;
        left: -16px;
        position: absolute;
        top: 1.3rem;
      }

      .BubbleRight:after {
        content: "";
        width: 1rem;
        height: 1rem;
        display: inline-block;
        background-color: @hzhWhite;
        border-radius: 100%;
        border: 0.2rem solid @hzhThemeColor;

        position: absolute;
        left: -2.7rem;
        top: 1rem;

        z-index: 1000;
      }
    }
  }
}


.FriendUrlBac {
  height: 83vh;
  background: transparent;
}

.FriendUrlTitle {
  margin: auto;
  padding: 9rem 0 0 0;
  width: 80%;
  height: 20%;
  text-align: center;
}

.TimeLIneTitle {
  margin-top: 12vh;
}

.FriendUrlTitleText {
  color: @hzhWhite;
  font-size: 2.2rem;
  font-family: Helvetica, STHeiti STXihei, Microsoft JhengHei, Microsoft YaHei,
    Tohoma, Arial;
}

.FriendUrlTitleSummary {
  color: black;
  font-size: 1rem;
  font-family: Helvetica, STHeiti STXihei, Microsoft JhengHei, Microsoft YaHei,
    Tohoma, Arial;
  margin-top: 1rem;
}

.FriendUrlBac {
  height: 85vh;
  background: transparent;
  z-index: 100;
}
</style>
