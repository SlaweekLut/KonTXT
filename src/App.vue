<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <b-container fluid="lg">
    <RouterView />
  </b-container>
</template>

<style scoped lang="scss">
.container {
  background: var(--color-dynamic-white);
}
</style>
