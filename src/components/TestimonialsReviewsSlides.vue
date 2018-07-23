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
    <div :class="`review-rating ${rating}`"></div>
    <div class="review-text">{{data.text}}</div>
    <div class="review-date">{{data.date}}</div>
  </div>
</template>

<script>
export default {
  name: "TestimonialsReviewsSlides",
  props: ["data", "info", "logo", "rating"]
};
</script>

<style lang="less">
.review {
  height: 430px;
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
      padding-top: 10px;
    }
  }

  .review-rating {
    background-repeat: no-repeat;
    background-size: cover;

    &.tt {
      height: 16px;
      width: 85px;

      &.tt-5 {
        background-image: url("../assets/social/thumbtack_5star.png");
      }
    }

    &.fb {
      height: 25px;
      width: 50px;

      &.fb-5 {
        background-image: url("../assets/social/facebook_5star.png");
      }
    }
  }

  .review-text {
    padding: 12px 0 6px;
  }

  .review-date {
    color: #666;
  }
}
</style>
