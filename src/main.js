import './assets/main.scss'
import 'boxicons/css/boxicons.min.css'

// https://michalsnik.github.io/aos/
import AOS from 'aos'
AOS.init()

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VueGtag from 'vue-gtag'

const app = createApp(App).use(VueGtag, {
  config: { id: 'G-NDF4QWZKEL' }
})

app.use(createPinia())
app.use(router)

app.mount('#app')
