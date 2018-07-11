<template>
  <section class='banner'>
    <img :id="data.id"
      :src="data.image.src"
      :alt="data.image.alt"
    />
    <div class="banner-filter"></div>
    <h1>{{ data.text }}</h1>
  </section>
</template>

<script>
export default {
  props: ["data"],
  name: "Banner"
};
</script>

<style lang="less" scoped>
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  text-align: center;
}

.banner-filter {
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
