<template>
  <section>
    <!-- <div class="container">
      <div class="row">
        <h2 class="section-title">SOCIAL MEDIA</h2>
        <hr class="section-hr">
        <div class="col-sm-1"></div>
        <div class="col-sm-10 services-pack plugin-container">
          <div class="fbplugin">
            <div ng-if="pluginOn" onrender="rendered()" class="fb-page" data-href="https://www.facebook.com/strongtowerinstallations/" data-tabs="timeline" data-small-header="true" data-width="600" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/strongtowerinstallations/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/strongtowerinstallations/">Strong Tower Installations</a></blockquote></div>
          </div>
        </div>
      </div>
    </div> -->
  </section>
</template>

<script>
export default {
  name: "HomeSocial",
  created() {
    function loadFacebook() {
      setTimeout(() => {
        window.FB.XFBML.parse();
      }, 0);
    }
    loadFacebook();
  }
};
</script>
