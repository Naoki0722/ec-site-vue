<template>
  <div class="font-serif md:ml-11">
    <h3 class="text-xl tracking-wider text-yellow-900 text-center md:text-left"><font-awesome-icon class="mr-1" :icon="['fas', 'ring']" />membership register</h3>
    <form class="w-60 mx-auto mt-6">
      <label for="name" class="tracking-wider text-yellow-900">name</label>
      <input type="text" name="namae" id="name" class="border rounded-md block w-full h-8 mb-4 px-2" v-model="name">
      <label for="email" class="tracking-wider text-yellow-900">email</label>
      <input type="text" name="email" id="email" class="border rounded-md block w-full h-8 mb-4 px-2" v-model="email">
      <label for="tell" class="tracking-wider text-yellow-900">tell</label>
      <input type="text" name="tell" id="tell" class="border rounded-md block w-full h-8 mb-4 px-2" v-model="tell">
      <label for="password" class="tracking-wider text-yellow-900">password</label>
      <input type="password" name="password" id="password" class="border rounded-md block w-full h-8 mb-11 px-2" v-model="password">
    </form>
    <div class="mt-16 mb-20 text-center">
      <button class="tracking-widest border hover:bg-orange rounded-full hover:text-white px-6 py-3 transition duration-300 ease-in-out bg-transparent text-gray-800 border-orange" @click="createUserAccount">
        register
      </button>
    </div>
  </div>
</template>


<script>
import firebase from 'firebase';
import "firebase/auth";
import axios from 'axios';
export default {
  data() {
    return {
      name: "",
      email: "",
      tell: "",
      password: "",
    }
  },
  methods: {
    createUserAccount() {
      firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
      .then((response) => {
        console.log(response);
        alert("登録しました");
        this.register();
      })
      .catch(error => {
        alert("失敗しました");
        console.error("Account Regeister Error", error.message);
      })
    },
    async register() {
      await 
        axios.post('http://localhost:8000/api/users', {
              name: this.name,
              email: this.email,
              tell_number: this.tell,
              password: this.password,
            })
            .then((response) => {
              console.log(response);
              this.$router.push("/login");
            })
            .catch((err) => {
              console.log('err:',err);
            })      
    }
  }
}
</script>