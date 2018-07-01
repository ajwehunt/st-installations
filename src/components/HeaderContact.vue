<template>
  <div id="header-contact-wrap">
    <div id="header-contact">
      <a :href="`tel:${content.phone}`">
        <h2>CALL US:</h2><h2>{{ content.phone }}</h2>
      </a>
    </div>
  </div>
</template>

<script>
import content from "@/services/content.js";

export default {
  name: "HeaderContact",
  data() {
    return {
      content
    };
  }
};
</script>

<style scoped>
#header-contact-wrap {
  display: flex;
  justify-content: center;
  height: 48px;
  width: 100%;
  background: black;
}

#header-contact {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  padding-right: 25px;
  padding-top: 8px;
}

a {
  display: flex;
  margin-bottom: 7px;
}

h2 {
  color: #fff;
  font-size: 18px;
}

h2:first-child {
  margin-right: 12px;
}

h2:last-child {
  letter-spacing: 1px;
}
</style>
