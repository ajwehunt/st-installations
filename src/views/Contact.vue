<template>
  <transition name="fade" mode="out-in">
    <div>
      <Banner :title="contactPage.bannerText" :img-id="contactPage.imageId" />
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
      contactPage: content.page.contact
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

.form-one-holder,
.form-two-holder {
  padding-top: 25px;
}

.form-one-holder form button:hover,
.form-two-holder .submitbutton:hover {
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.5);
  text-decoration: none;
}

.form-one-holder form,
.form-two-holder form {
  margin-top: 60px;
}

button {
  margin-right: 6px;
  margin-top: 20px;
  float: right;
  border: 0;
  text-transform: uppercase;
  padding: 18px 26px;
  border-radius: 2px;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 2px;
  transition: background 0.2s ease-in-out, color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  box-shadow: 0 12px 19px 0 rgba(0, 0, 0, 0.24);
  background: #a7090a;
  color: #fff;
}
</style>
