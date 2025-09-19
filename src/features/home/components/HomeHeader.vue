<template>
  <header class="header">
    <div class="header__content">
      <p class="header__text">Let's Find Your</p>
      <h2 class="header__title">Favorite Home</h2>
    </div>
    <div class="image-container">
      <img class="user-image" src="" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__content {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-size: 1.7rem;
    color: var(--color-gray-300);
  }

  h2 {
    font-size: 1.9rem;
    color: var(--color-text-primary);
  }
}

.image-container {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: var(--color-gray-300);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
}
</style>
