<template>
  <div class="review">
    <div class="review-header">
      <h2 class="review-header-name">{{data.name}}</h2>
      <a :href="info.link">
        <img
          class="img-responsive"
          :src="logo"
          :alt="info.alt"
        >
      </a>
    </div>
    <div class="review-rating">{{data.rating}}</div>
    <div class="review-text">{{data.text}}</div>
    <div class="review-date">{{data.date}}</div>
  </div>
</template>

<script>
export default {
  name: "TestimonialsReviewsSlides",
  props: ["data", "info", "logo"]
};
</script>

<style lang="less">
.review {
  height: 400px;
  width: 300px;
  max-width: 100%;

  .review-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    h2 {
      font-size: 16px;
      font-weight: 700;
    }

    img {
      width: 30px;
    }
  }
}
</style>
