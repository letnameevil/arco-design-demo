<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { $api_logout } from '@/api/logout'

/**
 * utils
 * */
import Storage from '@/utils/storage'

const Router = useRouter()
const modalVisible = ref(false)

const handleLogOut = v => {
  modalVisible.value = true
}

/**
 * 处理登逻辑
 * */
const handleLogout = async () => {
  const ret = await $api_logout()
  if (ret.success) {
    // 清空本地缓存
    Storage.clearAll()
    Router.push('/login')
  }
  modalVisible.value = false
}

const handleOk = () => {
  /**
   * 登出逻辑
   **/
  handleLogout()
}

const handleCancel = () => {
  modalVisible.value = false
}
</script>

<template>
  <div>
    <a-dropdown-button trigger="hover">
      Admin
      <template #icon>
        <icon-down />
      </template>
      <template #content>
        <a-doption @click="handleLogOut">Log out</a-doption>
      </template>
    </a-dropdown-button>
    <a-modal :visible="modalVisible" @ok="handleOk" @cancel="handleCancel" okText="确认" cancelText="取消" title-align="start" unmountOnClose>
      <template #title> 提示 </template>
      <div>确认退出登录吗？</div>
    </a-modal>
  </div>
</template>
