<template>
  <div id="app">
    <Header id="header" :class="getStickyStatus" />
    <router-view id="router-view" />
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
    Footer
  },
  name: "App",
  data() {
    return {
      stickyStatus: ""
    };
  },
  computed: {
    getStickyStatus: function() {
      return this.stickyStatus;
    }
  },
  created() {
    document.addEventListener(
      "touchstart",
      e => {
        e.preventDefault();
      },
      window.Modernizr.passiveeventlisteners ? { passive: true } : false
    );

    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const stickyStatus = this.stickyStatus;
      const pageY = window.pageYOffset;
      const pageX = window.innerWidth;
      const headerContactHeight = 40;
      const headerNavHeight = pageX > 680 ? 118 : 60;

      if (stickyStatus != "sticky-both" && pageY >= headerNavHeight) {
        this.stickyStatus = "sticky-both";
      } else if (
        stickyStatus != "sticky" &&
        pageY < headerNavHeight &&
        pageY >= headerContactHeight
      ) {
        this.stickyStatus = "sticky";
      } else if (stickyStatus != "" && pageY < headerContactHeight) {
        this.stickyStatus = "";
      }
    }
  }
};
</script>

<style lang="less">
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block;
}

html {
  -webkit-text-size-adjust: 100%;
  overflow-x: hidden;
}

p {
  margin: 0 0 12px;
}

a {
  color: #a7090a;
  background-color: transparent;
}

a,
a:hover,
a:active,
a:visited,
a:focus {
  text-decoration: none;
}

img {
  user-select: none;
}

li {
  list-style-type: none;
}

hr {
  border-top: 3px solid #a7090a !important;
}

#app {
  // font-family: "Dosis", sans-serif;
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  background: #f4f4f4;
  line-height: 24px;
  font-size: 14px;
}

h1,
h2 {
  font-family: "Dosis", sans-serif;
  letter-spacing: 2px;
}

#header {
  #header-contact-wrap,
  #header-nav-wrap {
    position: absolute;
    width: 100%;
  }

  &.sticky #header-contact-wrap {
    position: fixed;
    top: -42px;
    z-index: 7;
  }

  &.sticky-both {
    #header-contact-wrap {
      position: fixed;
      background: black;
      top: -42px;
      z-index: 7;
    }

    #header-nav-wrap {
      position: fixed;
      top: -10px;
    }

    @media only screen and (min-width: 680px) {
      #header-nav-wrap {
        top: -70px;
      }
    }
  }
}

#router-view {
  padding-top: 118px;
}

.row {
  margin-left: -5px;
  margin-right: -5px;
  padding: 0 5px;
}

.container {
  background-color: #fff;
  padding: 0;
  margin-right: auto;
  margin-left: auto;
  padding-left: 5px;
  padding-right: 5px;
}

#router-view {
  .container {
    padding: 0px 5px 40px;
    border-bottom: 2px solid #f4f4f4;
  }
}

.section-title {
  text-align: center;
  font-size: 19px;
  font-weight: 700;
  line-height: 22px;
  margin: 24px 0 15px;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.section-hr {
  border-top: 3px solid #4a4a4a;
  margin: 0 auto;
  margin-bottom: 30px;
  width: 50px;
}

.img-responsive {
  display: block;
  max-width: 100%;
  height: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

@media only screen and (min-width: 680px) {
  #router-view {
    .container {
      padding: 10px 5px 50px;
    }

    padding-top: 176px;
  }
}

@media only screen and (min-width: 768px) {
  #router-view {
    .container {
      padding: 20px 5px 60px;
    }
  }

  .container {
    width: 730px;
  }
}

@media only screen and (min-width: 992px) {
  #router-view {
    .container {
      padding: 40px 5px 70px;
    }
  }

  .container {
    width: inherit;
    padding: 0 10px;
  }
}

@media only screen and (min-width: 1200px) {
  .container {
    width: 1200px;
    padding: 0;
  }
}
</style>
