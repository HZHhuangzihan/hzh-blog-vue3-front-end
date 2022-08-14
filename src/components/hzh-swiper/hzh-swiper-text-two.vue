<template>
    <span class="hzh-swiper-text-two">爱马仕品质</span>
</template>

<script>
export default {
    name: "HzhSwiperTextTwo",
}
</script>

<style scoped lang="less">
@import '@/assets/css/hzh-base.less';

.hzh-swiper-text-two {
    color: @hzhWhite;
    font-size: 3rem;
    position: absolute;
    top: 40%;
    left: 50%;
    animation: hzhBackInRight 3s linear 0s infinite;
}

@-webkit-keyframes hzhBackInRight {
    0% {
        -webkit-transform: translateX(2000px) scale(0.7);
        transform: translateX(2000px) scale(0.7);
        opacity: 0.7;
    }

    80% {
        -webkit-transform: translateX(0px) scale(0.7);
        transform: translateX(0px) scale(0.7);
        opacity: 0.7;
    }

    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes hzhBackInRight {
    0% {
        -webkit-transform: translateX(2000px) scale(0.7);
        transform: translateX(2000px) scale(0.7);
        opacity: 0.7;
    }

    80% {
        -webkit-transform: translateX(0px) scale(0.7);
        transform: translateX(0px) scale(0.7);
        opacity: 0.7;
    }

    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1;
    }
}

@media (max-width: 750px) {

    .thzh-swiper-text-two {
        color: @hzhWhite;
        font-size: 2rem;
        position: absolute;
        top: 40%;
        left: 50%;
    }
}

@media (max-width: 1050px) {

    .hzh-swiper-text-two {
        color: @hzhWhite;
        font-size: 2rem;
        position: absolute;
        top: 40%;
        left: 50%;
    }

}
</style>