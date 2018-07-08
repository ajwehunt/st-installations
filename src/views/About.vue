<template>
  <transition name="fade" mode="out-in">
    <div>
      <Banner :title="about.bannerText" :img-id="about.imageId" />
      <section class="services">
        <div class="container">
          <div class="row">
            <h1 class="section-title">{{ about.headerText }}</h1>
            <hr class="section-hr">
          </div>
          <div class="row">
            <div id="about-quote" class="col-sm-offset-1 col-md-2">
              <p>"{{ about.quote }}"</p>
            </div>
            <div id="about-summary" class="col-sm-6 col-sm-offset-1">
              <p>{{ aboutSummary.partOne }}</p>
              <p>{{ aboutSummary.partTwo }}</p>
              <p>{{ about.quote }}</p>
            </div>
          </div>
        </div>
      </section>
      <section class="services">
        <div class="container">
          <div class="row">
            <h1 class="section-title">{{ about.teamHeaderText }}</h1>
            <hr class="section-hr">
            <div class="col-sm-1"></div>
            <div id="about-team-image" class="col-sm-10">
              <img src="../assets/strongtower_aboutus.jpg" alt="Our Team">
            </div>
          </div>
        </div>
      </section>
    </div>
  </transition>
</template>

<script>
import Banner from "@/components/Banner.vue";
import content from "@/services/content.js";

export default {
  components: {
    Banner
  },
  name: "About",
  data() {
    return {
      about: content.page.about,
      aboutSummary: content.page.about.summary
    };
  }
};
</script>

<style lang="less">
#about-summary {
  p:first-child:first-letter {
    color: #a7090a;
    font-size: 36px;
  }
}

#about-quote p {
  font-size: 23px;
  text-align: center;
  line-height: 32px;
  font-weight: 300;
  font-style: italic;
}

#about-team-image img {
  width: auto;
  height: auto;
  max-height: 475px;
  margin: 0 auto;
  display: block;
  max-width: 100%;
}

@media only screen and (min-width: 768px) {
  #about-quote p {
    text-align: left;
  }
}
</style>
