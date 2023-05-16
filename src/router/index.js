import { createRouter, createWebHashHistory } from 'vue-router'

import constRouter from './const-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: constRouter,
})

export default router
