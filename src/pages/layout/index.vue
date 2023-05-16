<template>
  <a-layout class="layout-container">
    <a-layout-sider collapsible>
      <div class="logo" />
      <a-scrollbar style="height: calc(100vh - 98px); overflow: auto">
        <SiderMenu />
      </a-scrollbar>

      <!-- trigger -->
      <template #trigger="{ collapsed }">
        <IconCaretRight v-if="collapsed"></IconCaretRight>
        <IconCaretLeft v-else></IconCaretLeft>
      </template>
    </a-layout-sider>

    <a-layout>
      <a-layout-header class="layout-header">
        <div class="header-box">
          <BreadCrumb class="left" />
          <RightOpt class="right" />
        </div>
      </a-layout-header>
      
      <TopTabs />

      <a-layout>
        <a-scrollbar style="height: calc(100vh - 75px); overflow: auto">
          <a-layout-content class="layout-content">
            <RouterView></RouterView>
          </a-layout-content>
        </a-scrollbar>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script setup>
import { IconCaretRight, IconCaretLeft } from '@arco-design/web-vue/es/icon'

/**
 * 组件
 **/
import BreadCrumb from './components/bread-crumb.vue'
import TopTabs from './components/top-tabs.vue'
import SiderMenu from './components/sider-menu.vue'
import RightOpt from './components/right-opt.vue'
</script>
<style scoped>
.logo {
  height: 50px;
  background-color: blue;
}
.layout-container {
  height: 100vh;
  background: var(--color-fill-2);
  border: 1px solid var(--color-border);
}

.layout-header {
  height: 50px;
  background-color: #fff;
}

.header-box {
  padding-left: 20px;
  padding-right: 20px;
  height: 100%;
  display: flex;
  align-items: center;
}

.left {
  flex: 1;
}

:deep(.arco-layout) {
  overflow: hidden;
}

:deep(.arco-layout-sider-children) {
  overflow-y: hidden;
}
</style>
