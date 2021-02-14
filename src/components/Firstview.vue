<template>
  <div class="relative mb-10">
    <img src="../assets/firstview.jpg" alt="トップ画像" class="image-size w-full md:h-full lg:h-5/6 object-cover firstview">
    <div class="absolute top-4 md:top-8 lg:top-16 left-6 lg:left-10 lg:h-screen text-white lg:font-medium lg:tracking-wider font-serif">
      <h2 class="text-lg md:text-4xl border-b-2 inline-block">日常に輝きをプラス</h2>
      <h3 class="text-xs text-blue-600 bg-purple-50 md:text-3xl p-2 my-2 md:my-11 font-sans rounded">たった一つのアクセサリーから始まる物語</h3>
    </div>
    <!-- <h2 class="absolute top-1/4  left-6 lg:left-10 bg-yellow-50 lg:bg-transparent text-xm font-serif  lg:h-screen lg:text-4xl lg:top-1/4 text-white lg:font-medium lg:tracking-wider">日常に輝きをプラス</h2> -->
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
