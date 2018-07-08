<template>
  <section class="contact-body">
    <div class="container">
      <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-10">
          <div id="form-one-holder" class="form-one-holder">
            <h2 class="section-title">YOUR MESSAGE</h2>
            <hr class="section-hr">
            <form id="hi-form" method="POST" :action="`http://formspree.io/${info.email}`">
              <div class="col-xs-12 col-sm-6">
                <div class="form-group">
                  <label for="name">Name*</label>
                  <input type="text" class="form-control" id="name" name="Name" placeholder="Name" required="">
                </div>
              </div>
              <div class="col-xs-12 col-sm-6">
                <div class="form-group">
                  <label for="email">Email Address*</label>
                  <input type="text" class="form-control" id="email" name="Email" placeholder="Email Address" required="">
                </div>
              </div>
              <div class="col-xs-12 col-sm-12">
                <div class="form-group">
                  <label for="message">Message*</label>
                  <textarea form="hi-form" class="form-control" rows="5" id="message" name="message" placeholder="Your message" required="">
                  </textarea>
                </div>
              </div>
              <button class="" type="submit">Send Message</button>
            </form>
          </div>
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
      info: content.info
    };
  }
};
</script>
