import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import ErrorPage404 from '../views/ErrorPage404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/politique-de-confidentialite',
      name: 'privacy-policy',
      component: PrivacyPolicy
    },
    {
      path: '/:pathMatch(.*)*', // Capturer toutes les autres routes
      name: 'error404',
      component: ErrorPage404
    }
  ]
})

export default router
