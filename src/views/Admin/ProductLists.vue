<template>
  <div class="min-h-screen relative pb-80 lg:pb-20 box-border">
    <AdminHeader></AdminHeader>
    <ContentTitle class="my-4 ml-9" :sendTitle="title"></ContentTitle>
    <p class="font-serif md:ml-12 lg:ml-40 text-lg md:text-2xl ml-6 md:ml-0 mr-6 md:mr-24 text-yellow-900 tracking-wide">商品管理一覧</p>
    <ProductTable></ProductTable>
    <div class="md:flex justify-center mt-11 md:mt-11 font-serif">
      <div class="my-11 text-center md:mr-32">
        <button class="py-3 text-sm md:text-base tracking-wider border hover:bg-orange rounded-full hover:text-white px-6 py-2 transition duration-300 ease-in-out bg-transparent text-gray-800 border-orange focus:outline-none" @click="$router.push('/admin/mypage')">
          <font-awesome-icon class="mr-1 text-yellow-900" :icon="['fas', 'user-alt']" />マイページに戻る
        </button>
      </div>
      <div class="my-11 text-center">
        <button class="py-3 text-sm md:text-base tracking-wider border hover:bg-orange rounded-full hover:text-white px-6 py-2 transition duration-300 ease-in-out bg-transparent text-gray-800 border-orange focus:outline-none" @click="$router.push('/admin/register')">
          <font-awesome-icon class="mr-1 text-yellow-900" :icon="['fas', 'archive']" />商品登録
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
import ProductTable from '../../components/Admin/ProductTable';

import Footer from '../../components/Footer';
export default {
  components: {
    AdminHeader,
    ContentTitle,
    ProductTable,
    Footer
  },
  data() {
    return {
      title:"Product Lists",
    }
  },
}
</script>