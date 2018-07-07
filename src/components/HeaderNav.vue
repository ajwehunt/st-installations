<template>
  <div id="header-nav-wrap">
    <div id="header-nav-main">
    <router-link to="/"><img src="../assets/logo.png" alt="Strong Tower Installations"></router-link>
      <!-- <button class='hamburger-btn' type="button" name="menu" ng-click="toggleNav()">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </button> -->
      <NavLinks id="header-nav-links" />
    </div>
  </div>
</template>

<script>
import NavLinks from "@/components/NavLinks.vue";

export default {
  components: {
    NavLinks
  },
  name: "HeaderNav"
};
</script>

<style lang="less">
#header-nav-wrap {
  background: #fff;
  z-index: 6;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.3);
  top: 48px;
}

#header-nav-main {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 128px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  transition: 0.08s;
  transition-delay: 50ms;

  img {
    position: absolute;
    bottom: 20px;
    height: 150px;
    z-index: 10;
    transition: 0.08s;
    transition-delay: 50ms;
    cursor: pointer;
  }
}

.sticky-both {
  #header-nav-main {
    padding-bottom: 0px;

    img {
      height: 46px;
      bottom: 5px;
    }
  }
}

#header-nav-links {
  display: none;

  li {
    font-size: 15px;
    font-weight: 700;

    &:last-child {
      border: 3px solid #7f7f7f;
      padding: 6px;
      border-radius: 2px;
    }

    &:last-child:hover,
    &.router-link-exact-active:last-child {
      border: 3px solid #a7090a;
      color: #fff;
      background: #a7090a;
    }
  }
}

@media only screen and (min-width: 768px) {
  #header-nav-links {
    display: flex;
  }
}
</style>
