<template>
  <header>
    <HeaderContact/>
    <HeaderNav/>
  </header>
</template>

<script>
import HeaderContact from "@/components/HeaderContact.vue";
import HeaderNav from "@/components/HeaderNav.vue";

export default {
  components: {
    HeaderContact,
    HeaderNav
  },
  name: "Header"
};
</script>
