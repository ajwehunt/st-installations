<template>
  <section>
    <div class="container">
      <div class="row">
        <h1 class="section-title">{{ ratings.header }}</h1>
        <hr class="section-hr">
      </div>
      <div class="row">
        <div id="ratings-wrapper">
          <div id="thumbtack-ratings-wrapper">
            <img id="thumbtack-logo"
              class="img-responsive"
              :src="ratings.thumbtack.logo.src"
              :alt="ratings.thumbtack.logo.alt"
            />
            <img id="thumbtack-ratings-img"
              class="img-responsive"
              :src="ratings.thumbtack.image.src"
              :alt="ratings.thumbtack.image.alt"
            />
          </div>
          <div id="facebook-ratings-wrapper">
            <img id="facebook-logo"
              class="img-responsive"
              :src="ratings.facebook.logo.src"
              :alt="ratings.facebook.logo.alt"
            />
            <img id="facebook-ratings-img"
              class="img-responsive"
              :src="ratings.facebook.image.src"
              :alt="ratings.facebook.image.alt"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import content from "@/services/content.js";

export default {
  name: "TestimonialsRatings",
  data() {
    return {
      ratings: content.page.testimonials.ratings
    };
  }
};
</script>

<style lang="less">
#ratings-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;

  #thumbtack-ratings-wrapper {
    display: flex;
    flex-direction: column;

    #thumbtack-logo {
      width: 130px;
    }
  }
  #facebook-ratings-wrapper {
    display: flex;
    flex-direction: column;

    #facebook-ratings-img {
      width: 200px;
    }

    #facebook-logo {
      width: 130px;
    }
  }
}
</style>
