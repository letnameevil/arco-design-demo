import { useUserStore } from '@/store'
export default function install() {
  const userStore = useUserStore()
  userStore.storeHandleAsyncRoutes()
}
