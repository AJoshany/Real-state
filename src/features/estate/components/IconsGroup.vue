<template>
  <section class="icons-section">
    <h2 v-if="sectionName" class="icons-header">
      {{ sectionName.charAt(0).toUpperCase() + sectionName.slice(1) }}
    </h2>
    <ul class="icons">
      <slot></slot>
    </ul>
  </section>
</template>

<script setup>
defineProps({
  house: {
    type: Object,
    required: true,
  },
  sectionName: {
    type: String,
  },
})
</script>

<style lang="scss" scoped>
.icons-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 2rem 0;
}

.icons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.icons-header {
  font-size: 1.5rem;
}
</style>
