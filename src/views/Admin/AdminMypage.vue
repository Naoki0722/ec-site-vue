<template>
  <div class="min-h-screen relative pb-80 lg:pb-16 box-border">
    <AdminHeader></AdminHeader>
    <ContentTitle class="my-4 ml-9" :sendTitle="title"></ContentTitle>
    <MypageInfo></MypageInfo>
    <div class="md:flex justify-around mt-11 md:mt-2 font-serif">
      <div class="my-11 text-center">
        <button class="py-3 tracking-wider border hover:bg-orange rounded-full hover:text-white px-6 py-2 transition duration-300 ease-in-out bg-transparent text-gray-800 border-orange focus:outline-none" @click="$router.push('/admin/list')">
          <font-awesome-icon class="mr-1 text-yellow-900" :icon="['fas', 'list']" />商品リスト一覧
        </button>
      </div>
      <div class="my-11 text-center">
        <button class="py-3 tracking-wider border hover:bg-orange rounded-full hover:text-white px-6 py-2 transition duration-300 ease-in-out bg-transparent text-gray-800 border-orange focus:outline-none" @click="$router.push('/admin/register')">
          <font-awesome-icon class="mr-1 text-yellow-900" :icon="['fas', 'archive']" />商品登録
        </button>
      </div>
      <div class="my-11 text-center">
        <button class="py-3 tracking-wider border hover:bg-orange rounded-full hover:text-white px-6 py-2 transition duration-300 ease-in-out bg-transparent text-gray-800 border-orange focus:outline-none" @click="$router.push('/reset')">
          <font-awesome-icon class="mr-1 text-yellow-900" :icon="['fas', 'key']" />パスワード再設定
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
import AdminHeader from '../../components/Admin/AdminHeader';
import ContentTitle from '../../components/ContentTitle';
import MypageInfo from '../../components/MypageInfo';
import Footer from '../../components/Footer';
export default {
  components: {
    AdminHeader,
    ContentTitle,
    MypageInfo,
    Footer
  },
  data() {
    return {
      title:"Mypage",
    }
  },
}
</script>