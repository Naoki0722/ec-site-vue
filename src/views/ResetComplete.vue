<template>
  <div class="min-h-screen font-serif relative pb-80 lg:pb-20 box-border">
    <Header></Header>
    <ContentTitle class="my-4 ml-9" :sendTitle="title"></ContentTitle>
    <p class="text-xl md:text-2xl text-center text-yellow-900 tracking-wide">Reset Completed</p>
    <div class="text-center my-6 w-11/12 md:w-full mx-auto">
      <form class="text-left inline-block p-4 md:p-11" @submit.prevent="onSubmit">
        <div class="pb-6">
          <p class="text-center my-8">入力メールアドレス宛にパスワード再設定メールを送信しました。</p>
        </div>
        <div class="text-center">
          <button class="tracking-widest border hover:bg-orange rounded-full hover:text-white px-3 py-2 mt-12 transition duration-300 ease-in-out bg-transparent text-gray-600 border-orange focus:outline-none" @click="backLogin"><font-awesome-icon class="mr-1 text-yellow-900" :icon="['fas', 'check']" />ログインに戻る</button>
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
export default {
  components: {
    Header,
    Footer,
    ContentTitle
  },
  data() {
    return {
      title:"Login",
      name: "",
      email: ""
    }
  },
  methods: {
    backLogin() {
      this.$router.push({ name: 'Login'})
    }
  }
}
</script>