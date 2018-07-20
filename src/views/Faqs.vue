<template>
  <transition name="fade" mode="out-in">
    <main>
      <Banner :data="faqs.banner" />
      <FaqsQandA />
    </main>
  </transition>
</template>

<script>
import content from "@/services/content.js";
import Banner from "@/components/Banner.vue";
import FaqsQandA from "@/components/FaqsQandA.vue";

export default {
  components: {
    Banner,
    FaqsQandA
  },
  name: "Faqs",
  data() {
    return {
      faqs: content.page.faqs
    };
  }
};
</script>
