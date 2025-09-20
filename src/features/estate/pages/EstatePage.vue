<template>
  <main class="estate-main">
    <estate-header :house="house" />
    <estate-footer :house="house" v-show="showBookBtn" />
    <section class="estate__container">
      <estate-title :house="house" />
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

const appStore = useAppStore()
const route = useRoute()
const showBookBtn = ref(false)

const houseId = route.params.id
const house = appStore.findHouseById(+houseId)

onMounted(async () => {
  await appStore.loadbookedEstates()
  showBookBtn.value = true
})

defineOptions({
  name: 'EstatePage',
})
</script>

<style lang="scss" scoped>
.estate__container {
  padding: 0 1.5rem;
}
</style>
