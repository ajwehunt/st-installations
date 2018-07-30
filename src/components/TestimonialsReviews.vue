<template>
  <section id="reviews">
    <div class="container">
      <div class="row">
        <h1 class="section-title">{{ reviews.header }}</h1>
        <hr class="section-hr">
      </div>
      <div id="reviews-carousel">
        <carousel
          :navigationEnabled="true"
          navigationNextLabel="<i class='fa fa-chevron-right' aria-hidden='true'></i>"
          navigationPrevLabel="<i class='fa fa-chevron-left' aria-hidden='true'></i>"
          :perPageCustom="[[0,1], [768, 2]]"
        >
          <slide
            v-for="(review, index) in reviews.tt.list"
            :key="index"
          >
            <TestimonialsReviewsSlides
              :data="review"
              :info="info.tt"
              :logo="reviews.tt.logo"
              :rating="`tt tt-${review.rating}`"
            />
          </slide>
          <slide
            v-for="(review, index) in reviews.fb.list"
            :key="index"
          >
            <TestimonialsReviewsSlides
              :data="review"
              :info="info.fb"
              :logo="reviews.fb.logo"
              :rating="`fb fb-${review.rating}`"
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

<style lang="less">
#reviews {
  #reviews-carousel {
    display: flex;
    justify-content: center;
  }

  .VueCarousel {
    width: 900px;

    .VueCarousel-slide {
      display: flex;
      justify-content: center;
    }

    .VueCarousel-navigation--disabled {
      display: none;
    }

    .VueCarousel-navigation-button {
      font-size: 30px !important;
      top: 200px !important;
    }

    .VueCarousel-navigation-prev {
      left: -4px;
      color: #797979;
    }

    .VueCarousel-navigation-next {
      right: -4px;
      color: #797979;
    }

    .VueCarousel-pagination {
      display: none;
    }
  }
}

@media only screen and (min-width: 768px) {
  #reviews .VueCarousel-pagination {
    display: block;
  }
}

@media only screen and (min-width: 992px) {
  #reviews {
    .VueCarousel-navigation-button {
      font-size: 24px !important;
    }

    .VueCarousel-navigation-prev {
      left: -4%;
    }

    .VueCarousel-navigation-next {
      right: -4%;
    }
  }
}
</style>
