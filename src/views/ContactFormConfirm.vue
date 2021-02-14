<template>
  <!-- netlifyでは使えない -->
  <div class="min-h-screen font-serif relative pb-80 lg:pb-20 box-border">
    <Header></Header>
    <ContentTitle class="my-4 ml-9" :sendTitle="title"></ContentTitle>
    <p class="text-xl md:text-2xl text-center text-yellow-900 tracking-wide">お問い合わせ内容確認</p>
    

    <div class="text-center my-6 w-11/12 md:w-full mx-auto">
      <div class="md:w-3/5 lg:w-2/5 text-left inline-block border p-4 md:p-11 shadow-md text-sm md:text-base">
        <div class="pb-8">
          <label for="name" class="block w-32 md:w-56 float-left">名前</label>
          <p class="inline font-sans">山田太郎</p>
        </div>
        <div class="pb-8">
          <label for="email" class="block w-32 md:w-56 float-left">メールアドレス</label>
          <p class="inline font-sans">test@test.com</p>
        </div>
        <div class="pb-8">
          <label for="tell" class="block w-32 md:w-56 float-left">電話番号</label>
          <p class="inline font-sans">000-0000-0000</p>
        </div>
        <div class="w-full">
          <label for="message" class="block mb-4">お問い合わせ内容</label>
          <p class="font-sans w-full h-36 mb-6">ここにお問い合わせ内容を入力してください、ここにお問い合わせ内容を入力してください。ここにお問い合わせ内容を入力してください、ここにお問い合わせ内容を入力してください。</p>
        </div>
        <div class="text-center flex">
          <button class="block mx-auto w-24 tracking-wider text-center border hover:bg-orange rounded-full hover:text-white  px-0 py-2 transition duration-300 ease-in-out bg-transparent text-gray-800 border-orange focus:outline-none" @click="$router.back()">戻る</button>
          <input type="submit" value="送信" class="block mx-auto w-24 tracking-wider text-center border hover:bg-orange rounded-full hover:text-white px-0 py-2 transition duration-300 ease-in-out bg-transparent text-gray-800 border-orange focus:outline-none">
        </div>
      </div>
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
export default {
  components: {
    Header,
    ContentTitle,
    Footer
  },
  data() {
    return {
      title: "Contact"
    }
  },
}
</script>


<style scoped>
.test {
  display: block;
  float:left;
  margin: 0 100px;
}
</style>