<template>
  <div data-app>
    <v-menu
      attach="#header-nav-wrap"
      absolute
    >
      <v-icon
        slot="activator"
        id="mobile-menu-icon"
      >menu</v-icon>
      <NavLinks id="mobile-nav-links" />
    </v-menu>
  </div>
</template>

<script>
import NavLinks from "@/components/NavLinks.vue";

export default {
  components: {
    NavLinks
  },
  name: "HeaderMobileMenu"
};
</script>

<style lang="less">
.v-menu__content {
  display: block;
  max-width: 290px;
  top: 70px !important;
  right: 0px !important;
  left: auto !important;
  border-radius: 0px;
  box-shadow: -4px 6px 8px -1px rgba(0, 0, 0, 0.3);

  li {
    font-size: 24px;
    line-height: 44px;
  }
}

#mobile-menu-icon {
  display: block;
  font-size: 50px;
}

#mobile-nav-links {
  background: #fff;
  padding-bottom: 8px;
}

@media only screen and (min-width: 680px) {
  #mobile-menu-icon,
  .v-menu__content {
    display: none;
  }
}
</style>
