<template>
  <transition name="fade" mode="out-in">
    <div>
      <Banner title="WHAT PEOPLE ARE SAYING" img-id="testimonials-img"/>
    </div>
  </transition>
</template>

<script>
import Banner from "@/components/Banner.vue";

export default {
  components: {
    Banner
  },
  name: "Testimonials"
};
</script>

<style>
</style>
