<template>
    <transition name="fade" mode="out-in">
      <div>
        <Banner title="WE LOVE WHAT WE DO" img-id="services-img" />
        <div id="services-panel-wrapper" class="container">
          <Services-panel
            v-for="service in services" 
            :id="service.id" 
            :key="service.key" 
            :name="service.name" 
            :image-src="service.imageSrc" 
            :text="service.text"
          />
        </div>
        <Partners/>
      </div>
    </transition>
</template>

<script>
import Banner from "@/components/Banner.vue";
import ServicesPanel from "@/components/ServicesPanel.vue";
import Partners from "@/components/Partners.vue";
import content from "@/services/content.js";

export default {
  components: {
    Banner,
    ServicesPanel,
    Partners
  },
  name: "Services",
  data() {
    return {
      services: content.services
    };
  }
};
</script>

<style>
#services-panel-wrapper .service-panel:last-child {
  border: 0;
}
</style>
