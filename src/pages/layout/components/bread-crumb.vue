<script setup>
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

/**
 * utils
 * */
import { handleBreadcrumb } from '../utils/handle-breadcrumb'
const Route = useRoute()
const breadcrumbList = ref([])
watchEffect(() => {
  const currentRoutes = Route.matched
  const ret = handleBreadcrumb(currentRoutes)
  breadcrumbList.value = ret
})
</script>

<template>
  <a-breadcrumb :routes="breadcrumbList">
    <template #item-render="{ route, paths }">
      <span>{{ route.label }}</span>
    </template>
  </a-breadcrumb>
</template>
