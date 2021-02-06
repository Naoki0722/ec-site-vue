<template>
  <div class="min-h-screen relative pb-80 lg:pb-0 box-border">
    <Header></Header>
    <ContentTitle class="my-4 ml-9" :sendTitle="title"></ContentTitle>
    <MypageInfo></MypageInfo>
    <div class="md:flex justify-around mt-11 md:mt-24 font-serif">
      <div class="my-11 text-center">
        <button class="py-3 tracking-wider border hover:bg-orange rounded-full hover:text-white px-6 py-2 transition duration-300 ease-in-out bg-transparent text-gray-800 border-orange focus:outline-none" @click="$router.push('/likes')">
          <font-awesome-icon class="mr-1 text-yellow-900" :icon="['fas', 'heart']" />お気に入りを見る
        </button>
      </div>
      <div class="my-11 text-center">
        <button class="py-3 tracking-wider border hover:bg-orange rounded-full hover:text-white px-6 py-2 transition duration-300 ease-in-out bg-transparent text-gray-800 border-orange focus:outline-none" @click="$router.push('/carts')">
          <font-awesome-icon class="mr-1 text-yellow-900" :icon="['fas', 'shopping-cart']" />カート内一覧
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
import MypageInfo from '../components/MypageInfo';

import Footer from '../components/Footer';
export default {
  components: {
    Header,
    ContentTitle,
    MypageInfo,
    Footer
  },
  data() {
    return {
      title:"Mypage"
    }
  },
}
</script>