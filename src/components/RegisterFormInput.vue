<template>
  <div class="font-serif md:ml-11">
    <h3 class="text-xl tracking-wider text-yellow-900 text-center md:text-left"><font-awesome-icon class="mr-1" :icon="['fas', 'ring']" />membership register</h3>
    <form class="w-60 mx-auto mt-6">
      <label for="name" class="tracking-wider text-yellow-900">name</label>
      <input type="text" name="namae" id="name" class="border rounded-md block w-full h-8 mb-4 px-2">
      <label for="email" class="tracking-wider text-yellow-900">email</label>
      <input type="text" name="email" id="email" class="border rounded-md block w-full h-8 mb-4 px-2">
      <label for="tell" class="tracking-wider text-yellow-900">tell</label>
      <input type="text" name="tell" id="tell" class="border rounded-md block w-full h-8 mb-4 px-2">
      <label for="password" class="tracking-wider text-yellow-900">password</label>
      <input type="password" name="password" id="password" class="border rounded-md block w-full h-8 mb-11 px-2">
    </form>
    <div class="mt-16 mb-20 text-center">  
      <a href="" class="tracking-widest border hover:bg-orange rounded-full hover:text-white px-6 py-3 transition duration-300 ease-in-out bg-transparent text-gray-800 border-orange">
        register
      </a>
    </div>
  </div>
</template>


<script>
// import Button from './Button.vue';
export default {
  components: {
    // Button
  }
}
</script>