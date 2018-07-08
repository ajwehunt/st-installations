<template>
  <transition name="fade" mode="out-in">
    <div>
      <Banner :title="testimonialsPage.bannerText" :img-id="testimonialsPage.imageId"/>
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
      testimonialsPage: content.page.testimonials
    };
  }
};
</script>
