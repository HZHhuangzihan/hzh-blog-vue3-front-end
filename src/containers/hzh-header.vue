<template>
    <div class="hzh-header" :class="{ hzhFixed: hzhFixed, hzhHidden: hzhHidden }" @click.stop="hzhMobileShow = false">
        <div class="hzh-logo-site">
            <img src="@/assets/img/hzh-logo-site.svg" alt="" />
            <p class="hzh-site-name">黄子涵</p>
        </div>

        <div class="hzh-menus-btn" @click.stop="hzhMobileShow = !hzhMobileShow">
            菜单
        </div>

        <nav class="hzh-site-menus" :class="{ hzhMobileShow: hzhMobileShow }"
            @click.stop="hzhMobileShow = !hzhMobileShow">
            <div class="hzh-menu-item">
                <router-link to="/">首页</router-link>
            </div>
            <div class="hzh-menu-item">
                <router-link to="/hzh-library-pavilion">藏书阁</router-link>
            </div>
            <div class="hzh-menu-item">
                <router-link to="/hzh-music-city">爱乐城</router-link>
            </div>
            <div class="hzh-menu-item">
                <router-link to="/hzh-my-laboratory">实验室</router-link>
            </div>
            <div class="hzh-menu-item">
                <router-link to="/hzh-about-me">关于我</router-link>
            </div>
            <div class="hzh-menu-item">
                <router-link to="/hzh-time-line">时间轴</router-link>
            </div>
            <div class="hzh-menu-item">
                <router-link to="/hzh-my-friend">朋友圈</router-link>
            </div>
            <div class="hzh-menu-item">
                <router-link to="/hzh-leave-message">留言条</router-link>
            </div>
            <div class="hzh-menu-item">
                <router-link to="/hzh-access-analytics">访问统计</router-link>
            </div>
        </nav>
    </div>
</template>
    
<script>
export default {
    name: "HzhHeader",
    data() {
        return {
            hzhLastScrollTop: 0,
            hzhFixed: false,
            hzhHidden: false,
            hzhMobileShow: false
        }
    },
    mounted() {
        window.addEventListener("scroll", this.hzhWatchScroll);
    },
    beforeDestroy() {
        // hzh-header
        window.removeEventListener("scroll", this.hzhWatchScroll);
    },
    methods: {
        // hzh-header
        hzhWatchScroll() {
            let hzhScrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            if (hzhScrollTop === 0) {
                this.hzhFixed = false;
            } else if (hzhScrollTop >= this.hzhLastScrollTop) {
                this.hzhFixed = false;
                this.hzhHidden = true;
            } else {
                this.hzhHidden = false;
                this.hzhFixed = true;
            }
            this.hzhLastScrollTop = hzhScrollTop;
        }
    }
}
</script>
    
<style lang="less">
@import '@/assets/css/hzh-base.less';

.hzh-header {
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
    height: 5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    transition: 0.3s all ease;
    -webkit-transition: 0.3s all ease;
    -moz-transition: 0.3s all ease;
    -o-transition: 0.3s all ease;
    -ms-transition: 0.3s all ease;

    &.hzhHidden {
        top: -6.25rem;
    }

    &.hzhFixed {
        background-color: @hzhWhite;
        box-shadow: 0 0.0625rem 0.3125rem 0 rgba(0, 0, 0, 0.09);
    }

    .hzh-logo-site {
        text-align: center;
        min-width: 3.75rem;

        img {
            width: 3.75rem;
            height: 3.75rem;
        }

        p.hzh-site-name {
            font-size: 0.9375rem;
            font-weight: bold;
            position: relative;
            top: -0.625rem;
        }
    }

    .hzh-menus-btn {
        display: none;
        visibility: hidden;
    }

    .hzh-site-menus {
        display: flex;
        align-items: center;
        padding: 1.875rem;
        height: 3.125rem;
        line-height: 3.125rem;
        text-align: center;
        position: relative;

        .hzh-menu-item {
            padding: 0.75rem 0.625rem;
            font-weight: 500;
            color: @hzhMonetGrey;
            font-size: 16px;

            &.router-link-exact-active {
                color: @hzhKleinBlue;
            }

            &:hover {
                color: #80c2ff;
            }

            &:not(:last-child) {
                margin-right: 0.9375rem;
            }
        }
    }
}

@media (max-width: 1073px) {
    .hzh-header {
        padding: 0 0.625rem;

        .hzh-menus-btn {
            display: block;
            visibility: visible;
        }

        .hzh-site-menus {
            position: absolute;
            padding: 0;
            display: none;
            visibility: hidden;
            background-color: #f9f9f9;
            height: 100vh;
            left: 0;
            top: 5rem;
            display: flex;
            flex-direction: column;
            z-index: 999;
            box-shadow: 0 0.125rem 0.75rem 0 rgba(0, 0, 0, 0.1);

            .hzh-menu-item {
                padding: 0;
                width: 100vw;
                height: 3.125rem;
                line-height: 3.125rem;
                position: relative;
                text-align: center;
                z-index: 999;

                &.router-link-exact-active {
                    color: @hzhKleinBlue;
                }

                &:hover {
                    color: #80c2ff;
                }
            }

            &.hzhMobileShow {
                display: inline-block;
                visibility: visible;
                z-index: 999;
            }

        }
    }
}
</style>