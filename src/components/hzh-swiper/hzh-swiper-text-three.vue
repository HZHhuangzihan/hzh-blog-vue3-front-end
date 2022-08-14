<template>
    <span class="hzh-swiper-text-three">雷州本地猪</span>
</template>

<script>
export default {
    name: "HzhSwiperTextThree",
}
</script>

<style scoped lang="less">
@import '@/assets/css/hzh-base.less';

.swiper-slide::v-deep {
    .hzh-swiper-text-three {
        color: #FB506A;
        font-size: 7rem;
        position: absolute;
        top: 40%;
        left: 30%;
        -webkit-text-stroke: 1px @hzhWhite;
        animation: hzhZoomInDown 3s linear 0s infinite;
    }
}

@-webkit-keyframes hzhZoomInDown {
    from {
        opacity: 0;
        -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
        transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    60% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
}

@keyframes hzhZoomInDown {
    from {
        opacity: 0;
        -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
        transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    60% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
}

@media (max-width: 1080px) {
    .hzh-swiper-text-three {
        color: #FB506A;
        font-size: 6rem;
        position: absolute;
        top: 40%;
        left: 30%;
        -webkit-text-stroke: 1px @hzhWhite;
        animation: hzhZoomInDown 3s linear 0s infinite;
    }
}

@media (max-width: 900px) {
    .hzh-swiper-text-three {
        color: #FB506A;
        font-size: 6rem;
        position: absolute;
        top: 40%;
        left: 25%;
        -webkit-text-stroke: 1px @hzhWhite;
        animation: hzhZoomInDown 3s linear 0s infinite;
    }
}

@media (max-width: 800px) {
    .hzh-swiper-text-three {
        color: #FB506A;
        font-size: 6rem;
        position: absolute;
        top: 40%;
        left: 20%;
        -webkit-text-stroke: 1px @hzhWhite;
        animation: hzhZoomInDown 3s linear 0s infinite;
    }
}

@media (max-width: 740px) {
    .hzh-swiper-text-three {
        color: #FB506A;
        font-size: 5.5rem;
        position: absolute;
        top: 40%;
        left: 20%;
        -webkit-text-stroke: 1px @hzhWhite;
        animation: hzhZoomInDown 3s linear 0s infinite;
    }
}

@media (max-width: 700px) {
    .hzh-swiper-text-three {
        color: #FB506A;
        font-size: 5rem;
        position: absolute;
        top: 40%;
        left: 20%;
        -webkit-text-stroke: 1px @hzhWhite;
        animation: hzhZoomInDown 3s linear 0s infinite;
    }
}

@media (max-width: 510px) {
    .hzh-swiper-text-three {
        color: #FB506A;
        font-size: 4.5rem;
        position: absolute;
        top: 40%;
        left: 20%;
        -webkit-text-stroke: 1px @hzhWhite;
        animation: hzhZoomInDown 3s linear 0s infinite;
    }
}

@media (max-width: 460px) {
    .hzh-swiper-text-three {
        color: #FB506A;
        font-size: 4rem;
        position: absolute;
        top: 40%;
        left: 20%;
        -webkit-text-stroke: 1px @hzhWhite;
        animation: hzhZoomInDown 3s linear 0s infinite;
    }
}

@media (max-width: 410px) {
    .hzh-swiper-text-three {
        color: #FB506A;
        font-size: 3.5rem;
        position: absolute;
        top: 40%;
        left: 20%;
        -webkit-text-stroke: 1px @hzhWhite;
        animation: hzhZoomInDown 3s linear 0s infinite;
    }
}
</style>