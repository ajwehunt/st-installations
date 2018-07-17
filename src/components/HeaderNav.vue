<template>
  <div id="header-nav-wrap">
    <div id="header-nav-main">
      <router-link to="/">
        <img id="logo-main" :src="logo.main.src" :alt="logo.alt">
        <img id="logo-small" :src="logo.small.src" :alt="logo.alt">
      </router-link>
      <!-- <button class='hamburger-btn' type="button" name="menu" ng-click="toggleNav()">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </button> -->
      <NavLinks id="header-nav-links" />
    </div>
  </div>
</template>

<script>
import content from "@/services/content.js";
import NavLinks from "@/components/NavLinks.vue";

export default {
  components: {
    NavLinks
  },
  name: "HeaderNav",
  data() {
    return {
      logo: content.component.header.logo
    };
  }
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

  img {
    position: absolute;
    cursor: pointer;
    user-select: none;
    height: 150px;
    bottom: 20px;
  }

  #logo-main {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.5s linear;
    z-index: 10;
  }

  #logo-small {
    margin-left: -2px;
    transition: height 0.09s linear;
  }
}

.sticky-both {
  #header-nav-main {
    padding-bottom: 0px;

    img {
      bottom: 5px;
      height: 46px;
    }

    #logo-small {
      margin-left: 0px;
      transition: height 0.09s linear;
    }

    #logo-main {
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s 0.5s, opacity 0.5s linear, height 0.09s linear;
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
