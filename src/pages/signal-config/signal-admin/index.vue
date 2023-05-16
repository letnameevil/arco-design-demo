<script setup>
import { ref } from 'vue'
const activeName = ref(1)
const topTabsList = ref([
  {
    name: '1',
    key: 1,
  },
  {
    name: '2',
    key: 2,
  },
])
const handleTabClick = () => {}
const handleDelete = () => {}
const add = () => {
  activeName.value = 3
  topTabsList.value.push({
    name: '3',
    key: 3,
  })
}
</script>
<template>
  <a-tabs
    type="card-gutter"
    :editable="true"
    @change="handleTabClick"
    @delete="handleDelete"
    auto-switch
    size="small"
    :active-key="activeName"
  >
    <a-tab-pane v-for="item in topTabsList" :key="item.key" :title="item.name"> {{ item.name }}</a-tab-pane>
  </a-tabs>
  <a-button @click="add">新增</a-button>
</template>
