<template>
  <section class="estate__title">
    <div class="title__header">
      <div class="title__rating">
        <img src="/assets/icons/star.svg" alt="" />
        <span>{{ house.rating }}</span>
      </div>
      <p class="title__type">Apartment</p>
    </div>
    <div class="title__body">
      <h2 class="title__main-text">{{ house.name }}</h2>
      <p class="title__location">{{ house.address }}</p>
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

<style scoped>
.estate__title {
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 1rem;
}

.title__header {
  display: flex;
  padding-top: 1.5rem;
  width: 100%;
  justify-content: space-between;
}

.title__rating {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  color: var(--color-gray-200);

  font-size: 1.2rem;
}

.title__type {
  color: var(--color-primary);
  padding: 0.5rem 0.8rem;
  background-color: #f4f6f9;
  border-radius: var(--radius-xsm);

  font-size: 1.3rem;
}

.title__body {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.title__main-text {
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.title__location {
  color: var(--color-gray-400);
  font-size: 1.3rem;
}
</style>
