<template>
  <div id="footer-nav" class="container">
    <div class="row">
      <div class="col-sm-1"/>
      <div id="footer-nav-wrapper" class="col-sm-10">
        <div id="footer-logo-wrapper">
          <router-link to="/">
            <img id='footer-logo'
              :src="logo.src"
              :alt="logo.alt"
            />
          </router-link>
        </div>
        <div id="footer-nav-links-wrapper">
          <Footer-nav-links/>
          <Footer-nav-social/>
        </div>
      </div>
      <div class="col-sm-1"/>
    </div>
  </div>
</template>

<script>
import content from "@/services/content.js";
import FooterNavLinks from "@/components/FooterNavLinks.vue";
import FooterNavSocial from "@/components/FooterNavSocial.vue";

export default {
  components: {
    FooterNavLinks,
    FooterNavSocial
  },
  name: "FooterNav",
  data() {
    return {
      logo: content.component.header.logo
    };
  }
};
</script>

<style>
#footer-nav {
  padding-top: 20px;
  padding-bottom: 20px;
}

#footer-nav-wrapper {
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  border-top: 1px solid #f6f6f6;
}

#footer-logo-wrapper {
  display: flex;
  justify-content: center;
  margin: 8px;
}

#footer-logo {
  width: 100px;
}

#footer-nav-links-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
}

@media only screen and (min-width: 768px) {
  #footer-logo {
    width: 70px;
  }

  #footer-nav-wrapper,
  #footer-nav-links-wrapper {
    flex-direction: row;
  }
}
</style>
