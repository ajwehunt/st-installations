<template>
    <section class="container">
      <div class="row">
        <h1 class="section-title">OUR SERVICES</h1>
        <hr class="section-hr">
        <div class="col-sm-1"></div>
        <div id="home-services-panel" class="col-sm-10">
          <h2>{{ content.home.servicesSummary }}</h2>
          <div id="home-services-grid">
             <HomeServicesLink
                v-for="service in content.services"
                tag="div"
                :key="service.key"
                :serviceId="service.id"
                :serviceName="service.name"
                :summary="service.summmary"
                :faIcon="service.faIcon" 
              />
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import HomeServicesLink from "@/components/HomeServicesLink.vue";
import content from "@/services/content.js";

export default {
  components: {
    HomeServicesLink
  },
  name: "HomeServices",
  data() {
    return {
      content
    };
  }
};
</script>

<style lang="less">
#home-services-panel {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px 14px;
  margin-top: 10px;
  box-shadow: 0 3px 30px 5px rgba(0, 0, 0, 0.15);

  h2 {
    padding: 0 10%;
    font-size: 17px;
    line-height: 36px;
    color: #797979;
    margin-bottom: 20px;
    text-align: center;
  }
}

#home-services-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0px;
}

/* @media only screen and (min-width: 480px) {

} */

@media only screen and (min-width: 768px) {
  #home-services-grid {
    grid-template-columns: 1fr 1fr;
    grid-gap: 0px 60px;
  }
}

@media only screen and (min-width: 992px) {
  /* .home-services-panel .row {
      justify-content: center;
      display: flex;
    } */
  #home-services-grid {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px 100px;
  }
}
</style>
