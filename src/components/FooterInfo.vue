<template>
  <section id="footer-info" class="container">
    <div class="row">
      <div class="col-sm-5 col-sm-offset-1">
        <h2>{{ aboutContent.headerText }}</h2>
        <p>{{ aboutContent.summary }}</p>
      </div>
      <FooterInfoContact/>
    </div>
  </section>
</template>

<script>
import FooterInfoContact from "@/components/FooterInfoContact.vue";
import content from "@/services/content.js";

export default {
  components: {
    FooterInfoContact
  },
  name: "FooterInfo",
  data() {
    return {
      aboutContent: content.component.footer.about
    };
  }
};
</script>

<style>
#footer-info {
  display: block;
  border-top: 2px solid #f6f6f6;
}

#footer-info .row {
  margin: 20px 0 10px;
}

#footer-info h2 {
  font-size: 14px;
  font-weight: 800;
  line-height: 19px;
  letter-spacing: 2px;
  margin: 32px 0 22px 0;
}
</style>
