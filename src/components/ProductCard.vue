<template>
  <div class="product-card mt-5 mb-28">
    <div class="flex-wrap flex justify-center">
      <div class="my-3 md:my-o w-3/4 md:w-3/5 lg:w-3/12 parenthesis relative cursor-pointer hover:bg-gray-400 transition duration-1000 ease-out" @click="$router.push('/category/1')">
        <img src="../assets/product_1.jpg" alt="ピアス">
        <p class="absolute top-1/2 left-1/2 transform -translate-x-2/4 text-white text-base md:text-xl font-serif tracking-widest">ピアス</p>
      </div>
      <div class="my-3 md:my-o w-3/4 md:w-3/5 lg:w-3/12 parenthesis relative cursor-pointer hover:bg-gray-400 transition duration-1000 ease-out" @click="$router.push('/category/2')">
        <img src="../assets/product_1.jpg" alt="ピアス">
        <p class="absolute top-1/2 left-1/2 transform -translate-x-2/4 text-white text-base md:text-xl font-serif tracking-widest">リング</p>
      </div>
      <div class="my-3 md:my-o w-3/4 md:w-3/5 lg:w-3/12 parenthesis relative cursor-pointer hover:bg-gray-400 transition duration-1000 ease-out" @click="$router.push('/category/3')">
        <img src="../assets/product_1.jpg" alt="ピアス">
        <p class="absolute top-1/2 left-1/2 transform -translate-x-2/4 text-white text-base md:text-xl font-serif tracking-widest">ネックレス</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.parenthesis {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #000;
}
.parenthesis::before,
.parenthesis::after {
  position: absolute;
  content: '';
  width: 50px;
  height: 60px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.parenthesis::before {
  top: 8%;
  left: 8%;
  border-top: 1px solid white;
  border-left: 1px solid white;
}
.parenthesis::after {
  bottom: 8%;
  right: 8%;
  border-bottom: 1px solid white;
  border-right: 1px solid white;
}
.parenthesis img {
  display: block;
  opacity: .6;
}
</style>