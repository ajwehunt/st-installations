<template>
  <nav>
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
  </nav>
</template>

<script>
export default {
  name: "NavLinks"
};
</script>

<style lang="less">
.navigation {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  justify-content: center;
  user-select: none;

  li {
    margin: 6px 12px;
    padding-bottom: 2px;
    border-bottom: 3px solid #ffffff;
    cursor: pointer;
    color: #7f7f7f;
    transition: 0.25s;
    letter-spacing: 1px;

    &.router-link-exact-active,
    &:hover {
      border-bottom: 3px solid #a7090a;
      color: #000;
    }
  }
}
</style>
