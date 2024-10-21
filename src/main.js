import './assets/main.scss'
import 'boxicons/css/boxicons.min.css'

// https://michalsnik.github.io/aos/
import AOS from 'aos'
AOS.init()

import { createHead } from '@unhead/vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const head = createHead()
app.use(head)
app.use(createPinia())
app.use(router)

app.mount('#app')
