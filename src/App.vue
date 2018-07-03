<template>
  <div id="app">
    <Header id="header" :class="isHeaderSticky" />
    <router-view id="main" />
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
      sticky: false
    };
  },
  computed: {
    isHeaderSticky: function() {
      return this.sticky ? "sticky" : "";
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
      const isSticky = this.sticky;
      const pageY = window.pageYOffset;
      if (!isSticky && pageY >= 123) {
        this.sticky = true;
      } else if (isSticky && pageY < 123) {
        this.sticky = false;
      }
    }
  }
};
</script>

<style lang="less">
// @import url('https://fonts.googleapis.com/css?family=Open+Sans:100,300,400,700,900');

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
  margin: 0 0 10px;
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

li {
  list-style-type: none;
}

hr {
  border-top: 3px solid #a7090a !important;
}

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  background: #f4f4f4;
  line-height: 24px;
  font-size: 14px;
}

#header {
  position: absolute;
  width: 100%;
  z-index: 100;
}

#header.sticky {
  position: fixed;
  top: -123px;
}

#main {
  padding-top: 176px;
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

#main .container {
  padding: 50px 5px 70px;
  border-bottom: 2px solid #f4f4f4;
}

.section-title {
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  margin-bottom: 15px;
  text-transform: uppercase;
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

@media only screen and (min-width: 768px) {
  .container {
    width: 730px;
  }
}

@media only screen and (min-width: 992px) {
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
