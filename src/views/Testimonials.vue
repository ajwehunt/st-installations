<template>
  <transition name="fade" mode="out-in">
    <main>
      <Banner :data="testimonials.banner" />
    </main>
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
