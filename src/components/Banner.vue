<template>
  <section :id="imgId" class='banner'>
    <div id="banner-filter"></div>
    <h1>{{ title }}</h1>
  </section>
</template>

<script>
export default {
  props: ["title", "imgId"],
  name: "Banner"
};
</script>

<style scoped>
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  text-align: center;
  background-size: cover;
  background-position: center;
}

#services-img {
  background-image: url(../assets/banners/main_services.jpg);
}
#contact-img {
  background-image: url(../assets/stocks/hometheatre_1.jpg);
}
#about-img {
  background-image: url(../assets/stocks/hometheatre_1.jpg);
}
#testimonials-img {
  background-image: url(../assets/stocks/hometheatre_1.jpg);
}

#banner-filter {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
}

.banner,
.banner .container {
  position: relative;
}

h1 {
  z-index: 1;
  font-size: 30px;
  margin-bottom: 50px;
  color: #fff;
  letter-spacing: 1px;
}

@media only screen and (min-width: 992px) {
  h1 {
    font-size: 35px;
  }
}
</style>
