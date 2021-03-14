<template>
  <div class="font-serif md:ml-11">
    <h3 class="text-xl tracking-wider text-yellow-900 text-center md:text-left"><font-awesome-icon class="mr-1" :icon="['fas', 'ring']" />membership login</h3>
    <form class="w-60 mx-auto md:mx-0 mt-6">
      <label for="email" class="tracking-wider text-yellow-900">email</label>
      <input type="text" name="email" id="email" class="border rounded-md block w-full h-8 mb-6 px-2" v-model="email">
      <label for="password" class="tracking-wider text-yellow-900">password</label>
      <input type="password" name="password" id="password" class="border rounded-md block w-full h-8 mb-11 px-2" v-model="password">
    </form>
    <button class="block m-auto text-orange tracking-wide border rounded-full px-3 py-2 border-orange hover:bg-orange hover:text-white transition duration-300 ease-in-out focus:outline-none" @click="$router.push('/reset')">forget your password?</button>
    <div class="mt-11 mb-11 text-center">  
      <button class="tracking-widest border hover:bg-orange rounded-full hover:text-white px-6 py-3 transition duration-300 ease-in-out bg-transparent text-gray-600 border-orange focus:outline-none" @click="firebaseSignIn">
        login
      </button>
    </div>
    <div class="mt-11 mb-11 text-center">  
      <button class="border hover:bg-orange rounded-full hover:text-white px-2 py-2 transition duration-300 ease-in-out bg-transparent text-gray-600 border-orange focus:outline-none" @click="$router.push('/login')">
        ユーザーの方はこちらから
      </button>
    </div>
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
      token: ""
    }
  },
  created() {

  },
  methods: {
    userSignIn() {
      this.$store.dispatch('adminLogin', {
        email: this.email,
        token: this.token
      });
    },
    firebaseSignIn() {
      firebase.auth().signInWithEmailAndPassword(this.email,this.password)
      .then((response) => {
        console.log(response);
        this.getToken()
        this.$store.dispatch('onAuth');
        this.$router.push('/admin/mypage');
      })
      .catch((error) => {
        alert('失敗しました');
        console.error('error',error);
      })
    },
    getToken() {
      firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then((idToken) =>{
        this.token = idToken;
        this.$store.dispatch('getToken', {
          token: this.token
        });
        this.userSignIn()
      })
      .catch((error) => {
        alert(error);
      });
    },
  },

}
</script>
