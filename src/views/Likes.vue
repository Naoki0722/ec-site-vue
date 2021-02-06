<template>
  <div class="min-h-screen relative pb-80 lg:pb-0 box-border">
    <Header></Header>
    <ContentTitle class="my-4 ml-9" :sendTitle="title"></ContentTitle>
    <p class="font-serif md:ml-12 lg:ml-40 text-lg md:text-2xl ml-6 md:ml-0 mr-6 md:mr-24 text-yellow-900 tracking-wide">松崎 直樹<span class="mr-2 md:mr-6"> 様</span>ようこそ！</p>
    <LikeTable></LikeTable>
    <div class="md:flex justify-center mt-11 md:mt-11 font-serif">
      <div class="my-11 text-center md:mr-32">
        <button class="py-3 text-sm md:text-base tracking-wider border hover:bg-orange rounded-full hover:text-white px-6 py-2 transition duration-300 ease-in-out bg-transparent text-gray-800 border-orange focus:outline-none" @click="$router.push('/mypage')">
          <font-awesome-icon class="mr-1 text-yellow-900" :icon="['fas', 'user-alt']" />マイページに戻る
        </button>
      </div>
      <div class="my-11 text-center">
        <button class="py-3 text-sm md:text-base tracking-wider border hover:bg-orange rounded-full hover:text-white px-6 py-2 transition duration-300 ease-in-out bg-transparent text-gray-800 border-orange focus:outline-none" @click="$router.push('/carts')">
          <font-awesome-icon class="mr-1 text-yellow-900" :icon="['fas', 'shopping-cart']" />カートに進む
        </button>
      </div>
      <div></div>
    </div>




    <div class="absolute bottom-0 w-screen">
      <Footer></Footer>
    </div>
  </div>
</template>


<script>
import Header from '../components/Header';
import ContentTitle from '../components/ContentTitle';
import LikeTable from '../components/LikeTable';

import Footer from '../components/Footer';
export default {
  components: {
    Header,
    ContentTitle,
    LikeTable,
    Footer
  },
  data() {
    return {
      title:"Likes"
    }
  },
}
</script>