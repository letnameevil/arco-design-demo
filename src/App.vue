<script setup>
import { useGlobalLoadingStore } from '@/store'
const loadingStore = useGlobalLoadingStore()
</script>

<template>
  <a-spin :loading="loadingStore.isGlobalLoading" :size="32" tip="This may take a while...">
    <div id="app-container">
      <RouterView />
    </div>
  </a-spin>
</template>

<style scoped lang="less">
.arco-spin,
#app-container {
  width: 100%;
  height: 100%;
}
</style>
