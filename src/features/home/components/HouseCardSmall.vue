<script setup>
import { useBookmarkStroe } from '../store/bookmark'

defineProps({
  house: {
    type: Object,
    required: true,
  },
})

const bookmarkStore = useBookmarkStroe()
</script>

<template>
  <figure class="house-card">
    <div class="image__container">
      <img class="house__image" :src="house.gallery[0]" alt="house image" />
    </div>
    <div class="card__detail">
      <div class="card__content">
        <h3 class="house__name">{{ house.name }}</h3>
        <span class="house__price">${{ house.price }}/month</span>
        <p class="house__location">
          <img src="/icons/location-icon.svg" alt="location icon" />
          <span>{{ house.address }}</span>
        </p>
      </div>
      <span @click="bookmarkStore.toggleBookmark(house)" class="card__bookmark">
        <img
          :src="
            house.isBookmarked
              ? 'src/assets/img/carSmallBookmarked.svg'
              : 'src/assets/img/carSmallnotBookmarked.svg'
          "
          alt="bookmark icon"
        />
      </span>
    </div>
  </figure>
</template>

<style lang="scss" scoped>
.house-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  width: clamp(15rem, 25rem, 35rem);
  margin: 1rem;
  padding: 1.4rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-0.2rem);
  }
}

.image__container {
  overflow: hidden;

  width: 100%;
  height: 15rem;
  background-color: var(--color-gray-100);
  border-radius: 10px;
}

.house__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.card__detail {
  display: flex;
  justify-content: space-between;
  align-items: end;

  width: 100%;
}

.card__content {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 1.5rem;
    color: var(--color-text-primary);
    font-weight: 600;
  }
}

.house__price {
  font-size: 1.1rem;
  color: var(--color-primary);
}

.house__location {
  display: flex;
  gap: 0.2rem;
  font-size: 1.1rem;
  color: var(--color-gray-100);
}

.card__bookmark {
  padding: 0.9rem 1.1rem;
  background-color: var(--color-text-tin-100);
  border-radius: 12px;
}
</style>
