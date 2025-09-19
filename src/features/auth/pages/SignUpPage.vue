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
    </form>
  </main>
</template>

<script setup>
import InputField from '@/components/InputField.vue'
import { useAuthStore } from '../store/auth'

defineOptions({
  name: 'SignUpPage',
})

const authStore = useAuthStore()
</script>

<style lang="scss" scoped>
.sign-up {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
  padding: 1rem;
}

.sign-up__form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  width: 100%;
  max-width: 400px;
  min-width: 280px;
  margin: 1rem;
  padding: 1.5rem;

  h2 {
    font-size: 1.2rem;
  }
}

.sign-up__submit {
  background-color: #006eff;
  color: #fff;
  width: 100%;
  font-size: 17px;
  padding: 15px 0;
  border-radius: 70px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0057cc;
  }
}
</style>
