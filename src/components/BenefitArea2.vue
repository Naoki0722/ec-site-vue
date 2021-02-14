<template>
  <div class="flex flex-wrap lg:flex-nowrap lg:justify-center mb-24 lg:mb-60 lg:mt-60">
    <img src="../assets/product_1.jpg" alt="ピアス" class="relative z-20 w-4/5 lg:w-2/5 mx-auto lg:hidden">
    <div class="relative z-10 w-4/5 p-6 lg:p-0 lg:w-2/5 mx-auto lg:mx-0 bg-gray-100 lg:bg-transparent">
      <div class="w-full lg:w-3/5 contents-area font-serif text-yellow-900">
        <h2 class="mb-20 text-lg md:text-2xl">日常生活の一部</h2>
        <p class="mb-10">普段からアクセサリーをつけるだけで、気分が上がり、日常を楽しくしてくれるものです。</p>
        <p>付けるのが面倒だから...と思わず、まずは付けたいアクセサリーを選んでみましょう！</p>
      </div>
      <div class="block-area hidden lg:block bg-gray-100 w-full h-5/6 absolute top-1/4 left-1/3 -z-10"></div>
    </div>
    <img src="../assets/product_1.jpg" alt="ピアス" class="hidden lg:inline relative z-20 w-4/5 lg:w-2/5 mx-auto">
  </div>
</template>

<style scoped>

.block-area {
  z-index: -60;
}

.contents-area {
  margin: 0 0 0 auto;
}
</style>