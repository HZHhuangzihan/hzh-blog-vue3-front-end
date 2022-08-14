<template>
  <article class="hzh-post hzh-post-list">
    <div class="hzh-post-entry">
      <div class="hzh-feature">
        <router-link :to="`/hzhArticle/${hzhPost.id}`">
          <img :src="hzhPost.banner" />
        </router-link>
      </div>
      <h1 class="hzh-entry-title">
        <router-link :to="`/hzhArticle/${hzhPost.id}`">
          <span v-if="hzhPost.isTop" style="color: #ff6d6d; font-weight: 600">[置顶]</span>
          {{ hzhPost.title }}
        </router-link>
      </h1>
      <div class="hzh-p-time">
        <i class="iconfont iconmeditor-time"></i>{{ hzhPost.pubTime | hzhParseTime
        }}<i v-if="hzhPost.isHot" class="iconfont iconfire" style="margin-left: 5px; color: #ff6d6d"></i>
      </div>
      <p class="hzh-summary">{{ hzhPost.summary }}</p>
      <footer class="hzh-entry-footer">
        <div class="hzh-post-more">
          <router-link :to="`/hzhArticle/${hzhPost.id}`"><i class="iconfont iconfish-li" style="font-size: 25px"></i>
          </router-link>
        </div>
        <div class="hzh-info-meta">
          <div class="hzh-comnum">
            <span>
              <i class="iconfont iconcomment"></i>
              <a href="https://zhebk.cn/Web/Akina.html">{{ hzhPost.commentsCount }}条评论</a>
            </span>
          </div>
          <div class="hzh-views">
            <span><i class="iconfont iconeyes"></i>{{ hzhPost.viewsCount }}热度</span>
          </div>
        </div>
      </footer>
    </div>
    <hr />
  </article>
</template>

<script>
export default {
  name: "HzhPost",
  props: {
    hzhPost: {
      type: Object,
    },
  },
};
</script>

<style scoped lang="less">
@import '@/assets/css/hzh-base.less';

.hzh-post {
  margin: 0 0 4% 0;
  position: relative;
}

.hzh-post-entry {
  .hzh-feature {
    position: absolute;
    margin-top: 0.625rem;
  }

  img {
    width: 6.25rem;
    height: 6.25rem;
    object-fit: cover;
    border-radius: 50%;
    padding: 2px;
    border: 1px solid #dadada;
    position: relative;
    transition: all 0.2s linear;
    overflow: hidden;

    &:hover {
      transform: scale(1.1, 1.1);
      filter: contrast(130%);
    }
  }
}

.hzh-entry-title {
  font-size: 21px;
  font-weight: 600;
  line-height: 3.125rem;
  margin: 0 0 0 17%;
  position: relative;
  z-index: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 70%;
  color: #737373;

  a:hover {
    color: @hzhHoverBlue;
  }
}

.hzh-p-time {
  position: absolute;
  right: 0;
  top: 16px;
  font-size: 12px;
  color: #989898;
  letter-spacing: 1px;
  font-family: din, "Hiragino Sans GB", "Microsoft Yahei", Arial, sans-serif;
  display: flex;
  align-items: center;
}

p.hzh-summary {
  min-height: 60px;
  margin: 0 0 0 17%;
  font-size: 15px;
  color: #6f6f6f;
  letter-spacing: 1px;
  line-height: 30px;
}

footer.hzh-entry-footer {
  margin: 0 0 0 17%;
  list-style: none;

  .hzh-post-more {
    margin-top: 10px;
    text-align: right;
    color: #a0dad0;

    a:hover {
      color: #737373;
    }
  }
}

.hzh-info-meta {
  margin-top: 10px;
  font-family: din, "Hiragino Sans GB", "Microsoft Yahei", Arial, sans-serif;
  position: absolute;
  top: 20px;
  opacity: 0;
  padding-top: 8px;
  border-top: 1px solid #ddd;
  -webkit-transform: translate3d(-150px, 0, 0);
  transform: translate3d(-150px, 0, 0);
  visibility: hidden;
  transition: 0.7s all ease;
  -webkit-transition: 0.6s all ease;
  -moz-transition: 0.6s all linear;
  -o-transition: 0.6s all ease;
  -ms-transition: 0.6s all ease;

  span,
  a {
    color: #b3b3b3;
    font-size: 12px;
  }

  i {
    margin-top: 3px;
    margin-right: 10px;
    float: left;
  }

  .hzh-comnum {
    float: left;
  }
}


.hzh-post-entry:hover footer.hzh-entry-footer .hzh-info-meta {
  -webkit-transform: translate3d(-14.375rem, 0, 0);
  transform: translate3d(-14.375rem, 0, 0);
  opacity: 1;
  visibility: visible;
}

.hzhPost hr {
  width: 30%;
  height: 1px;
  margin: 0 auto;
  border: 0;
  background: #efefef;
}

@media (max-width: 1060px) {
  .hzh-info-meta {
    display: none;
  }
}

@media (max-width: 800px) {
  .hzh-post-entry {
    .hzh-feature img {
      width: 50px;
      height: 50px;
    }

    .hzh-entry-title {
      font-size: 16px;
      line-height: 30px;
      margin: 0 0 0 65px;
    }

    .hzh-p-time {
      position: relative;
      margin: -15px 0 0 65px;
    }

    p.hzh-summary {
      margin: 20px 0 0 65px;
      font-size: 14px;
      height: 30px;
      overflow: hidden;
    }

    .hzh-post-more {
      display: none;
    }
  }

  .hzh-post-list hr {
    margin-top: 20px;
  }
}
</style>