import { createApp } from 'vue'
import router from './router'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
// import { createPinia } from 'pinia'
import pinia from '@/store/store'

import './router-limit'
import resetRoutes from '@/utils/reset-routes'

import App from './App.vue'

import '@arco-design/web-vue/dist/arco.css'

/**
 * 引入全局样式
 **/
import '@/styles/index.css'

const app = createApp(App)
app.use(pinia)
app.use(resetRoutes)
app.use(router)
app.use(ArcoVue).use(ArcoVueIcon)
app.mount('#app')
