<template>
  <div class="md:w-1/2 mx-auto md:mx-0">
    <img src="../assets/product_1.jpg" alt="ピアス" class="hidden md:inline w-full h-80 object-cover">
    <p class="block md:hidden text-center font-serif">会員登録していない方はコチラより</p>
    <div class="mt-16 mb-20 text-center md:flex md:items-center">  
      <button class="tracking-widest border hover:bg-orange rounded-full hover:text-white px-6 py-3 transition duration-300 ease-in-out bg-transparent text-gray-600 border-orange font-serif focus:outline-none" @click="$router.push('/register')">
        register
      </button>
      <p class="ml-6 hidden md:block font-serif text-gray-600">← 会員登録していない方はコチラより</p>
    </div>
  </div>  
</template>

