<template>
  <main class="sign-in">
    <form @submit.prevent="authStore.sendDatas('signIn')" class="sign-in__form">
      <h2 class="sign-in__header">Sign In</h2>
      <input-field
        label="Email"
        placeholder="Enter your email"
        v-model="authStore.inputEmail"
        inputType="email"
        :required="true"
      />
      <input-field
        label="Password"
        placeholder="Enter your password"
        inputType="password"
        v-model="authStore.inputPassword"
        :required="true"
      />
      <button class="sign-in__submit">Sign In</button>
      <p class="sign-in__question">
        Dont have an account?
        <span class="sign-up__btn" @click="router.push('/sign-up')">Sign Up</span>
      </p>
    </form>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/auth'
import InputField from '@/components/InputField.vue'

defineOptions({
  name: 'SignInPage',
})

const authStore = useAuthStore()

const router = useRouter()
</script>

<style scoped>
.sign-in {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
  padding: 1.6rem;
}

.sign-in__form {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  max-width: 400px;
  min-width: 280px;
  margin: 1.6rem;
  padding: 2rem;
}

.sign-in__header {
  font-size: 1.8rem;
}

.sign-in__submit {
  background-color: var(--color-primary);
  color: #fff;
  width: 100%;
  font-size: 1.7rem;
  padding: 1.5rem 0;
  border-radius: 7rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.sign-in__submit:hover {
  background-color: var(--color-primary-hover);
}
.sign-in__question {
  font-size: 1.4rem;
  color: var(--color-text-secondary);
}
.sign-up__btn {
  color: var(--color-primary);
  cursor: pointer;
}
</style>
