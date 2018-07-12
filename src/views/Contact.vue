<template>
  <transition name="fade" mode="out-in">
    <main>
      <Banner :data="contact.banner" />
      <ContactForm />
    </main>
  </transition>
</template>

<script>
import content from "@/services/content.js";
import Banner from "@/components/Banner.vue";
import ContactForm from "@/components/ContactForm.vue";

export default {
  components: {
    Banner,
    ContactForm
  },
  name: "Contact",
  data() {
    return {
      contact: content.page.contact
    };
  }
};
</script>
