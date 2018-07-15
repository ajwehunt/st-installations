<template>
  <aside>
    <button class="btn btn-primary" v-if="!authorized" @click="runLogin()">Click to login</button>
    <div v-if="authorized">
      <div class="row">
        <div class="col-md-6">
          <img :src="facebookImg" class="img img-repsonsive">
          <p>{{ facebookName }}</p>
          <p>{{ facebookEmail }}</p>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import content from "@/services/content.js";

/*eslint-disable*/
export default {
  name: "HomeSocial",
  props: ["fbId"],
  data () {
    return {
    token: content.token,
    authorized: false,
    facebookName: '',
    facebookEmail: '',
    facebookImg: ''
    };
  }, 
  methods: {
  	runLogin() {
  		FB.login((response) => { this.checkLoginState() }, {scope: 'public_profile, email'});
  	},
  	checkLoginState() {
	    FB.getLoginStatus((response) => this.statusChangeCallback(response));
  	},
  	//Check status from facebook
  	statusChangeCallback(response) {
      console.log(response)
	      if (response.status === 'connected') {
	      	//Run things when user is logged in at facebook
	        this.getFacebookData();
	        this.authorized = true;
	      } else {
	  		//Run things when user is not logged in at facebook
	     console.log('Login is needed');
	    }
  	},
  	//Add more fields from the graph api or create a new function
  	//and call this at the statusChangeCallback function
  	getFacebookData() {
      console.log('getit')
	    FB.api('/me', 'GET', {"fields": "email, name, picture"}, (response) => {
          console.log(response);
	      
	      this.facebookName = response.name;
	      this.facebookEmail = response.email;
	      this.facebookImg = response.picture.data.url;
      });
      FB.api( "/page-id/feed", { access_token : this.token }, (response) => {
        if (response && !response.error) {
          console.log(response);
        }
      }
      );
  	}
  },
  created() {
    window.fbAsyncInit = () => {
    // init the facebook app config
      FB.init({
        appId      : this.fbId,
        cookie     : true, 
        xfbml      : true, 
        version    : 'v3.0'
      });
      // Get login status at start to see if the user is already logged in
      FB.getLoginStatus((response) => this.statusChangeCallback(response));
    };
    // Load the SKD from Facebook
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
};
</script>
