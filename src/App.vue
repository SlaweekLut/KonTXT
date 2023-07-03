<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Header from '@/components/Header.vue'
import LocaleSwitcher from './components/LocaleSwitcher.vue';
import Aside from './components/Aside.vue';
import { computed } from 'vue';

const route = useRoute()
const currentName = computed(() => route.name)
</script>

<template>
  <Header/>
  <div class="main-container">
    <RouterView />
  </div>
  <Aside class="aside" :class="{'aside--main': currentName === 'reputation' || currentName === 'cutaway'}"/>
  <LocaleSwitcher class="locale"/>
</template>

<style scoped lang="scss">
.main-container {
  max-width: calc(525px + 40px);
  margin: 40px auto 0;
  width: 100%;
  padding: 0px 20px 60px;
}
.aside {
  position: fixed;
  top: 160px;
  left: 40px;
  &--main {
    top: 125px;
  }
  @include screen(1199.98px) {
    display: none;
  }
}
.locale {
  position: fixed;
  bottom: 40px;
  left: 40px;
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
