import './assets/main.scss'
import 'boxicons/css/boxicons.min.css'

// https://michalsnik.github.io/aos/
import AOS from 'aos'
AOS.init()

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
