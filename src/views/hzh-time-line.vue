<template>
  <div class="hzh-time-line">
    <div class="hzh-sky">
      <div class="hzh-cloud-one"></div>
      <div class="hzh-cloud-two"></div>
    </div>

    <div class="hzh-train">
      <div class="hzh-engine-front">
        <div class="hzh-chimney">
          <div class="hzh-smoke"></div>
          <div class="hzh-smoke hzh-smoke-2"></div>
          <div class="hzh-smoke hzh-smoke-3"></div>
          <div class="hzh-smoke hzh-smoke-4"></div>
        </div>
      </div>

      <div class="hzh-engine-body"></div>

      <div class="hzh-compartment">
        <div class="hzh-compartment-window"></div>
      </div>

      <div class="hzh-compartment hzh-compartment-two">
        <div class="hzh-compartment-window"></div>
      </div>

      <div class="hzh-compartment hzh-compartment-three">
        <div class="hzh-compartment-window"></div>
      </div>

      <div class="hzh-wheel-holder">
        <div class="hzh-wheel"></div>
        <div class="hzh-wheel hzh-wheel-2">
          <div class="hzh-wheel-joint"></div>
          <div class="hzh-wheel-joint hzh-wheel-joint-2"></div>
        </div>
        <div class="hzh-wheel hzh-wheel-3"></div>
        <div class="hzh-wheel hzh-wheel-4"></div>
        <div class="hzh-wheel hzh-wheel-5"></div>
        <div class="hzh-wheel hzh-wheel-6"></div>
        <div class="hzh-wheel hzh-wheel-7"></div>
        <div class="hzh-wheel hzh-wheel-8"></div>
        <div class="hzh-wheel hzh-wheel-9"></div>
      </div>
    </div>

    <div class="hzh-time-line-card-list">
      <div v-for="(Item, Index) in hzhTimeLineList" v-bind:key="Index">
        <div class="hzh-time-line-tr" v-if="Index % 2 == 0">
          <div class="hzh-time-line-td-left"></div>
          <div class="hzh-time-line-td-center"></div>
          <div class="hzh-time-line-td-right">
            <div class="hzh-bubble-right">
              <span class="hzh-time-line-time">{{ Item.hzhCreateDate }}</span>{{ Item.hzhTextContent }}
            </div>
          </div>
        </div>
        <div class="hzh-time-line-tr" v-if="Index % 2 != 0">
          <div class="hzh-time-line-td-left">
            <div class="hzh-bubble">
              <span class="hzh-time-line-time">{{ Item.hzhCreateDate }}</span>{{ Item.hzhTextContent }}
            </div>
          </div>
          <div class="hzh-time-line-td-center"></div>
          <div class="hzh-time-line-td-right"></div>
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
  padding-top: 5rem;
  z-index: 999;
  display: block;

  .hzh-sky {
    height: 20rem;
    width: 100vw;
    position: relative;
    animation: hzhMovement 50s ease-out 0s infinite normal none;
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

    .hzh-cloud-one {
      background: url('../assets/img/cloud_one.webp') no-repeat;
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      animation: hzhCloudOne 2s linear 0s infinite normal none;

    }

    .hzh-cloud-two {
      background: url('../assets/img/cloud_two.webp') no-repeat;
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      animation: hzhCloudTwo 10s linear 0s infinite normal none;
    }

    @keyframes hzhMovement {

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

    @keyframes hzhCloudOne {
      0% {
        transform: translateX(-80%);
      }

      100% {
        transform: translateX(80%);
        ;
      }
    }

    @keyframes hzhCloudTwo {
      0% {
        transform: translateX(-80%);
      }

      100% {
        transform: translateX(80%);
        ;
      }
    }
  }

  .hzh-train {
    height: 10rem;
    position: absolute;
    top: 18rem;
    left: 20rem;
    width: 44rem;
    z-index: 1;

    .hzh-engine-front {
      animation: hzhBodyUpDown 0.3s infinite;
      border-radius: 0.5rem 0 0 0.5rem;
      bottom: 1.4rem;
      height: 4.6rem;
      left: 0;
      position: absolute;
      width: 8rem;

      &::before,
      &::after {
        content: "";
        position: absolute;
        height: 70%;
        left: -0.9rem;
        top: 50%;
        transform: translate(0, -50%);
        width: 0.8rem;
      }

      &::after {
        height: 40%;
        left: -1.4rem;
        width: 0.5rem;
      }

      &,
      &::before,
      &::after {
        background: #0f0f0f;
        background: linear-gradient(0deg, #0f0f0f, #262626, #0f0f0f);
        border: 0.1rem solid rgba(255, 255, 255, 0.15);
        border-radius: 50% 0 0 50%;
        border-right: none;
      }

      .hzh-chimney {
        background: #990000;
        height: 2.2rem;
        left: 2.5rem;
        position: absolute;
        top: -2.3rem;
        width: 1.7rem;

        &::before,
        &::after {
          content: "";
          position: absolute;
        }

        &::before {
          animation: hzhUpDown 0.3s infinite;
          border-bottom: none;
          border-left: 0.5rem solid transparent;
          border-right: 0.5rem solid transparent;
          border-top: 0.8rem solid orange;
          left: 50%;
          top: -0.9rem;
          transform: translate(-50%, 0);
          width: 160%;
        }

        .hzh-smoke {
          animation: hzhMoveSmoke 0.4s linear infinite;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          height: 1.4rem;
          left: 0.2rem;
          position: absolute;
          top: -1.5rem;
          width: 0.8rem;
          z-index: -1;
        }

        .hzh-smoke-2 {
          animation-delay: 0.1s;
          left: 0.4rem;
        }

        .hzh-smoke-3 {
          animation-delay: 0.2s;
          left: 0.6rem;
        }

        .hzh-smoke-4 {
          left: 0.8rem;
        }
      }
    }

    .hzh-engine-body {
      animation: hzhBodyUpDown 0.3s 0.1s infinite;
      background: #b30000;
      background: linear-gradient(0deg, #330000, red, #990000);
      border-radius: 0 0 0.4rem 0;
      bottom: 1.4rem;
      height: 7rem;
      left: 8rem;
      position: absolute;
      width: 5rem;

      &::before,
      &::after {
        content: "";
        left: 50%;
        position: absolute;
        transform: translate(-50%, 0);
      }

      &::before {
        animation: hzhUpDown 0.3s 0.2s infinite;
        background: #660000;
        background: linear-gradient(0deg, #660000, #990000, #660000);
        border-radius: 50% 50% 0 0;
        height: 1.2rem;
        top: -1.2rem;
        width: 130%;
      }

      &::after {
        background: #b3e0f2;
        border-radius: 0.2rem;
        height: 40%;
        top: 1rem;
        width: 45%;
      }
    }

    .hzh-compartment {
      animation: hzhBodyUpDown 0.3s infinite;
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

      &::before,
      &::after {
        background: black;
        border: 0.4rem solid transparent;
        bottom: 0.4rem;
        box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);
        content: "";
        height: 0.8rem;
        position: absolute;
        width: 0.9rem;
      }

      &::before {
        border-left: 0.4rem solid rgba(255, 255, 255, 0.3);
        left: -0.9rem;
      }

      &::after {
        border-right: 0.4rem solid rgba(255, 255, 255, 0.3);
        left: -2rem;
      }

      .hzh-compartment-window {
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

        &::before,
        &::after {
          content: "";
          position: absolute;
        }

        &::before {
          animation: hzhUpDown 0.3s 0.1s infinite;
          background: #104b63;
          border-radius: 50% 50% 0 0;
          height: 0.6rem;
          left: 50%;
          top: -1.4rem;
          transform: translate(-50%, 0);
          width: 110%;
        }

        &::before {
          animation: hzhUpDown 0.3s 0.3s infinite;
        }
      }
    }

    .hzh-compartment-two {
      animation: hzhBodyUpDown 0.3s 0.1s infinite;
      left: 25rem;

      .hzh-compartment-window {
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

        &::before,
        &::after {
          content: "";
          position: absolute;
        }

        &::before {
          animation: hzhUpDown 0.3s 0.1s infinite;
          background: #104b63;
          border-radius: 50% 50% 0 0;
          height: 0.6rem;
          left: 50%;
          top: -1.4rem;
          transform: translate(-50%, 0);
          width: 110%;
        }

        &::before {
          animation: hzhUpDown 0.3s 0.3s infinite;
        }
      }
    }

    .hzh-compartment-three {
      animation: hzhBodyUpDown 0.3s 0.2s infinite;
      left: 35rem;

      .hzh-compartment-window {
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

        &::before,
        &::after {
          content: "";
          position: absolute;
        }

        &::before {
          animation: hzhUpDown 0.3s 0.1s infinite;
          background: #104b63;
          border-radius: 50% 50% 0 0;
          height: 0.6rem;
          left: 50%;
          top: -1.4rem;
          transform: translate(-50%, 0);
          width: 110%;
        }

        &::before {
          animation: hzhUpDown 0.35s infinite;
        }
      }
    }

    .hzh-wheel-holder {
      height: 2.8rem;
      bottom: 0;
      position: absolute;
      width: 100%;

      .hzh-wheel {
        animation: hzhRotate 2s linear infinite;
        background: orange;
        border: 0.3rem solid rgba(0, 0, 0, 0.6);
        border-radius: 50%;
        height: 2.8rem;
        left: 1rem;
        position: absolute;
        width: 2.8rem;

        &::before,
        &::after {
          content: "";
          position: absolute;
        }

        &::before {
          background: rgba(0, 0, 0, 0.3);
          height: 86%;
          width: 0.2rem;
        }

        &::after {
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

        &::before,
        &::after {
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }

      .hzh-wheel-2 {
        left: 4.5rem;
      }

      .hzh-wheel-3 {
        border-width: 0.5rem;
        height: 3.8rem;
        left: 8.7rem;
        top: -1.1rem;
        width: 3.8rem;
      }

      .hzh-wheel-4 {
        left: 15.7rem;
      }

      .hzh-wheel-5 {
        left: 19.5rem;
      }

      .hzh-wheel-6 {
        left: 25.7rem;
      }

      .hzh-wheel-7 {
        left: 29.5rem;
      }

      .hzh-wheel-8 {
        left: 35.7rem;
      }

      .hzh-wheel-9 {
        left: 39.5rem;
      }
    }

    @keyframes hzhUpDown {

      0%,
      100% {
        transform: translate(-50%, 0);
      }

      50% {
        transform: translate(-50%, -0.3rem);
      }
    }

    @keyframes hzhRotate {
      100% {
        transform: rotate(-360deg);
      }
    }

    @keyframes hzhBodyUpDown {

      0%,
      100% {
        transform: translateY(0);
      }

      100% {
        transform: translateY(-0.2rem);
      }
    }

    @keyframes hzhMoveSmoke {
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
  }

  .hzh-time-line-card-list {
    margin-top: 5rem;

    .hzh-time-line-tr {
      .hzh-flex(center);
      position: relative;

      .hzh-time-line-td-left {
        flex: 1;
        padding-right: 2rem;
        position: relative;

        .hzh-bubble {
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

          .hzh-time-line-time {
            color: @hzhThemeColor;
            margin-right: 1rem;
          }
        }
      }

      .hzh-time-line-td-center {
        width: 2px;
        height: 100%;
        background-color: @hzhThemeColor;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
      }

      .hzh-time-line-td-right {
        padding-left: 2rem;
        flex: 1;

        .hzh-bubble-right {
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
            border-right: 8px solid @hzhThemeColor;
            left: -16px;
            position: absolute;
            top: 1.3rem;
          }

          &:after {
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
  }

  @media (max-width: 1073px) {
        .hzh-sky {
          display: none;
          height: 0;

        }

        .hzh-train {
          display: none;
          height: 0;
        }
    }
}
</style>
