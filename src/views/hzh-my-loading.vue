<template>
  <div id="hzh-loading" v-show="hzhLoading">
    <div class="hzh-loader">
      <div class="hzh-loader-inner la-pacman la-2x">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HzhLoading",
  computed: {
    hzhLoading() {
      return this.$store.state.hzhLoading;
    },
  },
  watch: {
    hzhLoading: {
      immediate: true,
      handler: (n, o) => {
        let HtmlBodyElement = document.querySelector("body");
        HtmlBodyElement.style.overflowY = n ? "hidden" : "auto";
      },
    },
  },
};
</script>

<style>
#hzh-loading {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  
}

.hzh-loader {
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: colum;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 25%;
  max-width: 25%;
  height: 200px;
  align-items: center;
  justify-content: center;
}

.la-pacman,
.la-pacman > div {
  position: relative;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.la-pacman {
  display: block;
  font-size: 0;
  color: #002fa7;
}

.la-pacman.la-dark {
  color: #333;
}

.la-pacman > div {
  display: inline-block;
  float: none;
  background-color: currentColor;
  border: 0 solid currentColor;
}

.la-pacman {
  width: 32px;
  height: 32px;
}

.la-pacman > div:nth-child(1),
.la-pacman > div:nth-child(2) {
  width: 0;
  height: 0;
  background: transparent;
  border-style: solid;
  border-width: 16px;
  border-right-color: transparent;
  border-radius: 100%;
  -webkit-animation: hzh-pacman-rotate-half-up 0.5s 0s infinite;
  -moz-animation: hzh-pacman-rotate-half-up 0.5s 0s infinite;
  -o-animation: hzh-pacman-rotate-half-up 0.5s 0s infinite;
  animation: hzh-pacman-rotate-half-up 0.5s 0s infinite;
}

.la-pacman > div:nth-child(2) {
  margin-top: -32px;
  -webkit-animation-name: hzh-pacman-rotate-half-down;
  -moz-animation-name: hzh-pacman-rotate-half-down;
  -o-animation-name: hzh-pacman-rotate-half-down;
  animation-name: hzh-pacman-rotate-half-down;
}

.la-pacman > div:nth-child(3),
.la-pacman > div:nth-child(4),
.la-pacman > div:nth-child(5),
.la-pacman > div:nth-child(6) {
  position: absolute;
  top: 50%;
  left: 200%;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  opacity: 0;
  -webkit-animation: hzh-pacman-balls 2s 0s infinite linear;
  -moz-animation: hzh-pacman-balls 2s 0s infinite linear;
  -o-animation: hzh-pacman-balls 2s 0s infinite linear;
  animation: hzh-pacman-balls 2s 0s infinite linear;
}

.la-pacman > div:nth-child(3) {
  -webkit-animation-delay: -1.44s;
  -moz-animation-delay: -1.44s;
  -o-animation-delay: -1.44s;
  animation-delay: -1.44s;
}

.la-pacman > div:nth-child(4) {
  -webkit-animation-delay: -1.94s;
  -moz-animation-delay: -1.94s;
  -o-animation-delay: -1.94s;
  animation-delay: -1.94s;
}

.la-pacman > div:nth-child(5) {
  -webkit-animation-delay: -2.44s;
  -moz-animation-delay: -2.44s;
  -o-animation-delay: -2.44s;
  animation-delay: -2.44s;
}

.la-pacman > div:nth-child(6) {
  -webkit-animation-delay: -2.94s;
  -moz-animation-delay: -2.94s;
  -o-animation-delay: -2.94s;
  animation-delay: -2.94s;
}

.la-pacman.la-sm {
  width: 16px;
  height: 16px;
}

.la-pacman.la-sm > div:nth-child(1),
.la-pacman.la-sm > div:nth-child(2) {
  border-width: 8px;
}

.la-pacman.la-sm > div:nth-child(2) {
  margin-top: -16px;
}

.la-pacman.la-sm > div:nth-child(3),
.la-pacman.la-sm > div:nth-child(4),
.la-pacman.la-sm > div:nth-child(5),
.la-pacman.la-sm > div:nth-child(6) {
  width: 4px;
  height: 4px;
}

.la-pacman.la-2x {
  width: 64px;
  height: 64px;
}

.la-pacman.la-2x > div:nth-child(1),
.la-pacman.la-2x > div:nth-child(2) {
  border-width: 32px;
}

.la-pacman.la-2x > div:nth-child(2) {
  margin-top: -64px;
}

.la-pacman.la-2x > div:nth-child(3),
.la-pacman.la-2x > div:nth-child(4),
.la-pacman.la-2x > div:nth-child(5),
.la-pacman.la-2x > div:nth-child(6) {
  width: 16px;
  height: 16px;
}

.la-pacman.la-3x {
  width: 96px;
  height: 96px;
}

.la-pacman.la-3x > div:nth-child(1),
.la-pacman.la-3x > div:nth-child(2) {
  border-width: 48px;
}

.la-pacman.la-3x > div:nth-child(2) {
  margin-top: -96px;
}

.la-pacman.la-3x > div:nth-child(3),
.la-pacman.la-3x > div:nth-child(4),
.la-pacman.la-3x > div:nth-child(5),
.la-pacman.la-3x > div:nth-child(6) {
  width: 24px;
  height: 24px;
}

@-webkit-keyframes hzh-pacman-rotate-half-up {
  0%,
  100% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
  50% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@-moz-keyframes hzh-pacman-rotate-half-up {
  0%,
  100% {
    -moz-transform: rotate(270deg);
    transform: rotate(270deg);
  }
  50% {
    -moz-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@-o-keyframes hzh-pacman-rotate-half-up {
  0%,
  100% {
    -o-transform: rotate(270deg);
    transform: rotate(270deg);
  }
  50% {
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes hzh-pacman-rotate-half-up {
  0%,
  100% {
    -webkit-transform: rotate(270deg);
    -moz-transform: rotate(270deg);
    -o-transform: rotate(270deg);
    transform: rotate(270deg);
  }
  50% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes hzh-pacman-rotate-half-down {
  0%,
  100% {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

@-webkit-keyframes hzh-pacman-rotate-half-down {
  0%,
  100% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

@-moz-keyframes hzh-pacman-rotate-half-down {
  0%,
  100% {
    -moz-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  50% {
    -moz-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

@-o-keyframes hzh-pacman-rotate-half-down {
  0%,
  100% {
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  50% {
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

@-webkit-keyframes hzh-pacman-balls {
  0% {
    left: 200%;
    opacity: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  5% {
    opacity: 0.5;
  }
  66% {
    opacity: 1;
  }
  67% {
    opacity: 0;
  }
  100% {
    left: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
}

@-moz-keyframes hzh-pacman-balls {
  0% {
    left: 200%;
    opacity: 0;
    -moz-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  5% {
    opacity: 0.5;
  }
  66% {
    opacity: 1;
  }
  67% {
    opacity: 0;
  }
  100% {
    left: 0;
    -moz-transform: translateY(-50%);
    transform: translateY(-50%);
  }
}

@-o-keyframes hzh-pacman-balls {
  0% {
    left: 200%;
    opacity: 0;
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  5% {
    opacity: 0.5;
  }
  66% {
    opacity: 1;
  }
  67% {
    opacity: 0;
  }
  100% {
    left: 0;
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
  }
}

@keyframes hzh-pacman-balls {
  0% {
    left: 200%;
    opacity: 0;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  5% {
    opacity: 0.5;
  }
  66% {
    opacity: 1;
  }
  67% {
    opacity: 0;
  }
  100% {
    left: 0;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
  }
}
</style>