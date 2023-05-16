import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useGlobalLoadingStore = defineStore('globalLoading', () => {
  const isGlobalLoading = ref(false)
  return {
    isGlobalLoading,
  }
})
