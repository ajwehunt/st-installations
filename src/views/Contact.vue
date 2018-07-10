<template>
  <transition name="fade" mode="out-in">
    <div>
      <Banner :data="contact.banner" />
      <ContactForm />
    </div>
  </transition>
</template>

<script>
import Banner from "@/components/Banner.vue";
import ContactForm from "@/components/ContactForm.vue";
import content from "@/services/content.js";

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

<style>
.container {
  padding: 30px 0;
}

@media only screen and (min-width: 768px) {
  .container {
    padding: 45px 0;
  }
}

@media only screen and (min-width: 992px) {
  .container {
    padding: 70px 0;
  }
}
</style>
