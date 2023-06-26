<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import LocaleSwitcher from './components/LocaleSwitcher.vue';
import Aside from './components/Aside.vue';
</script>

<template>
  <Header/>
  <div class="main-container">
    <RouterView />
  </div>
  <Aside class="aside"/>
  <LocaleSwitcher class="locale"/>
</template>

<style scoped lang="scss">
.main-container {
  max-width: calc(633px + 40px);
  margin: 40px auto 0;
  width: 100%;
  padding: 0px 20px 60px;
}
.aside {
  position: absolute;
  top: 187px;
  left: calc((100vw - min(1366px, 100vw)) / 2 + 40px);
  @include screen(1199.98px) {
    display: none;
  }
}
.locale {
  position: fixed;
  bottom: 40px;
  left: calc((100vw - min(1366px, 100vw)) / 2 + 40px);
  @include screen(1199.98px) {
    display: none;
  }
}
</style>
<style lang="scss">
body {
  background: var(--color-dynamic-white);
}
</style>
