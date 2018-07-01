<template>
  <transition name="fade" mode="out-in">
    <div>
      <Banner title="LET'S GET IN TOUCH" img-id="testimonials-img" />
      <section class="contact-body">
        <div class="container">
          <div class="row">
            <div class="col-sm-1"></div>
            <div class="col-sm-10">
              <div id="form-one-holder" class="form-one-holder">
                <h2 class="section-title">your message</h2>
                <hr class="section-hr">
                <form id="hi-form" method="POST" action="http://formspree.io/jesse@strongtowersecurity.com">
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
    </div>
  </transition>
</template>

<script>
import Banner from "@/components/Banner.vue";

export default {
  components: {
    Banner
  },
  name: "Contact"
};
</script>

<style scoped>
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
