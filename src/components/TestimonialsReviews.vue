<template>
  <section>
    <div class="container">
      <div class="row">
        <h1 class="section-title">{{ reviews.header }}</h1>
        <hr class="section-hr">
      </div>
      <div class="row">

      </div>
    </div>
  </section>
</template>

<script>
import content from "@/services/content.js";

export default {
  name: "TestimonialsReviews",
  data() {
    return {
      reviews: content.page.testimonials.reviews
    };
  }
};
</script>

<style lang="less">
</style>
