<template>
  <div class="relative mb-10 lg:h-screen">
    <img src="../assets/firstview.jpg" alt="トップ画像" class="image-size w-full h-5/6 object-cover firstview">
    <h2 class="absolute top-1/4  left-6 lg:left-10 bg-yellow-50 lg:bg-transparent text-xm font-serif  lg:h-screen lg:text-2xl lg:top-1/3 text-yellow-900">日常に輝きをプラス</h2>
    <ScrollButton></ScrollButton>
  </div>
</template>

<script>
import ScrollButton from '../components/ScrollButton.vue';
export default {
  components: {
    ScrollButton
  }
  
}
</script>

<style scoped>
.image-size {
  /* height: 200px; */
}
</style>