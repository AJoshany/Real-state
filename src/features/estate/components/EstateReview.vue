<template>
  <li class="review-container">
    <div class="reviewer">
      <div class="reviewer-info">
        <div class="image-container">
          <img :src="review.reviewerPicture" :alt="reviewerName" />
        </div>
        <p class="reviewer__name">{{ review.reviewerName }}</p>
      </div>
      <p class="review-date">{{ review.reviewDate }}</p>
    </div>
    <p class="review-content">{{ review.content }}</p>
    <div class="review-info">
      <p class="review-rating">
        <img class="review-star" src="/assets/icons/star.svg" alt="star icon" />
        <span class="review-rate">{{ review.rate }}</span>
      </p>
      <div class="review-feedback">
        <div class="feedback__group">
          <img class="feedback-icon" src="/assets/icons/like-icon.svg" alt="like icon" />
          <span class="feedback-value">{{ review.likes }}</span>
        </div>
        <div class="feedback__group">
          <img class="feedback-icon" src="/assets/icons/dislike-icon.svg" alt="dislike icon" />
          <span class="feedback-value">{{ review.dislikes }}</span>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup>
defineProps({
  review: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.review-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--color-gray-100);
}

.reviewer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.reviewer-info {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.reviewer__name {
  font-size: 1.4rem;
  font-weight: 600;
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

.review-info {
  display: flex;
  justify-content: space-between;
}

.review-date {
  font-size: 1.4rem;
  color: var(--color-text-secondary);
}

.review-content {
  font-size: 1.6rem;
  color: var(--color-text-secondary);
}

.review-rating {
  display: flex;
  gap: 0.5rem;
  align-items: center;

  font-size: 1.4rem;

  img {
    width: 2rem;
  }
}

.review-feedback {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.feedback__group {
  display: flex;
  gap: 0.5rem;
}

.feedback-value {
  font-size: 1.4rem;
}

.feedback-icon {
  width: 2rem;
}
</style>
