import { ref } from 'vue'
import { defineStore } from 'pinia'
import asyncRouter from '@/router/async-router'
import constRouter from '@/router/const-router'
import router from '@/router'

import { cloneDeep } from 'lodash'

import handleAsyncRoutes, { handleSideBarMenuList } from '@/utils/handle-async-routes'
import Storage from '@/utils/storage'

export const useUserStore = defineStore('user', () => {
  const sideMenuList = ref([])
  /**
   * 处理动态路由
   * */
  const storeHandleAsyncRoutes = () => {
    const cloneDeepAsyncRoutes = cloneDeep(asyncRouter)
    const cloneDeepConstRouter = cloneDeep(constRouter)
    const sideMenuCodeList = Storage.get('menuCodeList') || []
    const asyncRoutes = handleAsyncRoutes(cloneDeepAsyncRoutes, sideMenuCodeList)
    asyncRoutes.forEach(it => {
      router.addRoute(it)
    })
    handleSideBarList([...cloneDeepConstRouter, ...asyncRoutes])
  }

  /**
   * 处理侧边栏渲染
   * */
  const handleSideBarList = (routes = []) => {
    sideMenuList.value = handleSideBarMenuList(routes)
  }

  return {
    sideMenuList,
    storeHandleAsyncRoutes,
  }
})
