<template>
  <header>
    <HeaderContact/>
    <HeaderNav/>
    <HeaderMobile/>
  </header>
</template>

<script>
import HeaderContact from "@/components/HeaderContact.vue";
import HeaderNav from "@/components/HeaderNav.vue";
import HeaderMobile from "@/components/HeaderMobile.vue";

export default {
  components: {
    HeaderContact,
    HeaderNav,
    HeaderMobile
  },
  name: "Header"
};
</script>
