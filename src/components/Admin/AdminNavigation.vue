<template>
  <nav class="ttt list-none hidden lg:flex relative">
    <li class="mx-8 cursor-pointer hover:text-orange transition duration-300 ease-in-out" @click="$router.push('/')">Home</li>
    <li class="mx-8 cursor-pointer hover:text-orange transition duration-300 ease-in-out" @click="$router.push('/admin/register')">Product Register</li>
    <li class="mx-8 cursor-pointer hover:text-orange transition duration-300 ease-in-out" @click="$router.push('/admin/list')">Product List</li>
    <li class="mx-8 cursor-pointer hover:text-orange transition duration-300 ease-in-out" @click="$router.push('/category/1')">Product</li>
    <li v-show="auth" class="mx-8 mr-10 cursor-pointer hover:text-orange transition duration-300 ease-in-out"><a @click="$router.push(`/admin/mypage`)">Mypage</a></li>
    <li v-show="!auth" class="mx-8 mr-10 cursor-pointer hover:text-orange transition duration-300 ease-in-out"><a @click="$router.push(`/admin/login`)">Login</a></li>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      auth: this.$store.state.status
    }
  },
}
</script>
