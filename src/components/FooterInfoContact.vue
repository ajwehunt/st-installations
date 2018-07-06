<template>
  <div class="col-sm-4 col-sm-offset-1">
    <h2>{{ contactInfo.headerText }}</h2>
    <div id="footer-info-contact">
      <!-- <div>
          <i class="fa fa-map-pin" aria-hidden="true"></i>
          <a :href="contactInfo.googleMapLink" target='_blank'>{{ contactInfo.locationText }}</a>
      </div> -->
      <div>
          <i class="fa fa-phone" aria-hidden="true"></i>
          <a :href="`tel:${content.phone}`">{{ content.phone }}</a>
      </div>
      <div>
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <a :href="`mailto:${content.email}`+
            `?subject=${emailContent.subject}&amp;`+
            `body=${emailContent.intro}%0A%0A${emailContent.body}%0A%0A${emailContent.outro}`"
          >
            {{ content.email }}
          </a>
      </div>
    </div>
  </div>
</template>

<script>
import content from "@/services/content.js";

export default {
  name: "FooterInfoContact",
  data() {
    return {
      content,
      contactInfo: content.component.footer.contact,
      emailContent: content.component.footer.contact.email
    };
  }
};
</script>

<style scoped>
#footer-info-contact {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: -8px;
}

#footer-info-contact div {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

i {
  width: 30px;
  margin-right: 16px;
  font-size: 20px;
  color: #a7090a;
  text-align: center;
}

span {
  display: inline-block;
  width: 90%;
}

a {
  font-size: 18px;
  color: #4a4a4a;
}

@media only screen and (min-width: 768px) {
  i {
    font-size: 16px;
    margin-right: 10px;
  }

  a {
    font-size: 15px;
  }
}
</style>
