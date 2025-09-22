<template>
  <main class="sign-up">
    <form class="sign-up__form" @submit.prevent="authStore.sendDatas('signUp')">
      <h2 class="sign-up__header">Sign Up</h2>
      <input-field
        label="Username"
        placeholder="Enter a username"
        v-model="authStore.inputUserName"
        :required="true"
      />
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
      <input-field
        label="Repeat Password"
        placeholder="Enter your password again"
        inputType="password"
        v-model="authStore.inputPasswordRepeat"
        :required="true"
      />
      <button class="sign-up__submit">Sign Up</button>
      <p class="sign-up__question">
        Already have an account?
        <span class="sign-in__btn" @click="router.push('/sign-in')">Sign In</span>
      </p>
    </form>
  </main>
</template>

<script setup>
import InputField from '@/components/InputField.vue'
import { useAuthStore } from '../store/auth'
import { useRouter } from 'vue-router'

defineOptions({
  name: 'SignUpPage',
})

const authStore = useAuthStore()

const router = useRouter()
</script>

<style lang="scss" scoped>
.sign-up {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
  padding: 1.6rem;
}

.sign-up__form {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  max-width: 40rem;
  min-width: 28rem;
  margin: 1.6rem;
  padding: 2rem;

  h2 {
    font-size: 1.8rem;
  }
}

.sign-up__submit {
  background-color: var(--color-primary);
  color: #fff;
  width: 100%;
  font-size: 1.7rem;
  padding: 1.5rem 0;
  border-radius: 7rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-primary-hover);
  }
}

.sign-up__question {
  font-size: 1.4rem;
  color: var(--color-text-secondary);
}
.sign-in__btn {
  color: var(--color-primary);
  cursor: pointer;
}
</style>
