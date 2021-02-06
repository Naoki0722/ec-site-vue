<template>
  <footer class="lg:flex justify-between items-end bg-footer-blue py-4 font-serif text-yellow-900">
  <!-- <footer class="bg-footer-blue py-4 w-screen"> -->
    <div class="mb-6 lg:mb-0 ml-6">
      <h1 class="text-2xl">One Pre</h1>
      <small class="hidden lg:block">© One Pre All Rights Reserved.</small>
    </div>
    <nav class="list-none lg:flex">
      <li class="mb-4 lg:mb-0 mx-6 lg:mx-8 cursor-pointer" @click="$router.push('/')">Home</li>
      <li class="mb-4 lg:mb-0 mx-6 lg:mx-8 cursor-pointer" @click="$router.push('/category')">Product</li>
      <li class="mb-4 lg:mb-0 mx-6 lg:mx-8 cursor-pointer" @click="$router.push('/contact')">Contact</li>
      <li class="mb-4 lg:mb-0 mx-6 lg:mx-8 cursor-pointer" >Pribacy Policy</li>
      <li class="mb-6 lg:mb-0 mx-6 lg:mx-8 mr-10 cursor-pointer">特定商取引法に基づく表示</li>
    </nav>
    <small class="block lg:hidden text-center">© One Pre All Rights Reserved.</small>
  </footer>
</template>