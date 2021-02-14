<template>
  <Header class="bg-footer-blue flex justify-between items-center py-4 text-yellow-900 font-serif font-normal">
    <h1 class="ml-8 text-2xl cursor-pointer" @click="$router.push('/')">One Pre</h1>
    <Navigation :getText="sendText"></Navigation>
    <Hamburger :getText="sendText"></Hamburger>
  </Header>
</template>


<script>
import Navigation from '../components/Navigation.vue';
import Hamburger from '../components/Hamburger.vue';
export default {
  props: ["link"],
  components: {
    Navigation,
    Hamburger
  },
  data() {
    return {
      sendText: "Login"
    }
  },
}
</script>

<style scoped>
</style>