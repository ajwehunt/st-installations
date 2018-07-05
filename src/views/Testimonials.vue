<template>
  <transition name="fade" mode="out-in">
    <div>
      <Banner :title="testimonialsContent.bannerText" img-id="testimonials-img"/>
    </div>
  </transition>
</template>

<script>
import content from "@/services/content.js";
import Banner from "@/components/Banner.vue";

export default {
  components: {
    Banner
  },
  name: "Testimonials",
  data() {
    return {
      testimonialsContent: content.testimonials
    };
  }
};
</script>

<style>
</style>
