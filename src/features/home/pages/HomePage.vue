<template>
  <div>
    Home

    <button @click="authStore.sendDatas('signOut')">signOut</button>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/features/auth/store/auth'

const authStore = useAuthStore()
defineOptions({
  name: 'HomePage',
})
</script>

<style></style>
