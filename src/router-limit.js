import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import router from './router'

import Storage from '@/utils/storage'

const whiteList = ['/login']

router.beforeEach((to, from) => {
  if (Storage.get('token') || whiteList.includes(to.path)) {
  } else {
    return '/login'
  }
  Nprogress.start()
})

router.beforeResolve((to, from) => {})

router.afterEach((to, from) => {
  document.title = to.meta.title
  Nprogress.done()
})
