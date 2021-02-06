<template>
  <div class="min-h-screen relative pb-80 lg:pb-20 box-border">
    <Header></Header>
    <div class="absolute top-1/4 md:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h2 class="text-center w-screen px-4 md:px-0 text-base md:text-3xl font-serif text-yellow-900 mb-6 md:mb-0">購入いただきありがとうございました！</h2>
      <div class="md:my-11 text-center">
        <a href="" class="tracking-wider border hover:bg-orange rounded-full hover:text-white px-6 py-2 transition duration-300 ease-in-out bg-transparent text-gray-800 border-orange">
          Homeへ戻る
        </a>
      </div>
    </div>
    <div class="absolute bottom-0 w-screen">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
export default {
  components: {
    Header,
    Footer
  }
}
</script>