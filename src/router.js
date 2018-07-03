import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Services from "@/views/Services";
import About from "@/views/About";
import Testimonials from "@/views/Testimonials";
import Contact from "@/views/Contact";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HOME",
      component: Home,
      meta: {
        scrollToTop: true
      }
    },
    {
      path: "/services",
      name: "SERVICES",
      component: Services,
      meta: {
        scrollToTop: true
      }
    },
    {
      path: "/about",
      name: "ABOUT",
      component: About,
      meta: {
        scrollToTop: true
      }
    },
    {
      path: "/testimonials",
      name: "TESTIMONIALS",
      component: Testimonials,
      meta: {
        scrollToTop: true
      }
    },
    {
      path: "/contact",
      name: "CONTACT US",
      component: Contact,
      meta: {
        scrollToTop: true
      }
    },
    {
      path: "*",
      redirect: "/",
      meta: {
        scrollToTop: true,
        hidden: true
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};

      if (to.hash) {
        position.selector = to.hash;
      }

      if (to.matched.some(m => m.meta.scrollToTop)) {
        position.x = 0;
        position.y = 0;
      }

      return new Promise(resolve => {
        setTimeout(() => {
          resolve(position);
        }, 0);
      });
    }
  }
});
