<template>
  <section class="estate__footer">
    <div class="footer__left">
      <p class="footer__total-price">Total Price</p>
      <p class="footer__price">
        ${{ house.price }}
        <span class="footer__month">/month</span>
      </p>
    </div>
    <div class="footer__right">
      <button
        class="footer__btn"
        @click="appStore.toggleBookedEstate(house)"
        :disabled="house.isBooked"
      >
        Book Now
      </button>
    </div>
  </section>
</template>

<script setup>
import { useAppStore } from '@/store/store'

defineProps({
  house: {
    type: Object,
    required: true,
  },
})

const appStore = useAppStore()
</script>

<style>
.estate__footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-white);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 10;
  width: 100%;
}

.footer__right {
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer__btn {
  background-color: var(--color-primary);
  color: var(--color-white);
  font-size: 1.7rem;
  font-weight: 600;
  padding: 0.8rem 3.5rem;
  border: none;
  border-radius: var(--radius-xl);
  cursor: pointer;
}

.footer__btn:disabled {
  opacity: 0.5;
  cursor: default;
}

.footer__left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
}

.footer__total-price {
  font-size: 1.5rem;
  font-weight: 600;
}

.footer__price {
  color: var(--color-primary);
  font-size: 2.5rem;
  font-weight: 500;
}

.footer__month {
  color: var(--color-text-secondary);
  font-size: 1.6rem;
  font-weight: 500;
}
</style>
