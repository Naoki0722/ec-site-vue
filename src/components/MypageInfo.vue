<template>
  <div class="md:pl-20 lg:pl-40 font-serif w-11/12 md:w-full lg:w-full mx-auto md:mx-0">
    <div class="md:flex items-center mb-11">
      <p class="text-lg md:text-2xl ml-6 md:ml-0 mr-11 md:mr-6 mb-6 md:mb-0 text-yellow-900 tracking-wide">{{user.name}}<span class="mr-2 md:mr-6"> 様</span>ようこそ！</p>
      <div class="flex md:block">
        <button class="block mx-auto md:inline md:mx-0 tracking-wider border hover:bg-blue-400 rounded-full hover:text-white px-3 md:px-6 py-2 transition duration-300 ease-in-out bg-transparent text-gray-800 border-blue-400 focus:outline-none" @click="edit" v-if="editFlag">
          登録編集
        </button>
        <button class="block mx-auto md:inline md:mx-0 tracking-wider border hover:bg-blue-400 rounded-full hover:text-white px-3 md:px-6 py-2 transition duration-300 ease-in-out bg-transparent text-gray-800 border-blue-400 focus:outline-none" @click="edit" v-else>
          編集完了
        </button>
        <button class="block mx-auto md:inline md:mx-11 tracking-wider border hover:bg-orange rounded-full hover:text-white px-3 md:px-6 py-2 transition duration-300 ease-in-out bg-transparent text-gray-800 border-orange focus:outline-none" @click="logout">
          ログアウト
        </button>
      </div>
    </div>
    <table class="text-left text-yellow-900 mx-auto md:mx-0">
      <tr>
        <th class="py-8 pr-14 md:pr-44">名前</th>
        <td v-if="editFlag">{{user.name}}</td>
        <td v-else><input type="text" class="border px-2 py-1" v-model="user.name"></td>
      </tr>
      <tr>
        <th class="py-8">email</th>
        <td v-if="editFlag">{{user.email}}</td>
        <td v-else><input type="email" class="border px-2 py-1" v-model="user.email"></td>
      </tr>
      <tr>
        <th class="py-8">電話番号</th>
        <td v-if="editFlag">{{user.tell_number}}</td>
        <td v-else><input type="text" class="border px-2 py-1" v-model="user.tell_number"></td>
      </tr>
    </table>
  </div>
</template>

<script>
import firebase from 'firebase';
import "firebase/auth";
import axios from 'axios';
export default {
  data() {
    return {
      editFlag: true,

    }
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.userLogout();
    },
    userLogout() {
      firebase.auth().signOut().then(() => {
        alert("ログアウトしました");
        this.$store.dispatch('onAuth');
        this.$router.push("/login");
      })
      .catch(error => {
        alert(error);
      })
    },
    async edit() {
      if(!this.editFlag) {
        await
          axios
            .put(`https://gentle-wildwood-14193.herokuapp.com/api/users/${this.user.id}`,{
              name: this.user.name,
              email: this.user.email,
              tell_number: this.user.tell_number
            })
            .then((res) => {
              this.$store.dispatch('editUser',{
                name: this.user.name,
                email: this.user.email,
                tell_number: this.user.tell_number
              });
              console.log(res);
            })

      }
      this.editFlag = !this.editFlag
    },
  }
}
</script>