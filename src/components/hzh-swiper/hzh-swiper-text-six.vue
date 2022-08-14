<template>
    <span class="hzh-swiper-text-six">北活好吃</span>
</template>

<script>

export default {
    name: "HzhSwiper",
}
</script>

<style scoped lang="less">
@import '@/assets/css/hzh-base.less';

.hzh-swiper-text-six {
    color: @hzhWhite;
    font-size: 6rem;
    position: absolute;
    top: 25%;
    left: 30%;
    animation: hzhSwing 3s linear 0s infinite;
}

@-webkit-keyframes hzhSwing {
    20% {
        -webkit-transform: rotate3d(0, 0, 1, 15deg);
        transform: rotate3d(0, 0, 1, 15deg);
    }

    40% {
        -webkit-transform: rotate3d(0, 0, 1, -10deg);
        transform: rotate3d(0, 0, 1, -10deg);
    }

    60% {
        -webkit-transform: rotate3d(0, 0, 1, 5deg);
        transform: rotate3d(0, 0, 1, 5deg);
    }

    80% {
        -webkit-transform: rotate3d(0, 0, 1, -5deg);
        transform: rotate3d(0, 0, 1, -5deg);
    }

    to {
        -webkit-transform: rotate3d(0, 0, 1, 0deg);
        transform: rotate3d(0, 0, 1, 0deg);
    }
}

@keyframes hzhSwing {
    20% {
        -webkit-transform: rotate3d(0, 0, 1, 15deg);
        transform: rotate3d(0, 0, 1, 15deg);
    }

    40% {
        -webkit-transform: rotate3d(0, 0, 1, -10deg);
        transform: rotate3d(0, 0, 1, -10deg);
    }

    60% {
        -webkit-transform: rotate3d(0, 0, 1, 5deg);
        transform: rotate3d(0, 0, 1, 5deg);
    }

    80% {
        -webkit-transform: rotate3d(0, 0, 1, -5deg);
        transform: rotate3d(0, 0, 1, -5deg);
    }

    to {
        -webkit-transform: rotate3d(0, 0, 1, 0deg);
        transform: rotate3d(0, 0, 1, 0deg);
    }
}

@media (max-width: 1080px) {
    .hzh-swiper-text-six {
        color: @hzhWhite;
        font-size: 5rem;
        position: absolute;
        top: 25%;
        left: 30%;
        animation: hzhSwing 3s linear 0s infinite;
    }
}

@media (max-width: 800px) {
    .hzh-swiper-text-six {
        color: @hzhWhite;
        font-size: 5rem;
        position: absolute;
        top: 25%;
        left: 25%;
        animation: hzhSwing 3s linear 0s infinite;
    }
}

@media (max-width: 740px) {
    .hzh-swiper-text-six {
        color: @hzhWhite;
        font-size: 5rem;
        position: absolute;
        top: 25%;
        left: 20%;
        animation: hzhSwing 3s linear 0s infinite;
    }
}

@media (max-width: 650px) {
    .hzh-swiper-text-six {
        color: @hzhWhite;
        font-size: 4.5rem;
        position: absolute;
        top: 25%;
        left: 20%;
        animation: hzhSwing 3s linear 0s infinite;
    }
}

@media (max-width: 510px) {
    .hzh-swiper-text-six {
        color: @hzhWhite;
        font-size: 4rem;
        position: absolute;
        top: 25%;
        left: 20%;
        animation: hzhSwing 3s linear 0s infinite;
    }
}

@media (max-width: 460px) {
    .hzh-swiper-text-six {
        color: @hzhWhite;
        font-size: 3.5rem;
        position: absolute;
        top: 25%;
        left: 20%;
        animation: hzhSwing 3s linear 0s infinite;
    }
}

@media (max-width: 410px) {
    .hzh-swiper-text-six {
        color: @hzhWhite;
        font-size: 3rem;
        position: absolute;
        top: 25%;
        left: 20%;
        animation: hzhSwing 3s linear 0s infinite;
    }
}
</style>