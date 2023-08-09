<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Header from '@/components/Header.vue'
import LocaleSwitcher from './components/LocaleSwitcher.vue';
import Aside from './components/Aside.vue';
import { computed, ref } from 'vue';
import { watch } from 'vue';

const route = useRoute()
const currentName = computed(() => route.name)
</script>

<template>
  <perfect-scrollbar>
    <Header/>
    <div class="main-container">
      <RouterView />
    </div>
    <Aside class="aside" :class="{'aside--main': currentName === 'reputation' || currentName === 'cutaway'}"/>
    <LocaleSwitcher class="locale"/>
  </perfect-scrollbar>
</template>

<style lang="scss">
body {
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}
.ps {
  max-height: 100vh;
  .ps__thumb-y {
    opacity: 0;
    transition: background-color .2s linear, width .2s ease-in-out, opacity .2s ease-in-out;
  }
  &--scrolling-y {
    .ps__thumb-y {
      opacity: 1;
    }
  }
}
</style>

<style scoped lang="scss">
.main-container {
  max-width: calc(525px + 40px);
  margin: 40px auto 0;
  width: 100%;
  padding: 0px 20px 60px;
  @include screen(1199.98px) {
    max-width: calc(620px + 40px);
  }
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
