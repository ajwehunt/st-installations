<template>
  <ul id="footer-nav-social">
    <li>
      <a href="https://www.facebook.com/strongtoweraz/" target="_blank">
        <i class="fa fa-facebook" aria-hidden="true"/>
      </a>
    </li>
    <!-- <li>
      <div class="fb-like" data-href="https://www.facebook.com/strongtowerinstallations/" data-layout="button" data-action="like" data-size="small" data-show-faces="false" data-share="true"></div>
    </li> -->
    <li id="thumbtack">
      <a target="_blank" href="https://www.thumbtack.com/-Gilbert-AZ/service/2365712">
        <img style="" src="https://static.thumbtackstatic.com/media/pages/profile/standard-widgets/pro-svg/inline.svg"/>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "FooterNavSocial"
};
</script>

<style scoped>
a {
  color: #4a4a4a;
  padding: 6px;
  font-size: 19px;
}

img {
  height: 20px;
}

#footer-nav-social {
  display: flex;
  align-items: center;
  justify-content: center;
}

#thumbtack {
  margin-top: 3px;
}

.fa-facebook {
  margin-top: 3px;
}

@media only screen and (min-width: 768px) {
  #footer-nav-social {
    justify-content: end;
    align-items: flex-start;
    margin-top: 18px;
  }
}
</style>
