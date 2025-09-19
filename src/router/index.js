import { createRouter, createWebHistory } from 'vue-router'
import SignInPage from '@/features/auth/pages/SignInPage.vue'
import SignUpPage from '@/features/auth/pages/SignUpPage.vue'
import { useAuthStore } from '@/features/auth/store/auth'
import { createPinia } from 'pinia'
import HomePage from '@/features/home/pages/HomePage.vue'

const pinia = createPinia()
const authStore = useAuthStore(pinia)

async function isLogin() {
  await authStore.getUser()
  if (authStore.user) return true
  return false
}
const routes = [
  {
    path: '/sign-in',
    name: 'SignInPage',
    component: SignInPage,
    beforeEnter: async (to, from, next) => {
      if (await isLogin()) {
        next('/')
      } else {
        next()
      }
    },
  },
  {
    path: '/sign-up',
    name: 'SignUpPage',
    component: SignUpPage,
    beforeEnter: async (to, from, next) => {
      if (await isLogin()) {
        next('/')
      } else {
        next()
      }
    },
  },
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    beforeEnter: async (to, from, next) => {
      if (await isLogin()) {
        next()
      } else {
        next('/sign-in')
      }
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
