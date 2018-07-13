<template>
  <div class='banner'>
    <div class="img"
      :id="data.id"
      :style="{ backgroundImage: `url('${data.image.src}')`}"
    />
    <div class="banner-filter"></div>
    <h1>{{ data.text }}</h1>
  </div>
</template>

<script>
export default {
  props: ["data"],
  name: "Banner"
};
</script>

<style lang="less">
.banner {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  text-align: center;
  overflow: hidden;
  background-color: #000;

  .banner-filter {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }

  h1 {
    position: absolute;
    align-self: center;
    z-index: 1;
    font-size: 30px;
    margin-bottom: 50px;
    color: #fff;
    letter-spacing: 1px;
  }

  .img {
    height: 100%;
    width: 100%;
    max-width: 1600px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}

@media only screen and (min-width: 992px) {
  .banner h1 {
    font-size: 35px;
  }
}
</style>
