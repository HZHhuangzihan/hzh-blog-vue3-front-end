<template>
    <div class="hzh-feature">
        <router-link :to="`/hzhArticle/${data.id}`">
            <div class="hzh-feature-title"><span class="hzh-foverlay">{{ data.title }}</span></div>
            <img :src="data.img">
        </router-link>
    </div>
</template>

<script>
export default {
    name: "hzh-feature",
    props: {
        data: {
            type: Object,
            default: () => {
                return {
                    title: 'Akina',
                    img: 'https://cdn.zhebk.cn/usr/themes/Akina//images/feature/feature1.jpg',
                    href: 'https://zhebk.cn/Web/Akina.html'
                }
            }
        }
    }
}
</script>

<style scoped lang="less">
@import "@/assets/css/hzh-base.less";

.hzh-feature {
    width: inherit;
    position: relative;

    img {
        height: 10rem;
        width: 16.0625rem;
        object-fit: cover;
        border-radius: 0.3125rem;
    }

    .hzh-foverlay {
        position: absolute;
        z-index: 2;
        left: 0.015rem;
        width: 16.0625rem;
        height: 10rem;
        text-align: center;
        line-height: 10rem;
        background: #BBE2DB;
        color: white;
        font-size: 16px;
        opacity: 0;
        border-radius: 0.3125rem;

        -moz-transition: opacity .4s ease-out;
        -o-transition: opacity .4s ease-out;
        -webkit-transition: opacity .4s ease-out;
        transition: opacity .4s ease-out;
    }

    a:hover .hzh-foverlay {
        opacity: 1;
    }
}
</style>