<template>
    <span class="hzh-swiper-text-one">自制月饼</span>
</template>

<script>

export default {
    name: "HzhSwiperTextOne",
}
</script>

<style scoped lang="less">
@import '@/assets/css/hzh-base.less';

.hzh-swiper-text-one {
    color: @hzhWhite;
    font-size: 3rem;
    position: absolute;
    top: 20%;
    left: 50%;
    animation: hzhBackInLeft 3s linear 0s infinite;
}

@-webkit-keyframes hzhBackInLeft {
    0% {
        -webkit-transform: translateX(-2000px) scale(0.7);
        transform: translateX(-2000px) scale(0.7);
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

@keyframes hzhBackInLeft {
    0% {
        -webkit-transform: translateX(-2000px) scale(0.7);
        transform: translateX(-2000px) scale(0.7);
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
    .hzh-swiper-text-one {
        color: @hzhWhite;
        font-size: 2rem;
        position: absolute;
        top: 20%;
        left: 50%;
    }
}
</style>