<template>
  <main class="dash-main">
    <section class="dash-page__group">
      <h1 class="dash__heading">Dashboard</h1>
      <div>
        <h2 class="bookmark__title">Your Bookmarks</h2>
        <ul class="cards-list--small">
          <li v-for="house in appStore.bookmarkedHouses" :key="house.id">
            <house-card-small :house="house" />
          </li>
        </ul>
      </div>

      <bottom-nav-bar />
    </section>
  </main>
</template>

<script setup>
import BottomNavBar from '@/features/home/components/BottomNavBar.vue'
import HouseCardSmall from '@/features/home/components/HouseCardSmall.vue'
import { useBookmarkStroe } from '@/features/home/store/bookmark'
import { useAppStore } from '@/store/store'
import { onMounted } from 'vue'

const appStore = useAppStore()
const bookmarkStore = useBookmarkStroe()
onMounted(async () => {
  await bookmarkStore.loadBookmarks()
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
  margin-bottom: 70px;
}
.dash-page__group {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  width: 100%;
  max-width: 40rem;
  min-width: 28rem;
}
.dash__heading {
  text-align: center;
}
</style>
