import { createRouter, createWebHistory } from 'vue-router'
import SignInPage from '@/features/auth/pages/SignInPage.vue'
import SignUpPage from '@/features/auth/pages/SignUpPage.vue'

const routes = [
  {
    path: '/sign-in',
    name: 'SignInPage',
    component: SignInPage,
  },
  {
    path: '/sign-up',
    name: 'SignUpPage',
    component: SignUpPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
