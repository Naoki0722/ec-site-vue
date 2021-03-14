<template>
  <div class="font-serif md:ml-11">
    <h3 class="text-xl tracking-wider text-yellow-900 text-center md:text-left"><font-awesome-icon class="mr-1" :icon="['fas', 'ring']" />membership login</h3>
    <form class="w-60 mx-auto md:mx-0 mt-6">
      <label for="email" class="tracking-wider text-yellow-900">email</label>
      <input type="text" name="email" id="email" class="border rounded-md block w-full h-8 mb-6 px-2" v-model="email">
      <label for="password" class="tracking-wider text-yellow-900">password</label>
      <input type="password" name="password" id="password" class="border rounded-md block w-full h-8 mb-11 px-2" v-model="password">
      <!-- <input type="checkbox" name="remember" id="remember" class="border rounded-md mb-11 mr-3">
      <label for="remember" class="tracking-wider text-yellow-900">remember me</label> -->
    </form>
    <button class="block m-auto text-orange tracking-wide border rounded-full px-3 py-2 border-orange hover:bg-orange hover:text-white transition duration-300 ease-in-out focus:outline-none" @click="$router.push('/reset')">forget your password?</button>
    <div class="mt-11 mb-11 text-center">  
      <button class="tracking-widest border hover:bg-orange rounded-full hover:text-white px-6 py-3 transition duration-300 ease-in-out bg-transparent text-gray-600 border-orange focus:outline-none" @click="firebaseSignIn">
        login
      </button>
    </div>
    <div class="mt-11 mb-11 text-center">  
      <button class="border hover:bg-orange rounded-full hover:text-white px-2 py-2 transition duration-300 ease-in-out bg-transparent text-gray-600 border-orange focus:outline-none" @click="$router.push('/admin/login')">
        管理者の方はこちらから
      </button>
    </div>
    <!-- 今後の実装で考える予定 -->
    <!-- <p class="my-6 font-serif tracking-wider text-yellow-900 text-lg text-center md:text-left">or continue with</p>
    <div class="md:flex md:justify-start text-center  my-6">
      <button class="px-10 py-1 mb-6 md:mb-0 mx-11 md:mx-0 md:mr-11 border rounded-lg" @click="googleLogin"><font-awesome-icon class="mr-1 text-yellow-900" :icon="['fab', 'google']" /></button>
      <button class="px-10 py-1 mb-6 md:mb-0 mx-11 md:mx-0 md:mr-11 border rounded-lg"><font-awesome-icon class="mr-1 text-yellow-900" :icon="['fab', 'facebook-square']" /></button>
      <button class="px-10 py-1 mb-6 md:mb-0 mx-11 md:mx-0 border rounded-lg"><font-awesome-icon class="mr-1 text-yellow-900" :icon="['fab', 'twitter-square']" /></button>
    </div> -->
  </div>
</template>


<script>
import firebase from 'firebase';
import "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
    }
  },
  created() {

  },
  methods: {
    userSignIn() {
      this.$store.dispatch('login', {
        email: this.email,
      });
    },
    firebaseSignIn() {
      firebase.auth().signInWithEmailAndPassword(this.email,this.password)
      .then((response) => {
        console.log(response);
        this.authUser()
      })
      .catch((error) => {
        alert('失敗しました');
        console.log(error);
      })
    },
    authUser() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user.emailVerified) {
          this.userSignIn()
          this.$store.dispatch('onAuth');
          this.$router.push('/mypage');
        } else {
          alert('メール認証済んでいません、メールをご確認ください');
          this.sendEmail()
        }
      });
    },
    sendEmail() {
      const actionCodeSettings = {
        url: "https://" + location.host + "/login",
      };
      firebase.auth().languageCode = "ja";
      const user = firebase.auth().currentUser;
      user
        .sendEmailVerification(actionCodeSettings)
        .then(() => alert("認証メールを送りました!"))
        .catch((e) => console.log(e));
    },
    // googleLogin() {
    //   var provider = new firebase.auth.GoogleAuthProvider();
    //   firebase.auth()
    //     .signInWithPopup(provider)
    //     .then((response) => {
    //       console.log(response);
    //       this.$store.dispatch('onAuth');
    //       this.$store.dispatch('login', {
    //         email: response.user.email,
    //         // password: this.password
    //       });
    //       this.$router.push('/mypage');
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     })
    // }
  },

}
</script>