<template>
  <section id="home-hero">
    <div id="hero-text-box">
      <h2>Welcome to</h2>
      <h2>StrongTower Installations</h2>
    </div>
    <div id="home-hero-changer">
      <div id="hero-filter"></div>
      <div id="main-hero">
        <img :src="mainImageSrc">
      </div>
      <div id="hero-image-list">
        <div v-for="img in images" :key="img.id">
          <img :src="img.image">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeHero",
  data() {
    return {
      images: [],
      mainImageSrc: require("../assets/stocks/relaxingguy.jpg")
    };
  },
  created() {
    let self = this;

    this.images = [
      {
        id: "1",
        image: require("../assets/stocks/relaxingguy.jpg")
      },
      {
        id: "2",
        image: require("../assets/stocks/security_monitoring_pc.jpg")
      },
      {
        id: "3",
        image: require("../assets/stocks/hometheatre_1.jpg")
      },
      {
        id: "4",
        image: require("../assets/stocks/home_automation.jpg")
      }
    ];

    setInterval(() => {
      self.mainImageSrc =
        self.images[Math.floor(Math.random() * self.images.length)].image;
    }, 5000);
  }
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
  background-color: rgba(0, 0, 0, 0.28);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

#main-hero img {
  width: 100%;
  height: 100%;
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
  top: 170px;
  left: 0;
  right: 0;
  z-index: 2;

  h2 {
    font-size: 40px;
    font-weight: 400;
    line-height: 50px;
    color: #fff;
  }
}

@media only screen and (min-width: 320px) {
  /* .hero .container {
    padding-top: 200px;
    position: relative;
  } */
}

@media only screen and (min-width: 992px) {
  #home-hero .VueCarousel-wrapper {
    max-height: 800px;
  }
  /* .hero {
    height: 462px;
    max-height: 462px;
    position: relative;
  } */
  /* .hero .container {
    padding-top: 180px;
  } */
  /* .hero .container h1 {
    font-size: 60px;
    font-weight: 300;
    line-height: 82px;
    color: rgba(255,255,255,1);
    position: relative;
    z-index: 1;
    display: block;
  } */
}
</style>
