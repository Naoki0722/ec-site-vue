<template>
  <div class="product-card mt-5 mb-28">
    <div class="flex-wrap flex justify-center">
      <div class="my-3 md:my-o w-3/4 md:w-2/3 lg:w-4/12 parenthesis relative">
        <img src="../assets/product_1.jpg" alt="ピアス">
        <p class="absolute top-1/2 left-1/2 transform -translate-x-2/4 text-white text-xl font-serif tracking-widest">ピアス</p>
      </div>
      <div class="my-3 md:my-o w-3/4 md:w-2/3 lg:w-4/12 parenthesis relative">
        <img src="../assets/product_1.jpg" alt="ピアス">
        <p class="absolute top-1/2 left-1/2 transform -translate-x-2/4 text-white text-xl font-serif tracking-widest">リング</p>
      </div>
      <div class="my-3 md:my-o w-3/4 md:w-2/3 lg:w-4/12 parenthesis relative">
        <img src="../assets/product_1.jpg" alt="ピアス">
        <p class="absolute top-1/2 left-1/2 transform -translate-x-2/4 text-white text-xl font-serif tracking-widest">修理</p>
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