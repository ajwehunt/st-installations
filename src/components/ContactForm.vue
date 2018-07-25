<template>
  <section class="container">
    <div class="row">
      <div class="col-sm-1"></div>
      <div class="col-sm-10">
        <div id="contact-form">
          <h1 class="section-title">{{ contact.header }}</h1>
          <hr class="section-hr">
          <v-form
            class="v-form"
            method="POST"
            :action="`http://formspree.io/${info.email}`"
          >
            <v-flex class="xs12 sm6">
              <v-text-field
                solo
                type="text"
                id="name"
                for="name"
                name="Name"
                placeholder="Name"
                required=""
              >Name*</v-text-field>
            </v-flex>
            <v-flex class="xs12 sm6">
              <v-text-field
                solo
                type="text"
                id="email"
                for="email"
                name="Email"
                placeholder="Email Address"
                required=""
              >Email Address*</v-text-field>
            </v-flex>
            <v-flex class="xs12 sm12">
              <v-textarea
                solo
                rows="5"
                id="message"
                for="message"
                name="message"
                placeholder="Your message"
                required=""
              >Message*</v-textarea>
            </v-flex>
            <div id="button-wrapper">
              <button type="submit">Send Message</button>
            </div>
          </v-form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import content from "@/services/content.js";

export default {
  name: "ContactForm",
  data() {
    return {
      info: content.info,
      contact: content.page.contact
    };
  }
};
</script>

<style lang="less">
#contact-form {
  padding-top: 25px;

  .v-form {
    margin-top: 60px;

    #button-wrapper {
      display: flex;
      justify-content: flex-end;
      height: 80px;
      width: 100%;

      button {
        position: absolute;
        right: 0;
        bottom: 0;
        margin-right: 27px;
        border: 0;
        text-transform: uppercase;
        padding: 18px 26px;
        border-radius: 2px;
        font-size: 16px;
        font-weight: 500;
        line-height: 22px;
        letter-spacing: 2px;
        transition: background 0.2s ease-in-out, color 0.2s ease-in-out,
          box-shadow 0.2s ease-in-out;
        box-shadow: 0 12px 19px 0 rgba(0, 0, 0, 0.24);
        background: #a7090a;
        color: #fff;

        &:hover {
          box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.5);
          text-decoration: none;
        }
      }
    }
  }
}
</style>
