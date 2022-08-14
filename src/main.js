import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
require('./mock')
import '../src/assets/css/style.less'
import '@/assets/font/iconfont.css'

createApp(App).use(store).use(router).mount('#app')
