<template>
    <transition name="slide-fade">
    <div class="hzh-back-top" v-show="hzhShow" @click.stop="hzhGetTop">
        <img class="hzh-mod-tortoise" src="@/assets/img/hzh-mod-tortoise.svg" alt="">
        <img class="hzh-mod-tortoisehover" src="@/assets/img/hzh-mod-tortoisehover.svg" alt="">
        <p>顶部</p>
    </div>
    </transition>
</template>
    
<script>
export default {
    name: "HzhMain",
    data() {
        return {
            hzhShow: false,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.hzhScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.hzhScroll);
    },
    methods: {
        hzhScroll() {
            let hzhscrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if (hzhscrollTop > 150) {
                this.hzhShow = true
            } else {
                this.hzhShow = false
            }
        },
        hzhGetTop() {
            let hzhTimer = setInterval(() => {
                let hzhScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                let hzhSpeed = Math.ceil(hzhScrollTop / 5)
                document.documentElement.scrollTop = hzhScrollTop - hzhSpeed
                if (hzhScrollTop === 0) {
                    clearInterval(hzhTimer)
                }
            }, 20)
        }
    }
}
</script>
    
<style lang="less">
@import '@/assets/css/hzh-base.less';

.hzh-back-top {
    background-color: @hzhWhite;
    position: fixed;
    right: 3rem;
    bottom: 8rem;
    border-radius: 1.5625rem;
    cursor: pointer;
    opacity: .3;
    transition: .3;
    text-align: center;
    z-index: 999;

    img {
        width: 3.75rem;
        height: 3.75rem;
    }

    &:hover .hzh-mod-tortoise {
        display: none;
    }

    &:hover .hzh-mod-tortoisehover {
        display: unset;
    }
}

.hzh-mod-tortoisehover {
    display: none;
}
</style>