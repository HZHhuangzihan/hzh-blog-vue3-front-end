<template>
    <div class="hzh-swiper">
        <swiper :modules="modules" :slides-per-view="1" :space-between="50" navigation :pagination="{ clickable: true }"
            :autoplay="{
                delay: 2800,
                disableOnInteraction: false,
            }" @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide>
                <hzh-swiper-text-one></hzh-swiper-text-one>
                <hzh-swiper-text-two></hzh-swiper-text-two>
                <img src="@/assets/img/hzh-banner-mooncake.webp">
            </swiper-slide>
            <swiper-slide>
                <hzh-swiper-text-four></hzh-swiper-text-four>
                <hzh-swiper-text-five></hzh-swiper-text-five>
                <img src="@/assets/img/hzh-banner-mooncakebox.webp">
            </swiper-slide>
            <swiper-slide>
                <hzh-swiper-text-three></hzh-swiper-text-three>
                <img src="@/assets/img/hzh-banner-pork.webp">
            </swiper-slide>
            <swiper-slide>
                <hzh-swiper-text-six></hzh-swiper-text-six>
                <img src="@/assets/img/hzh-banner-sausage.webp">
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import SwiperCore, { Navigation, Pagination, Autoplay, A11y, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import '@/assets/css/swiper-bundle.min.css'

SwiperCore.use([Navigation, Pagination, Autoplay, A11y, , Scrollbar]);

import HzhSwiperTextOne from '@/components/hzh-swiper/hzh-swiper-text-one.vue';
import HzhSwiperTextTwo from '@/components/hzh-swiper/hzh-swiper-text-two.vue';
import HzhSwiperTextThree from '@/components/hzh-swiper/hzh-swiper-text-three.vue';
import HzhSwiperTextFour from '@/components/hzh-swiper/hzh-swiper-text-four.vue';
import HzhSwiperTextFive from '@/components/hzh-swiper/hzh-swiper-text-five.vue';
import HzhSwiperTextSix from '@/components/hzh-swiper/hzh-swiper-text-six.vue';

export default {
    name: "HzhSwiper",

    components: {
        Swiper,
        SwiperSlide,
        HzhSwiperTextOne,
        HzhSwiperTextTwo,
        HzhSwiperTextThree,
        HzhSwiperTextFour,
        HzhSwiperTextFive,
        HzhSwiperTextSix
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };

        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Scrollbar, A11y],
        };
    },
}
</script>

<style scoped lang="less">
@import '@/assets/css/hzh-base.less';

.swiper-slide::v-deep {
    top: 5rem;

    img {
        height: 34.375rem;
        width: 50%;
    }
}

.swiper-button-next,
.swiper-button-prev::v-deep {
    color: @hzhKleinBlue;
}

.swiper-pagination-bullet::v-deep {
    color: @hzhKleinBlue;
}

@media (max-width: 1080px) {
    .swiper-slide::v-deep {
        img {
            height: 34.375rem;
            width: 70%;
        }
    }
}

@media (max-width: 600px) {
    .swiper-slide::v-deep {
        img {
            height: 34.375rem;
            width: 100%;
        }
    }
}
</style>