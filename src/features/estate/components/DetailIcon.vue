<template>
  <div class="detail-container">
    <img class="detail-icon" :src="datailIcon" :alt="detailValue" />
    <div class="detail-content">
      <span class="detail-value">{{ detailValue }}</span>
      <span class="detail-unit">{{ datailUnit }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  detailValue: {
    type: String,
    required: true,
  },
  datailIcon: {
    type: String,
    required: true,
  },
  datailUnit: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.detail-container {
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

.detail-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.detail-icon {
  width: 30px;
  height: 30px;
}

.detail-value {
  font-size: 1.4rem;
  color: var(--color-primary);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  overflow: hidden;
  text-align: center;
}

.detail-unit {
  font-size: 1.2rem;
}
</style>
