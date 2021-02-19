<template>
  <div class="w-1/2 mx-auto md:mx-0">
    <img src="../assets/product_1.jpg" alt="ピアス" class="hidden md:inline w-full h-80 object-cover">
    <!-- 今後の実装で考える -->
    <!-- <p class="my-6 font-serif tracking-wider text-yellow-900 text-lg text-center md:text-left">or continue with</p>
    <div class="md:flex md:justify-start text-center  my-6">
      <button class="px-10 py-1 mb-6 md:mb-0 md:mr-11 border rounded-lg" @click="googleLogin"><font-awesome-icon class="mr-1 text-yellow-900" :icon="['fab', 'google']" /></button>
      <button class="px-10 py-1 mb-6 md:mb-0 md:mr-11 border rounded-lg" @click="facebookLogin"><font-awesome-icon class="mr-1 text-yellow-900" :icon="['fab', 'facebook-square']" /></button>
      <button class="px-10 py-1 mb-6 md:mb-0 border rounded-lg" @click="twitterLogin"><font-awesome-icon class="mr-1 text-yellow-900" :icon="['fab', 'twitter-square']" /></button>
    </div> -->
  </div>  
</template>


<script>
// import firebase from 'firebase';
// import "firebase/auth";
import axios from 'axios';
export default {
  methods: {
    // 今後の実装で考える
    // googleLogin() {
    //   var provider = new firebase.auth.GoogleAuthProvider();
    //   firebase.auth()
    //     .signInWithPopup(provider)
    //     .then((response) => {
    //       console.log(response);
    //       this.$store.dispatch('onAuth');
    //       this.register(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     })
    // },
    // facebookLogin() {
    //   var provider = new firebase.auth.FacebookAuthProvider();
    //   firebase.auth()
    //     .signInWithPopup(provider)
    //     .then((response) => {
    //       console.log(response);
    //       window.alert('いけた')
    //       // this.$store.dispatch('onAuth');
    //       // this.register(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     })
    // },
    // twitterLogin() {
    //   var provider = new firebase.auth.TwitterAuthProvider();
    //   firebase.auth()
    //     .signInWithPopup(provider)
    //     .then((response) => {
    //       console.log(response);
    //       window.alert('いけた')
    //       // this.$store.dispatch('onAuth');
    //       // this.register(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     })
    // },
    async register(response) {
      await 
        axios.post('https://gentle-wildwood-14193.herokuapp.com/api/users', {
              name: response.user.displayName,
              email: response.user.email,
              tell_number: '00011110000',
              password: response.user.uid,
            })
            .then((response) => {
              console.log(response);
              this.$store.dispatch('login', {
                email: response.data.data.email,
                // password: this.password
              });
              this.$router.push('/mypage');
            })
            .catch((err) => {
              console.log('err:',err);
            })      
    }
  }
}
</script>

