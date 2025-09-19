<template>
  <div>
    Home
    <HouseCardDetailed :house="appStore.houses[3]" />
    <button @click="authStore.sendDatas('signOut')">signOut</button>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/features/auth/store/auth'
import HouseCardDetailed from '../components/HouseCardDetailed.vue'
import { useAppStore } from '@/store/store'

const authStore = useAuthStore()
const appStore = useAppStore()
defineOptions({
  name: 'HomePage',
})
</script>

<style></style>
