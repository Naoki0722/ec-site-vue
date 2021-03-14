<template>
  <div class="min-h-screen font-serif relative pb-80 lg:pb-20 box-border">
    <Header></Header>
    <ContentTitle class="my-4 ml-9" :sendTitle="title"></ContentTitle>
    <p class="text-xl md:text-2xl text-center text-yellow-900 tracking-wide">Password Setting</p>
    <div class="text-center my-6 w-11/12 md:w-full mx-auto">
      <form class="text-left inline-block p-4 md:p-11" @submit.prevent="resetEmail">
        <div class="pb-6">
          <p class="text-center my-8">メールアドレスを入力してください</p>
          <input type="mail" id="email" name="email" class="w-3/4 block mx-auto border rounded border-gray-300 mt-12 px-3 py-2 my-8 font-sans" v-model="email" placeholder="test@test.com">
        </div>
        <div class="text-center">
          <button class="tracking-widest border hover:bg-orange rounded-full hover:text-white px-3 py-2 mt-12 transition duration-300 ease-in-out bg-transparent text-gray-600 border-orange focus:outline-none"><font-awesome-icon class="mr-1 text-yellow-900" :icon="['fas', 'check']" />パスワード再設定を入力する</button>
        </div>
      </form>
    </div>
    <div class="absolute bottom-0 w-screen">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import ContentTitle from "../components/ContentTitle.vue";
import firebase from 'firebase';
import "firebase/auth";
export default {
  components: {
    Header,
    Footer,
    ContentTitle
  },
  data() {
    return {
      title:"Login",
      email: ""
    }
  },
  methods: {
    async resetEmail() {
      const actionCodeSettings = {
        url: 'http://' + window.location.host
      }
      firebase.auth().languageCode = "ja";
      firebase
        .auth()
        .sendPasswordResetEmail(this.email, actionCodeSettings)
        .then(() => {
          alert('指定のメールアドレスにリセットメールを送信しました')
          this.$router.push({ name: 'ResetComplete'})
        })
        .catch(() => {
          alert('そのメールアドレスは登録されておりません')
        })
    }
  }
}
</script>