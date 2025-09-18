import { createRouter, createWebHistory } from 'vue-router'
import SignInPage from '@/features/auth/pages/SignInPage.vue'

const routes = [
  {
    path: '/sign-in',
    name: 'SignInPage',
    component: SignInPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
