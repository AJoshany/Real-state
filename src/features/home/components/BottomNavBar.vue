<template>
  <nav class="nav-main">
    <router-link to="/" class="nav-link" :class="{ 'active-link': route.path == '/' }">
      <img src="/assets/icons/home.svg" alt="" />
    </router-link>
    <router-link to="/" class="nav-link">
      <img src="/assets/icons/location2.svg" alt="" />
    </router-link>
    <router-link to="/dashboard" class="nav-link">
      <img src="/assets/icons/bookmark.svg" alt="" />
    </router-link>
    <router-link
      to="/dashboard"
      class="nav-link"
      :class="{ 'active-link': route.path == '/dashboard' }"
    >
      <img src="/assets/icons/person.svg" alt="" />
    </router-link>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped>
.nav-main {
  width: 100%;
  height: 64px;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10;
  background-color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.nav-link::after {
  content: '';
  display: inline-block;
  width: 0;
  height: 0;
  background-color: #3c94ff;
  border-radius: 100%;
  transition: all 0.2s ease;
}

.nav-link:hover::after {
  width: 5px;
  height: 5px;
}

.active-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}
.active-link::after {
  content: '';
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background-color: #3c94ff;
}
</style>
