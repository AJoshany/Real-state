<template>
  <main class="estate-main">
    <estate-header :house="house" />
    <estate-footer :house="house" v-show="showBookBtn" />
    <section class="estate__container">
      <estate-title :house="house" />
      <div class="estate__body__navbar">
        <p
          @click="toggleTab"
          class="estate__nav-item"
          :class="{ 'nav-active': whichTab == 'Description' }"
        >
          Description
        </p>
        <p
          @click="toggleTab"
          class="estate__nav-item"
          :class="{ 'nav-active': whichTab == 'Gallery' }"
        >
          Gallery
        </p>
        <p
          @click="toggleTab"
          class="estate__nav-item"
          :class="{ 'nav-active': whichTab == 'Review' }"
        >
          Review
        </p>
      </div>
      <estate-gallery v-if="whichTab == 'Gallery'" :house="house" />
    </section>
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useAppStore } from '@/store/store'
import EstateFooter from '../components/EstateFooter.vue'
import { onMounted, ref } from 'vue'
import EstateHeader from '../components/EstateHeader.vue'
import EstateTitle from '../components/EstateTitle.vue'
import EstateGallery from '../components/EstateGallery.vue'

const appStore = useAppStore()
const route = useRoute()
const showBookBtn = ref(false)
const whichTab = ref('')

const houseId = route.params.id
const house = appStore.findHouseById(+houseId)

onMounted(async () => {
  await appStore.loadbookedEstates()
  showBookBtn.value = true
})

function toggleTab(event) {
  whichTab.value = event.target.innerText
}

defineOptions({
  name: 'EstatePage',
})
</script>

<style lang="scss" scoped>
.estate__container {
  padding: 0 2rem;
  margin-bottom: 90px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.estate__body__navbar {
  display: flex;
  width: 100%;
  justify-content: space-around;
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 1rem;
}

.estate__nav-item {
  padding-bottom: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid var(--color-gray-100);
}
.nav-active {
  color: var(--color-primary);
  border-bottom: 3px solid var(--color-primary);
  padding-bottom: 1rem;
}
</style>
