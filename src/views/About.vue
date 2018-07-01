<script>
import Banner from "@/components/Banner.vue";

export default {
  components: {
    Banner
  },
  name: "About"
};
</script>

<template>
  <transition name="fade" mode="out-in">
    <div>
      <Banner title="WE ARE STRONG TOWER" img-id="about-img" />
      <section class="services">
        <div class="container">
          <div class="row">
            <h1 class="section-title">OUR MISSION</h1>
            <hr class="section-hr">
          </div>
          <div class="row">
            <div class="col-sm-offset-1 col-md-2 quote">
              <p>"Technology is our passion, customization is our specialty."</p>
            </div>
              <div class="col-sm-6 col-sm-offset-1">
                <p><span class="first-letter">H</span>ello, we are Strong Tower Installations. We are a group of highly talented individuals specialized in creating innovative home theatre and security solutions. Our mission is to stay true to the nature of quality sound and security as an evidence-driven methodology to create user-centered products while taking advantage of our technical capabilities.</p>
                <p>We’re locally owned & operated out of Gilbert, Arizona. Our founders live and work in Arizona. When you call us, you’ll get a live person. Not able to call? No worries, we’ve got 24/7 live SMS (text) support too.</p>
                <p>Technology is our passion, customization is our specialty.</p>
              </div>
          </div>
        </div>
      </section>
      <section class="services">
        <div class="container">
          <div class="row">
            <h1 class="section-title">OUR TEAM</h1>
            <hr class="section-hr">
            <div class="col-sm-1"></div>
            <div class="col-sm-10 our-team">
              <img src="../assets/strongtower_aboutus.jpg" alt="Our Team">
            </div>
          </div>
        </div>
      </section>
    </div>
  </transition>
</template>

<style>
.first-letter {
  color: #a7090a;
  font-size: 36px;
}

.quote p:first-child {
  font-weight: 300;
  font-style: italic;
}
.quote p,
.quote p:first-child {
  font-size: 23px;
  text-align: left;
  line-height: 32px;
}

.our-team img {
  width: auto;
  height: auto;
  max-height: 475px;
  margin: 0 auto;
  display: block;
  max-width: 100%;
}

@media only screen and (min-width: 768px) {
  .quote p {
    font-size: 23px;
    font-weight: 300;
    font-style: italic;
    text-align: left;
    line-height: 32px;
  }
}
@media only screen and (min-width: 320px) {
  .quote p {
    text-align: center;
  }
  .quote p {
    font-weight: 700;
  }
}
</style>
