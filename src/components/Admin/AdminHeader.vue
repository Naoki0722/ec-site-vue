<template>
  <Header class="bg-gray-300 flex justify-between items-center py-4 text-yellow-900 font-serif font-normal">
    <div class="flex items-center">
      <h1 class="ml-8 text-2xl cursor-pointer" @click="$router.push('/')">One Pre</h1>
      <p class="text-center border bg-orange text-xs text-white py-1 px-2 ml-4 border-orange">管理者ページ</p>
    </div>
    <AdminNavigation></AdminNavigation>
    <AdminHamburger></AdminHamburger>
  </Header>
</template>


<script>
import AdminNavigation from './AdminNavigation.vue';
import AdminHamburger from './AdminHamburger.vue';
export default {
  props: ["link"],
  components: {
    AdminNavigation,
    AdminHamburger
  },
}
</script>
