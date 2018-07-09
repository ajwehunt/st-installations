<template>
  <section id="partners">
    <div class="container">
      <div class="row">
        <h2 class="section-title">{{ partners.headerText }}</h2>
        <hr class="section-hr">
        <carousel
          :autoplay=true
          :navigationEnabled=true
          :loop=true
          navigationNextLabel="<i class='fa fa-chevron-right' aria-hidden='true'></i>"
          navigationPrevLabel="<i class='fa fa-chevron-left' aria-hidden='true'></i>"
          :perPageCustom="[[0,1], [768, 2]]"
        >
          <slide><div><img src="../assets/partners/2gig_logo.jpg" alt="2gig_logo"></div></slide>
          <slide><div><img src="../assets/partners/alarmdotcom_logo.jpg" alt="alarmdotcom_logo"></div></slide>
          <slide><div><img src="../assets/partners/cctvcore_logo.jpg" alt="cctvcore_logo"></div></slide>
          <slide><div><img src="../assets/partners/denom_logo.jpg" alt="denom_logo"></div></slide>
          <slide><div><img src="../assets/partners/elura_logo.jpg" alt="elura_logo"></div></slide>
          <slide><div><img src="../assets/partners/honeywell_logo.jpg" alt="honeywell_logo"></div></slide>
          <slide><div><img src="../assets/partners/jamo_logo.jpg" alt="jamo_logo"></div></slide>
          <slide><div><img src="../assets/partners/mountainwest_logo.jpg" alt="mountainwest_logo"></div></slide>
          <slide><div><img src="../assets/partners/onkyo_logo.jpg" alt="onkyo_logo"></div></slide>
          <slide><div><img src="../assets/partners/ring_logo.jpg" alt="ring_logo"></div></slide>
          <slide><div><img src="../assets/partners/samsung_logo.jpg" alt="samsung_logo"></div></slide>
          <slide><div><img src="../assets/partners/wave_logo.jpg" alt="wave_logo"></div></slide>
          <slide><div><img src="../assets/partners/yamaha_logo.jpg" alt="yamaha_logo"></div></slide>
        </carousel>
      </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import content from "@/services/content.js";

export default {
  components: {
    Carousel,
    Slide
  },
  name: "Partners",
  data() {
    return {
      partners: content.component.partners
    };
  }
};
</script>

<style lang="less">
#partners {
  .container {
    padding: 0;
    border-bottom: 2px solid #f4f4f4;

    .row {
      margin: 30px 14% 60px;

      img {
        height: 32px;
        width: auto;
      }
    }
  }

  .VueCarousel-slide {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      display: flex;
      justify-content: center;
    }
  }

  .VueCarousel-navigation-button {
    font-size: 19px !important;
    top: 36px !important;
  }

  .VueCarousel-navigation-prev {
    left: -8%;
    color: #797979;
  }

  .VueCarousel-navigation-next {
    right: -8%;
    color: #797979;
  }

  .VueCarousel-pagination {
    display: none;
  }
}

@media only screen and (min-width: 768px) {
  #partners .VueCarousel-pagination {
    display: block;
  }
}

@media only screen and (min-width: 992px) {
  #partners {
    img {
      height: 50px;
    }

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
