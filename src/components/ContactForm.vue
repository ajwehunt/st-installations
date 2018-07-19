<template>
  <section class="container">
    <div class="row">
      <div class="col-sm-1"></div>
      <div class="col-sm-10">
        <div id="contact-form">
          <h1 class="section-title">{{ contact.header }}</h1>
          <hr class="section-hr">
          <form method="POST" :action="`http://formspree.io/${info.email}`">
            <div class="col-xs-12 col-sm-6">
              <label for="name">Name*</label>
              <input type="text" class="form-control" id="name" name="Name" placeholder="Name" required="">
            </div>
            <div class="col-xs-12 col-sm-6">
              <label for="email">Email Address*</label>
              <input type="text" class="form-control" id="email" name="Email" placeholder="Email Address" required="">
            </div>
            <div class="col-xs-12 col-sm-12">
              <label for="message">Message*</label>
              <textarea class="form-control" rows="5" id="message" name="message" placeholder="Your message" required=""></textarea>
            </div>
            <div id="button-wrapper">
              <button type="submit">Send Message</button>
            </div>
          </form>
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

  form {
    margin-top: 60px;

    div {
      margin-top: 10px;
    }

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
        font-weight: 600;
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
