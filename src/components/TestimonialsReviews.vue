<template>
  <section>
    <div class="container">
      <div class="row">
        <h1 class="section-title">{{ reviews.header }}</h1>
        <hr class="section-hr">
        <carousel
          :navigationEnabled="true"
          navigationNextLabel="<i class='fa fa-chevron-right' aria-hidden='true'></i>"
          navigationPrevLabel="<i class='fa fa-chevron-left' aria-hidden='true'></i>"
          :perPageCustom="[[0,1], [768, 2]]"
        >
          <slide
            v-for="review in reviews.tt.list"
            :key="review.name"
          >
            <TestimonialsReviewsSlides
              :data="review"
              :info="info.tt"
              :logo="reviews.tt.logo"
            />
          </slide>
          <slide
            v-for="review in reviews.fb.list"
            :key="review.name"
          >
            <TestimonialsReviewsSlides
              :data="review"
              :info="info.fb"
              :logo="reviews.fb.logo"
            />
          </slide>
        </carousel>
      </div>
    </div>
  </section>
</template>

<script>
import content from "@/services/content.js";
import { Carousel, Slide } from "vue-carousel";
import TestimonialsReviewsSlides from "@/components/TestimonialsReviewsSlides.vue";

export default {
  components: {
    Carousel,
    Slide,
    TestimonialsReviewsSlides
  },
  name: "TestimonialsReviews",
  data() {
    return {
      reviews: content.page.testimonials.reviews,
      info: content.info
    };
  }
};
</script>
