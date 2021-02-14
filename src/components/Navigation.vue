<template>
  <nav class="ttt list-none hidden lg:flex relative">
    <li class="mx-8 cursor-pointer hover:text-orange transition duration-300 ease-in-out" @click="$router.push('/')">Home</li>
    <li class="mx-8 cursor-pointer hover:text-orange transition duration-300 ease-in-out" @click="$router.push('/category/1')">Product</li>
    <li class="mx-8 cursor-pointer hover:text-orange transition duration-300 ease-in-out" @click="$router.push('/likes')">Favorite</li>
    <li class="mx-8 cursor-pointer hover:text-orange transition duration-300 ease-in-out" @click="$router.push('/carts')">Cart</li>
    <li class="mx-8 cursor-pointer hover:text-orange transition duration-300 ease-in-out" @click="$router.push('/contact')">Contact</li>
    <li v-show="auth" class="mx-8 mr-10 cursor-pointer hover:text-orange transition duration-300 ease-in-out"><a @click="$router.push(`/mypage`)">Mypage</a></li>
    <li v-show="!auth" class="mx-8 mr-10 cursor-pointer hover:text-orange transition duration-300 ease-in-out"><a @click="$router.push(`/login`)">Login</a></li>
  </nav>
</template>

<script>
export default {
  props:["getText"],
  data() {
    return {
      link: this.getText.toLowerCase(),
      auth: this.$store.state.status
    }
  },
}
</script>


<style scoped>

</style>