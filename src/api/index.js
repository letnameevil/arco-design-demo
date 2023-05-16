import EvRequest from '@/utils/request'

export const request = new EvRequest({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 5000,
})
