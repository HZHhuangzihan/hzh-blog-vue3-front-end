import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import HzhMyHome from '@/views/hzh-my-home.vue'

const routes = [
  {
    path: '/',
    name: 'HzhMyHome',
    component: HzhMyHome,
    meta: { title: '首页' }
  },
  {
    path: '/hzh-category/:hzhCate',
    name: 'HzhcCategory',
    component: () => import('@/views/hzh-my-home.vue'),
    meta: { title: '分类', params: 'hzhCate' }
  },
  {
    path: '/hzh-about-me',
    name: 'HzhAboutMe',
    component: () => import('@/views/hzh-about-me.vue'),
    meta: { title: '关于我' }
  },
  {
    path: '/hzh-my-laboratory',
    name: 'HzhMyLaboratory',
    component: () => import('@/views/hzh-my-laboratory.vue'),
    meta: { title: '实验室' }
  },
  {
    path: '/hzh-music-city',
    name: 'HzhMusicCity',
    component: () => import('@/views/hzh-music-city.vue'),
    meta: { title: '爱乐城' }
  },
  {
    path: '/hzh-library-pavilion',
    name: 'HzhLibraryPavilion',
    component: () => import('@/views/hzh-library-pavilion.vue'),
    meta: { title: '藏书阁' }
  },
  {
    path: '/hzh-my-friend',
    name: 'HzhMyFriend',
    component: () => import('@/views/hzh-my-friend.vue'),
    meta: { title: '朋友圈' }
  },
  {
    path: '/hzh-leave-message',
    name: 'HzhLeaveessage',
    component: () => import('@/views/hzh-leave-message.vue'),
    meta: { title: '留言条' }
  },
  {
    path: '/hzh-access-analytics',
    name: 'HzhAccessAnalytics',
    component: () => import('@/views/hzh-access-analytics.vue'),
    meta: { title: '访问统计' }
  },
  {
    path: '/hzh-time-line',
    name: 'HzhTimeLine',
    component: () => import('@/views/hzh-time-line.vue'),
    meta: { title: '时间轴' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  let title = '黄子涵'
  if (to.meta.params) {
    title = `${to.meta.title}：${to.params[to.meta.params] || ''} - ${title}`
  } else {
    title = `${to.meta.title} - ${title}`
  }
  document.title = title
  if (to.path !== from.path) {
    store.dispatch('hzhSetLoading', true);
  }
  next();
})

router.afterEach((to, from) => {
  setTimeout(() => {
    store.dispatch('hzhSetLoading', false);
  }, 1500)
})

export default router
