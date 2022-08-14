<template>
  <section>
    <div class="hzh-loader hzh-loader-7">
      <div class="hzh-line hzh-line1"></div>
      <div class="hzh-line hzh-line2"></div>
      <div class="hzh-line hzh-line3"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "hzh-small-ico",
};
</script>

<style>
.hzh-loader {
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 10px;
  display: inline-block;
  vertical-align: middle;
}

.hzh-loader:hover .hzh-line {
  animation-play-state: paused;
}

.hzh-loader-7 .hzh-line {
  width: 3px;
  position: absolute;
  border-radius: 2px;
  bottom: 0;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#1ee95d),
    to(#5714ce)
  );
  background: -webkit-linear-gradient(top, #1ee95d, #5714ce);
  background: linear-gradient(to bottom, #1ee95d, #5714ce);
}

.hzh-loader-7 .hzh-line1 {
  left: 0;
  -webkit-animation: hzh-line-grow 0.5s ease alternate infinite;
  animation: hzh-line-grow 0.5s ease alternate infinite;
}

.hzh-loader-7 .hzh-line2 {
  left: 7px;
  -webkit-animation: hzh-line-grow 0.5s 0.2s ease alternate infinite;
  animation: hzh-line-grow 0.5s 0.2s ease alternate infinite;
}

.hzh-loader-7 .hzh-line3 {
  left: 14px;
  -webkit-animation: hzh-line-grow 0.5s 0.4s ease alternate infinite;
  animation: hzh-line-grow 0.5s 0.4s ease alternate infinite;
}

@-webkit-keyframes hzh-line-grow {
  0% {
    height: 0;
  }
  100% {
    height: 75%;
  }
}

@keyframes hzh-line-grow {
  0% {
    height: 0;
  }
  100% {
    height: 75%;
  }
}
</style>