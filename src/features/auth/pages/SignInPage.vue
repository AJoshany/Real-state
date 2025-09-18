<template>
  <main class="sign-in">
    <form @submit.prevent="handleSubmit" class="sign-in__form">
      <h2 class="sign-in__header">Sign In</h2>
      <input-field label="Email" placeholder="Enter your email" v-model="authStore.inputEmail" />
      <input-field
        label="Password"
        placeholder="Enter your password"
        inputType="password"
        v-model="authStore.inputPassword"
      />
      <button class="sign-in__submit">Sign In</button>
    </form>
  </main>
</template>

<script setup>
import { useAuthStore } from '../store/auth'
import InputField from '@/components/InputField.vue'

defineOptions({
  name: 'SignInPage',
})

const authStore = useAuthStore()
async function handleSubmit() {
  const data = await authStore.signUp()
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.sign-in {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
  padding: 1rem;
}

.sign-in__form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  width: 100%;
  max-width: 400px;
  min-width: 280px;
  margin: 1rem;
  padding: 1.5rem;
}

.sign-in__header {
  font-size: 18px;
}

.sign-in__submit {
  background-color: #006eff;
  color: #fff;
  width: 100%;
  font-size: 17px;
  padding: 15px 0;
  border-radius: 70px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.sign-in__submit:hover {
  background-color: #0057cc;
}
</style>
