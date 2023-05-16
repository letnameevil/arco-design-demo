<script setup>
import { ref, reactive, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore, useTabsListStore } from '@/store'

import SideMenuItem from './side-menu-item.vue'

const Route = useRoute()
const Router = useRouter()

const userStore = useUserStore()

const selectedKeys = ref([])

watchEffect(() => {
  selectedKeys.value = [Route.name]
})

const onClickMenuItem = key => {
  Router.push({
    name: key,
  })
}
</script>

<template>
  <a-menu :default-selected-keys="selectedKeys" auto-open-selected :style="{ width: '100%' }" @menu-item-click="onClickMenuItem">
    <SideMenuItem :sideList="userStore.sideMenuList" />
  </a-menu>
</template>
