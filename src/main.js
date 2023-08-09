import './assets/main.scss'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import ru from './locales/ru'
import en from './locales/en'
import VueEasyLightbox from 'vue-easy-lightbox'
import MasonryWall from '@yeger/vue-masonry-wall'
import { createMetaManager } from 'vue-meta'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

import App from './App.vue'
import router from './router'
import Popper from "vue3-popper";
import { SchemaOrgUnheadPlugin } from '@vueuse/schema-org'
import { createHead } from "@vueuse/head"

const i18n = createI18n({
	locale: 'ru',
	legacy: false,
	messages: {
		ru: ru,
		en: en
	}
})

const app = createApp(App)
const head = createHead()
head.use(SchemaOrgUnheadPlugin({
  // config
  host: 'https://KonTXT.me',
}, () => {
  const route = router.currentRoute.value
  return {
    path: route.path,
    ...route.meta,
  }
}))

app.component("Popper", Popper);
app.use(createPinia())
app.use(createMetaManager())
app.use(MasonryWall)
app.use(PerfectScrollbar, {
  watchOptions: true,
  options: {
    suppressScrollX: true
  }
})
app.use(VueEasyLightbox)
app.use(i18n)
app.use(router)
app.use(head)

app.mount('#app')
