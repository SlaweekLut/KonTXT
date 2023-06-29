import './assets/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import ru from './locales/ru'
import en from './locales/en'

import App from './App.vue'
import router from './router'
import Popper from "vue3-popper";
import { createHead } from "unhead"

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

app.component("Popper", Popper);
app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
