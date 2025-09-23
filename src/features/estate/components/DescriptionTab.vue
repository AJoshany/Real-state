<template>
  <section class="description-tab">
    <icons-group :house="house">
      <detail-icon
        v-for="detail in house.details"
        :datailUnit="detail.unit"
        :detailValue="detail.value"
        :datailIcon="detail.icon"
        :key="detail.name"
      ></detail-icon>
    </icons-group>

    <icons-group :house="house" section-name="facilities">
      <facility-icon
        v-for="facility in house.facilities"
        :facility-name="facility.name"
        :facility-icon="facility.icon"
        :key="facility.name"
      ></facility-icon>
    </icons-group>
  </section>

  <description-address />
</template>

<script setup>
import IconsGroup from '../components/IconsGroup.vue'
import FacilityIcon from '../components/FacilityIcon.vue'
import DetailIcon from '../components/DetailIcon.vue'
import DescriptionAddress from './DescriptionAddress.vue'

defineProps({
  house: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.description-tab {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
