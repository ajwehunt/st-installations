<template>
  <section class="service-panel">
    <div class="col-sm-1">
    </div>
    <div class="col-sm-6">
      <img class="img-responsive" :src="imageSrc" :alt="imageAlt">
    </div>
    <div class="col-sm-4">
      <h1>{{ name }}</h1>
      <p>{{ text }}</p>
    </div>
    <div class="col-sm-1">
    </div>
  </section>
</template>

<script>
export default {
  props: ["name", "text", "imageSrc", "imageAlt"],
  name: "ServicesPanel"
};
</script>

<style lang="less">
.service-panel {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-bottom: 2px solid #f4f4f4;
  margin-left: -5px;
  margin-right: -5px;
  padding: 50px 0;

  h1 {
    font-size: 30px;
    margin-bottom: 16px;
    line-height: 1;
  }
}

@media only screen and (min-width: 768px) {
  .service-panel {
    flex-direction: row;
    padding: 70px 0;
  }

  .service-panel:nth-child(even) {
    flex-direction: row-reverse;
  }
}
</style>
