<template>
  <main class="dash-main">
    <section class="dash-page__group" v-if="showDash">
      <h1 class="dash__heading">Dashboard</h1>
      <div>
        <h2 class="dash__title">Your Bookmarks</h2>
        <div class="empty-state-text" v-if="appStore.bookmarkedHouses.length == 0">
          <p>You have no bookmark yet</p>
        </div>
        <ul class="cards-list--small" v-else>
          <li v-for="house in appStore.bookmarkedHouses" :key="house.id">
            <house-card-small :house="house" />
          </li>
        </ul>
      </div>

      <div>
        <h2 class="dash__title">Booked Houses</h2>
        <div class="empty-state-text" v-if="appStore.bookedHouses.length == 0">
          <p>You have no booked house yet</p>
        </div>
        <ul class="cards-list--small" v-else>
          <li v-for="house in appStore.bookedHouses" :key="house.id">
            <house-card-small :house="house">
              <button @click="appStore.toggleBookedEstate(house)" class="unbook-btn">Unbook</button>
            </house-card-small>
          </li>
        </ul>
      </div>

      <button class="sign-out-btn" @click="authStore.signOut()">Sign Out</button>

      <bottom-nav-bar />
    </section>
  </main>
</template>

<script setup>
import { useAuthStore } from '@/features/auth/store/auth'
import BottomNavBar from '@/features/home/components/BottomNavBar.vue'
import HouseCardSmall from '@/features/home/components/HouseCardSmall.vue'
import { useBookmarkStroe } from '@/features/home/store/bookmark'
import { useAppStore } from '@/store/store'
import { onMounted, ref } from 'vue'

const authStore = useAuthStore()
const appStore = useAppStore()
const bookmarkStore = useBookmarkStroe()
const showDash = ref()
onMounted(async () => {
  showDash.value = false
  await bookmarkStore.loadBookmarks()
  await appStore.loadbookedEstates()
  showDash.value = true
})
</script>

<style scoped>
.cards-list--small {
  display: flex;
  gap: 1.8rem;
  overflow: scroll;
}
.dash-main {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 1.6rem;
  margin-top: 2rem;
  margin-bottom: 70px;
}
.dash-page__group {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  max-width: 40rem;
  min-width: 28rem;
}
.dash__heading {
  text-align: center;
}

.unbook-btn {
  background-color: var(--color-primary);
  color: var(--color-white);
  font-size: 1.3rem;
  font-weight: 600;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: var(--radius-xl);
  cursor: pointer;
  transition: all 0.2s ease;
}
.unbook-btn:hover {
  background-color: var(--color-primary-hover);
}
.empty-state-text {
  text-align: center;
  margin-top: 4.5rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
}

.sign-out-btn {
  background-color: var(--color-red-600);
  color: var(--color-white);
  font-size: 1.3rem;
  font-weight: 600;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: var(--radius-xl);
  cursor: pointer;
  transition: all 0.2s ease;
}
.sign-out-btn:hover {
  background-color: var(--color-red-600-hover);
}
</style>
