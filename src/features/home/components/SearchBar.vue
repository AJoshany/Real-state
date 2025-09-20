<template>
  <section class="search-bar">
    <form @submit.prevent="" class="input-container">
      <img class="search-icon" src="/assets/icons/search-icon.svg" alt="search icon" />
      <input
        class="search-field"
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        placeholder="Search by address, city, or ZIP"
      />
    </form>
    <img class="filter-icon" src="/assets/icons/filter-icon.svg" alt="filter icon" />
  </section>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
})

defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
.search-bar {
  display: flex;
  gap: 1.2rem;

  height: 5rem;
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
