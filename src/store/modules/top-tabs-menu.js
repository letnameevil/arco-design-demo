import { defineStore } from 'pinia'
import { ref, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export const useTabsListStore = defineStore('topTabsMenu', () => {
  const topTabsList = ref([{ name: 'homePage', meta: { title: '首页' } }])
  const Router = useRouter()
  const Route = useRoute()
  const handleTabsList = route => {
    if (!topTabsList.value.find(itt => itt.name === route.name)) {
      topTabsList.value.push(route)
    }
  }

  const handleTabsDel = (routeName, type) => {
    const idx = topTabsList.value.findIndex(itt => itt.name === routeName)

    if (type === 'change') {
      Router.push({
        name: topTabsList.value[idx - 1].name,
      })
    }

    const timer = setTimeout(() => {
      topTabsList.value.splice(idx, 1)
      clearTimeout(timer)
    })
  }

  return {
    topTabsList,
    handleTabsList,
    handleTabsDel,
  }
})
