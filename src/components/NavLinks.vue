<template>
  <ul class="navigation">
      <router-link
        v-for="route in $router.options.routes"
        v-if="!route.meta.hidden"
        tag="li"
        :key="route.path"
        :to="route"
      >
        {{route.name}}
      </router-link>
  </ul>
</template>

<script>
export default {
  name: "NavLinks"
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
