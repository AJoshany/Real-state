<template>
  <div class="facility-container">
    <img class="facility-icon" :src="facilityIcon" :alt="facilityName" />
    <span class="facility-name">{{ facilityName }}</span>
  </div>
</template>

<script setup>
defineProps({
  facilityName: {
    type: String,
    required: true,
  },
  facilityIcon: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.facility-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  max-width: 100px;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 10px 10px rgb(0, 0, 0, 0.1);
}

.facility-icon {
  width: 30px;
  height: 30px;
}

.facility-name {
  font-size: 1.4rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  overflow: hidden;
  text-align: center;
}
</style>
