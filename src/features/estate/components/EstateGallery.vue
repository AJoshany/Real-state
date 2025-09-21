<template>
  <section class="gallery-main">
    <div class="gallery__header">
      <p>Gallery</p>
      <span>(400)</span>
    </div>
    <div class="gallery__body">
      <div v-for="(src, index) in house.gallery" :key="index" class="gallery__img">
        <img :src="src" alt="estate picture" />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  house: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.gallery-main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
}
.gallery__header {
  font-size: 1.4rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    color: var(--color-primary);
  }
}

.gallery__body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  justify-items: stretch;
  gap: 1rem;
}

.gallery__img {
  background-color: gray;
  min-height: 160px;
  overflow: hidden;
  border-radius: var(--radius-sm);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
