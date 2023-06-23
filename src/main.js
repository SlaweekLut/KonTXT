import './assets/main.scss'
import { createApp, Vue } from 'vue'
import { createPinia } from 'pinia'
import { BootstrapVue } from 'bootstrap-vue'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App)
Vue.use(BootstrapVue)
app.use(createPinia())
app.use(router)

app.mount('#app')