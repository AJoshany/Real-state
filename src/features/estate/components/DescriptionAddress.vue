<template>
  <section class="address-section">
    <header class="header">
      <h2 class="section-header">Address</h2>
      <p class="header__link">View on Map</p>
    </header>
    <div class="address">
      <div class="address__content">
        <span>
          <img class="address__icon" src="/assets/icons/location1.svg" alt="location icon" />
        </span>
        <p class="address__text">Lorem Ipsum is simply dummy text</p>
      </div>
      <div class="address__map">
        <img src="/assets/images/map-image.png" alt="map image" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.address-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-text-secondary);
}

.header__link {
  font-size: 1.2rem;
  color: var(--color-primary);
}

.section-header {
  font-size: 1.5rem;
  padding-bottom: 1rem;
}

.address {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.address__content {
  display: flex;
  gap: 1rem;
  font-size: 1.3rem;
}

.address__icon {
  width: 1.4rem;
}
</style>
