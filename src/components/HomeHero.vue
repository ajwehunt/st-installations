<template>
  <section id="home-hero">
    <div id="hero-text-box">
      <h2>{{ header.partOne }}</h2>
      <h2>{{ header.partTwo }}</h2>
    </div>
    <div id="home-hero-changer">
      <div id="hero-filter"></div>
      <div
        id="main-hero"
        :style="{ backgroundImage: `url('${mainImageSrc}')`}"
      >
        <!-- <img :src="mainImageSrc"> -->
      </div>
      <!-- <div id="hero-image-list">
        <div
          v-for="img in images"
          :key="img.id"
        >
          <img :src="img.image">
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
import content from "@/services/content.js";

export default {
  name: "HomeHero",
  data() {
    return {
      header: content.page.home.hero.header,
      images: [],
      mainImageSrc: require("../assets/stocks/hometheater_2.jpg")
    };
  }
  // created() {
  //   let self = this;

  //   this.images = [
  //     {
  //       id: "1",
  //       image: require("../assets/stocks/relaxingguy.jpg")
  //     },
  //     {
  //       id: "2",
  //       image: require("../assets/stocks/security_monitoring_pc.jpg")
  //     },
  //     {
  //       id: "3",
  //       image: require("../assets/stocks/hometheatre_1.jpg")
  //     },
  //     {
  //       id: "4",
  //       image: require("../assets/stocks/home_automation.jpg")
  //     }
  //   ];

  //   setInterval(() => {
  //     self.mainImageSrc =
  //       self.images[Math.floor(Math.random() * self.images.length)].image;
  //   }, 5000);
  // }
};
</script>

<style lang="less">
#home-hero-changer {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  max-height: 540px;
  max-width: 1920px;
}

#hero-filter {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
}

// #main-hero img {
//   width: 100%;
//   height: 100%;
// }

#main-hero {
  height: 500px;
  width: 100%;
  background-position: center;
  background-size: cover;
  z-index: 1;
}

#hero-image-list {
  display: none;
}

#home-hero {
  position: relative;
  display: flex;
  justify-content: center;
  background: black;
}

#hero-text-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 70px;
  left: 0;
  right: 0;
  z-index: 3;

  h2 {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #fff;
    user-select: none;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 8px;
  }
}

@media only screen and (min-width: 336px) {
  #hero-text-box {
    top: 80px;

    h2 {
      font-size: 18px;
      line-height: 22px;
    }
  }
}

@media only screen and (min-width: 420px) {
  #hero-text-box {
    top: 90px;

    h2 {
      font-size: 23px;
      line-height: 26px;
    }
  }
}

@media only screen and (min-width: 768px) {
  #hero-text-box {
    top: 120px;

    h2 {
      font-size: 32px;
      line-height: 38px;
    }
  }
}

@media only screen and (min-width: 992px) {
  #home-hero .VueCarousel-wrapper {
    max-height: 800px;
  }

  #hero-text-box {
    top: 160px;

    h2 {
      font-size: 40px;
      line-height: 40px;
    }
  }
}
</style>
