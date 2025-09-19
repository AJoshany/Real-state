<template>
  <section class="detailed-card">
    <div class="dcard__img-sec">
      <img
        class="dcard__img-sec"
        src="https://images2.dwell.com/photos/6176523132546707456/6626530906155339776/original.jpg?auto=format&q=35&w=800"
        alt=""
      />
    </div>
    <div class="dcard__details">
      <div class="dcard__datatils__header">
        <div class="details__header__point">
          <img src="/src/assets/img/star.svg" alt="" />
          <span>{{ house.rating }}</span>
        </div>
        <div class="details__header__type">
          <p>Apartment</p>
        </div>
      </div>
      <div class="dcard__details__body">
        <h3 class="details__body__title">{{ house.name }}</h3>
        <div class="details__body__location">
          <img src="/src/assets/img/location1.svg" alt="" />
          <span>{{ house.address }}</span>
        </div>
      </div>
      <div class="dcard__details__footer">
        <div class="details__footer__states">
          <div class="footer__states__state">
            <img src="/src/assets/img/sqrt.svg" alt="" />
            <span>{{ house.sqft }}</span>
          </div>
          <div class="footer__states__state">
            <img src="/src/assets/img/bed.svg" alt="" />
            <span>{{ house.bedrooms }}</span>
          </div>
        </div>
        <div class="footer__price">${{ house.price }}<span>/month</span></div>
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

<style scoped>
.detailed-card {
  background-color: var(--color-white);
  display: flex;
  align-items: center;
  padding: 1.2rem;
  border-radius: var(--radius-xl);
  gap: 1rem;
  max-width: 320px;
}

/* img */
.dcard__img-sec {
  width: 90px;
  height: 90px;
  background-color: gray;
  border-radius: var(--radius-sm);
  font-size: 1rem;
}

.dcard__img-sec {
  object-fit: cover;
}

/* details */
.dcard__details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  gap: 0.6rem;
}

/* header */

.dcard__datatils__header {
  display: flex;
  justify-content: space-between;
}

.details__header__point {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  color: var(--color-gray-200);

  font-size: 1.2rem;
}

.details__header__type {
  color: var(--color-primary);
  padding: 0.3rem 0.4rem;
  background-color: #f4f6f9;
  border-radius: var(--radius-xsm);
  opacity: 0.8;
}

/* body */

.details__body__title {
  font-size: 1.7rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.details__body__location {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: var(--color-text-primary-light);
}

/* Footer */
.dcard__details__footer {
  display: flex;
  justify-content: space-between;
}

.details__footer__states {
  display: flex;
  flex-grow: 1;
  gap: 1.5rem;
  align-items: center;
}

.footer__states__state {
  display: flex;
  align-items: center;
  gap: 0.2rem;
}

.footer__price {
  color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 500;
}
</style>
