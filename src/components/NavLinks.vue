<template>
  <ul class="navigation">
      <router-link v-for="route in routes" tag="li" :key="route.key" :to="route.path" >{{route.name}}</router-link>
  </ul>
</template>

<script>
import router from "@/router.js";

export default {
  name: "NavLinks",
  data() {
    return {
      routes: router.options.routes.slice(0, -1)
    };
  }
};
</script>

<style>
.navigation {
  display: flex;
  align-items: baseline;
  user-select: none;
}

.navigation li {
  margin: 6px 12px;
  padding-bottom: 2px;
  border-bottom: 3px solid #ffffff;
  cursor: pointer;
  color: #7f7f7f;
  transition: 0.25s;
  letter-spacing: 1px;
}

.navigation li.router-link-exact-active,
.navigation li:hover {
  border-bottom: 3px solid #a7090a;
  color: #000;
}
</style>
