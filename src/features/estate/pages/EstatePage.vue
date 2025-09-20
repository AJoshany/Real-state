<template>
  <h1>{{ house }}</h1>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useAppStore } from '@/store/store'

const appStore = useAppStore()
const route = useRoute()

const houseId = route.params.id
const house = appStore.findHouseById(+houseId)

defineOptions({
  name: 'EstatePage',
})
</script>

<style lang="scss" scoped></style>
