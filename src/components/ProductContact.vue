<template>
  <div class="block lg:flex mb-24 font-serif font-thin">
    <div class="relative bg-gray-700 cursor-pointer hover:bg-black transition duration-500 linear" @click="$router.push('/category/1')">
      <img src="../assets/firstview.jpg" alt="トップ画像" class="block opacity-60 w-full h-44 lg:h-60 object-cover">
      <h2 class="product-title absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base lg:text-2xl text-center">商品について</h2>
    </div>
    <div class="relative bg-gray-700 cursor-pointer hover:bg-black transition duration-500 linear" @click="$router.push('/contact')">
      <img src="../assets/product_1.jpg" alt="歴史" class="block opacity-60 w-full h-44 lg:h-60 object-cover">
      <h2 class="contact-title absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base lg:text-2xl text-center">お問い合わせ</h2>
    </div>
  </div>
</template>

<style scoped>
.product-title::after {
  content: 'PRODUCT';
  display: block;
  font-size: 1.3rem;
  margin: 10px 0;
}
.contact-title::after {
  content: 'CONTACT';
  display: block;
  font-size: 1.3rem;
  margin: 10px 0;
}

</style>