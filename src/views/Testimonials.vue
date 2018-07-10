<template>
  <transition name="fade" mode="out-in">
    <div>
      <Banner :data="testimonials.banner" />
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
      testimonials: content.page.testimonials
    };
  }
};
</script>
