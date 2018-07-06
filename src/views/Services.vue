<template>
    <transition name="fade" mode="out-in">
      <div>
        <Banner :title="servicesPage.bannerText" :img-id="servicesPage.imageId" />
        <div id="services-panel-wrapper" class="container">
          <Services-panel
            v-for="service in servicesPage.servicesList" 
            :key="service.id"
            :id="service.id" 
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
      servicesPage: content.page.services
    };
  }
};
</script>

<style>
#services-panel-wrapper .service-panel:last-child {
  border: 0;
}
</style>
