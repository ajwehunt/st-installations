<template>
    <footer>
        <Footer-info/>
        <Footer-nav/>
    </footer>
</template>

<script>
import FooterInfo from "@/components/FooterInfo.vue";
import FooterNav from "@/components/FooterNav.vue";

export default {
  components: {
    FooterInfo,
    FooterNav
  },
  name: "Footer"
};
</script>
