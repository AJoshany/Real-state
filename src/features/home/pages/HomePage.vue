<template>
  <main class="home-page">
    <section class="home-page__group">
      <home-header />
      <search-bar v-model="homeStore.query" />
      <ul class="cards-list--small">
        <li v-for="house in appStore.houses" :key="house.id">
          <house-card-small :house="house" />
        </li>
      </ul>

      <h2 class="header--secondary">Near You</h2>

      <ul class="cards-list--detailed">
        <li v-for="house in appStore.houses" :key="house.id">
          <house-card-detailed :house="house" />
        </li>
      </ul>
      <button @click="authStore.sendDatas('signOut')">signOut</button>
      <bottom-nav-bar />
    </section>
  </main>
</template>

<script setup>
import { useAuthStore } from '@/features/auth/store/auth'
import { useAppStore } from '@/store/store'
import { useHomeStore } from '../store/home'
import HomeHeader from '../components/HomeHeader.vue'
import SearchBar from '../components/SearchBar.vue'
import HouseCardSmall from '../components/HouseCardSmall.vue'
import HouseCardDetailed from '../components/HouseCardDetailed.vue'
import BottomNavBar from '../components/BottomNavBar.vue'

const authStore = useAuthStore()
const homeStore = useHomeStore()
const appStore = useAppStore()
defineOptions({
  name: 'HomePage',
})
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 1.6rem;
}

.home-page__group {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  width: 100%;
  max-width: 40rem;
  min-width: 28rem;
}

.cards-list--small {
  display: flex;
  gap: 1.8rem;
  overflow: scroll;
}

.header--secondary {
  font-size: 2rem;
  font-weight: bold;
}

.cards-list--detailed {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}
</style>
