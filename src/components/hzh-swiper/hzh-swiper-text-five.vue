<template>
    <span class="hzh-swiper-text-five">包装</span>
</template>

<script>

export default {
    name: "HzhSwiperTextFive"
}
</script>

<style scoped lang="less">
@import '@/assets/css/hzh-base.less';

.hzh-swiper-text-five {
    color: #4205b1;
    font-size: 4rem;
    position: absolute;
    top: 35%;
    left: 60%;
    animation: hzhHeartBeat 3s ease-in-out 0s infinite;
}

@-webkit-keyframes hzhHeartBeat {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    14% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
    }

    28% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    42% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
    }

    70% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}

@keyframes hzhHeartBeat {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    14% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
    }

    28% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    42% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
    }

    70% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}

@media (max-width: 750px) {
        .hzh-swiper-text-five {
            color: #4205b1;
            font-size: 3rem;
            position: absolute;
            top: 35%;
            left: 55%;
        }
}

@media (max-width: 1050px) {
        .hzh-swiper-text-five {
            color: #4205b1;
            font-size: 3rem;
            position: absolute;
            top: 35%;
            left: 55%;
        }
}
</style>