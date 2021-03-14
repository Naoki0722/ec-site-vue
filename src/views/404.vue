<template>
  <div class="min-h-screen relative pb-80 lg:pb-20 box-border">
    <Header></Header>
    <h1 class="text-center mt-12 text-4xl">Not Found</h1>
    <div class="absolute bottom-0 w-screen">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }  
}
</script>