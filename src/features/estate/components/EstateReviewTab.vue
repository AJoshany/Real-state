<template>
  <h1>review</h1>
  <ul>
    <estate-review v-for="review in reviews" :review="review" :key="review.reviewerName" />
  </ul>
</template>

<script setup>
import EstateReview from './EstateReview.vue'

defineProps({
  reviews: {
    type: Array,
    required: true,
  },
})
</script>

<style lang="scss" scoped></style>
