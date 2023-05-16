<template>
  <a-card hoverable>
    <a-tabs
      type="card-gutter"
      class="is-show-homepage"
      :editable="true"
      @change="handleTabClick"
      @delete="handleDelete"
      size="small"
      :active-key="Route.name"
      hide-content
      animation
    >
      <a-tab-pane :closable="item.name !== 'homePage'" v-for="item in tabsList.topTabsList" :key="item.name" :title="item.meta.title">
        {{ item.name }}</a-tab-pane
      >
    </a-tabs>
  </a-card>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { useTabsListStore } from '@/store'
const activeName = ref('homePage')
const tabsList = useTabsListStore()
const Router = useRouter()
const Route = useRoute()

const routes = Router.getRoutes()
console.log('routes', routes)

watchEffect(() => {
  const ret = routes.find(it => it.name === Route.name)
  tabsList.handleTabsList(ret)
  /**
   * 去找然后往里面推
   **/
})

const handleTabClick = routeName => {
  Router.push({
    name: routeName,
  })
}

const handleDelete = v1 => {
  let type = 'origin' // origin |  change
  if (v1 === Route.name) type = 'change'
  tabsList.handleTabsDel(v1, type)
}
</script>

<style scoped lang="less">
:deep(.arco-card-body) {
  padding: 0 !important;
}
</style>
