<script setup>
import { reactive, ref } from 'vue'
import CryptoJS from 'crypto-js'

import { useUserStore } from '@/store'

import Storage from '@/utils/storage'

import { useRouter } from 'vue-router'

import { $api_login, $api_getAuthorities } from '@/api/login'
const loginFormRef = ref()
const userStore = useUserStore()
const Router = useRouter()

const form = reactive({
  username: 'admin',
  password: 'admin',
})

const handleSubmit = () => {
  loginFormRef.value.validate(async err => {
    if (!err) {
      const userInfo = await $api_login({ username: form.username, password: CryptoJS.MD5(form.password).toString() })
      // 将用户信息存入本地存储
      Storage.set('userInfo', userInfo)
      // 存token
      Storage.set('token', userInfo.access_token)
      // 获取侧边栏权限接口
      const { data: sideMenuCodeList } = await $api_getAuthorities()
      Storage.set('menuCodeList', sideMenuCodeList)
      userStore.storeHandleAsyncRoutes()
      Router.push('/')
    }
  })
}
</script>

<template>
  <div class="login-page">
    <a-row class="row-style">
      <a-col :span="10">
        <div class="left-plane">
          <span class="login-text">login</span>
        </div>
      </a-col>
      <a-col :span="14">
        <div class="right-plane">
          <a-form :model="form" @submit="handleSubmit" ref="loginFormRef">
            <a-form-item field="username" label="用户名" tooltip="请输入用户名" validate-trigger="input" required>
              <a-input v-model="form.username" placeholder="请输入用户名" />
            </a-form-item>
            <a-form-item field="password" label="密码" tooltip="请输入密码" validate-trigger="input" required>
              <a-input v-model="form.password" type="password" placeholder="请输入密码" />
            </a-form-item>
            <a-form-item>
              <a-button type="primary" long html-type="submit">登录</a-button>
            </a-form-item>
          </a-form>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped lang="less">
.login-page {
  width: 100vw;
  height: 100vh;
}
.right-plane {
  padding: 0 150px;
}

.row-style {
  height: 100%;
}
.arco-col {
  height: 100%;
}
.left-plane {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  font-weight: 700;
  color: #fff;
  background-color: #165dff;
  height: 100%;
}

.right-plane {
  display: flex;
  height: 100%;
  background: #44434360;
  align-items: center;
  justify-content: center;
}
</style>
