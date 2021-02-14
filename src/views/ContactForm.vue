<template>
  <div class="min-h-screen font-serif relative pb-80 lg:pb-20 box-border">
    <Header></Header>
    <ContentTitle class="my-4 ml-9" :sendTitle="title"></ContentTitle>
    <p class="text-xl md:text-2xl text-center text-yellow-900 tracking-wide">お問い合わせ内容入力</p>
    

    <div class="text-center my-6 w-11/12 md:w-full mx-auto">
      <form class="text-left inline-block border p-4 md:p-11 shadow-md" >
        <div class="pb-6">
          <label for="name" class="block w-56 float-left">名前</label>
          <input type="text" id="name" name="name" class="border rounded border-gray-300 px-2 py-1 font-sans focus:outline-none" v-model="name" placeholder="山田太郎">
        </div>
        <div class="pb-6">
          <label for="email" class="block w-56 float-left">メールアドレス</label>
          <input type="mail" id="email" name="email" class="border rounded border-gray-300 px-2 py-1 font-sans" v-model="email" placeholder="test@test.com">
        </div>
        <div class="pb-6">
          <label for="tell" class="block w-56 float-left">電話番号</label>
          <input type="text" id="tell" name="tell" class="border rounded border-gray-300 px-2 py-1 font-sans focus:outline-none" v-model="tell" placeholder="000-0000-0000">
        </div>
        <div class="w-full">
          <label for="message" class="block mb-4">お問い合わせ内容</label>
          <textarea  id="message" name="message" class="border rounded border-gray-300 px-2 py-1 w-full h-36 mb-6 focus:outline-none" v-model="message" placeholder="ここにお問い合わせ内容を入力ください。"></textarea>
        </div>
        <div class="text-center">
          <button class="w-24 mr-2 tracking-wider text-center border hover:bg-orange rounded-full hover:text-white px-0 py-2 transition duration-300 ease-in-out bg-transparent text-gray-800 border-orange focus:outline-none" @click="onSubmit"><font-awesome-icon class="mr-1 text-yellow-900" :icon="['fas', 'check']" />送信</button>
        </div>
      </form>
    </div>



    <div class="absolute bottom-0 w-screen">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header';
import ContentTitle from '../components/ContentTitle';
import Footer from '../components/Footer';
import axios from 'axios';
export default {
  components: {
    Header,
    ContentTitle,
    Footer
  },
  data() {
    return {
      title: "Contact",
      name: "",
      email: "",
      tell: "",
      message: ""
    }
  },
  methods: {
    async onSubmit() {
      const params = new URLSearchParams();
      params.append('form-name', 'contact');
      params.append('name', this.name)
      params.append('email', this.email)
      params.append('tell', this.tell)
      params.append('message', this.message)

      axios
        .post('/',params)
        .then(()=>{
          alert('送信しました');
          this.$router.push('/cthanks');
          // this.$router.push({name: "ContactThanks"})
        })

    }
  }
}
</script>


<style scoped>
.test {
  display: block;
  float:left;
  margin: 0 100px;
}
</style>