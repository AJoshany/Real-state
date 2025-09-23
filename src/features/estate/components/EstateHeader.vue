<template>
  <section class="estate__header">
    <div class="header__img-sec">
      <img :src="house.gallery[0]" class="estate__header__img" alt="estate pic" />
    </div>
    <div class="estate__header__btns">
      <div>
        <div @click="handleBackBtn" class="header__icon">
          <img src="/assets/icons/back.svg" alt="back" />
        </div>
      </div>
      <div class="header__btns__right">
        <div class="header__icon">
          <img src="/assets/icons/share.svg" alt="share" />
        </div>
        <div class="header__icon">
          <img src="/assets/icons/heart.svg" alt="heart" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

defineProps({
  house: {
    type: Object,
    required: true,
  },
})
const router = useRouter()

function handleBackBtn() {
  router.go(-1)
}
</script>

<style scoped>
.estate__header {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header__img-sec {
  height: 380px;
  width: 100%;
  overflow: hidden;
  max-width: 500px;
}

.estate__header__img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.estate__header__btns {
  position: absolute;
  display: flex;
  top: 30px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}
.header__btns__right {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.header__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-white);
}
.header__icon img {
  width: 20px;
  height: 20px;
}
</style>
