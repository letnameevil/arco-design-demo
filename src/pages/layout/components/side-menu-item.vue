<script setup>
const props = defineProps({
  sideList: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <template v-for="it in sideList">
    <a-menu-item v-if="!it.children || it.children.length === 0" :key="it.name">
      {{ it.title }}
    </a-menu-item>

    <a-menu-item v-else-if="it.children.length && it.children[0]?.isSingleMenu" :key="it.children[0].name">
      <template #icon><icon-apps></icon-apps></template>
      {{ it.title }}
    </a-menu-item>

    <template v-else>
      <a-sub-menu :key="it.name">
        <template #icon><icon-apps></icon-apps></template>
        <template #title> {{ it.title }}</template>
        <side-menu-item :sideList="it.children"></side-menu-item>
      </a-sub-menu>
    </template>
  </template>
</template>
