<template>
  <search class="search-bar">
    <div class="input-container">
      <img class="search-icon" src="/icons/search-icon.svg" alt="search icon" />
      <input class="search-field" type="text" placeholder="Search by address, city, or ZIP" />
    </div>
    <img class="filter-icon" src="/icons/filter-icon.svg" alt="filter icon" />
  </search>
</template>

<script setup></script>

<style lang="scss" scoped>
.search-bar {
  display: flex;
  gap: 1.2rem;
  height: 40px;
  margin: 3.5rem;
}

.input-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.search-icon {
  position: absolute;
  top: 25%;
  left: 2rem;
}

.search-field {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
  padding-left: 5rem;
  box-shadow: 0 0 20px 5px rgb(0, 0, 0, 0.1);
}

.filter-icon {
  cursor: pointer;
}
</style>
