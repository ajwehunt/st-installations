<template>
  <transition name="fade" mode="out-in">
    <main>
      <Banner :data="about.banner" />
      <section>
        <div class="container">
          <div class="row">
            <h1 class="section-title">{{ mission.header }}</h1>
            <hr class="section-hr">
          </div>
          <div class="row">
            <div id="about-quote" class="col-sm-offset-1 col-md-2">
              <p>"{{ mission.quote }}"</p>
            </div>
            <div id="about-summary" class="col-sm-6 col-sm-offset-1">
              <p>{{ mission.summary.partOne }}</p>
              <p>{{ mission.summary.partTwo }}</p>
              <p>{{ mission.quote }}</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="row">
            <h1 class="section-title">{{ team.header }}</h1>
            <hr class="section-hr">
            <div class="col-sm-1"></div>
            <div id="about-team-image" class="col-sm-10">
              <img :src="team.image.src"
                :alt="team.image.alt"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  </transition>
</template>

<script>
import content from "@/services/content.js";
import Banner from "@/components/Banner.vue";

export default {
  components: {
    Banner
  },
  name: "About",
  data() {
    return {
      about: content.page.about,
      mission: content.page.about.mission,
      team: content.page.about.team
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
