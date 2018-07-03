<template>
  <router-link
    class="col-md-3 service-title"
    :to="`${$router.options.routes[1].path}#${serviceId}`"
    tag="div"
  >
    <i :class="faIcon" class="fa" aria-hidden="true"></i>
    <h3>{{ serviceName }}</h3>
    <!-- <p>{{ summary }}</p> -->
    <!-- <router-link to="/services#SecuritySystems" tag="button">LEARN MORE</router-link> -->
  </router-link>
</template>

<script>
export default {
  props: ["serviceId", "serviceName", "summary", "faIcon"],
  name: "HomeServicesLink"
};
</script>

<style>
.service-title {
  margin: 15px 0;
  height: 164px;
  width: 164px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.service-title:hover {
  box-shadow: 0 3px 30px 5px rgba(0, 0, 0, 0.15);
  -webkit-transition: all linear 0.2s;
  transition: all linear 0.2s;
  cursor: pointer;
}

.service-title i {
  font-size: 26px;
  margin-bottom: 10px;
}

/* #home-services-grid button {
    display: block;
    margin: 10px auto 50px;
    border: 0;
    text-transform: uppercase;
    padding: 8px 12px;
    border-radius: 2px;
    font-size: 11px;
    font-weight: 600;
    text-align: center;
    line-height: 22px;
    letter-spacing: 2px;
    transition: background .2s ease-in-out,color .2s ease-in-out,box-shadow .2s ease-in-out;
    box-shadow: 0 12px 19px 0 rgba(0, 0, 0, 0.24);
    background: #a7090a;
    color: #FFF;
  }

  #home-services-grid button:hover {
    box-shadow: 0 5px 15px 0 rgba(0,0,0,.5);
    text-decoration: none;
  } */

/* .techicon, #home-services-grid p, #home-services-grid h3 {
    margin: 0 auto;
    text-align: center;
    display: block;
  } */

/*
  #home-services-grid h3 {
    font-weight: 800;
    line-height: 35px;
    color: #4A4A4A;
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  #home-services-grid p {
    width: 80%;
    font-size: 14px;
    text-align: center;
    line-height: 26px;
    color: #797979;
  }

  #home-services-grid h3 p {
    font-weight: 800;
    line-height: 35px;
    color: #4A4A4A;
    font-size: 22px;
  } */
</style>
