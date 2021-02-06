<template>
  <div class="font-serif md:ml-11">
    <h3 class="text-xl tracking-wider text-yellow-900 text-center md:text-left"><font-awesome-icon class="mr-1" :icon="['fas', 'ring']" />membership login</h3>
    <form class="w-60 mx-auto md:mx-0 mt-6">
      <label for="email" class="tracking-wider text-yellow-900">email</label>
      <input type="text" name="email" id="email" class="border rounded-md block w-full h-8 mb-6 px-2">
      <label for="password" class="tracking-wider text-yellow-900">password</label>
      <input type="password" name="password" id="password" class="border rounded-md block w-full h-8 mb-11 px-2">
      <input type="checkbox" name="remember" id="remember" class="border rounded-md mb-11 mr-3">
      <label for="remember" class="tracking-wider text-yellow-900">remember me</label>
    </form>
    <p class="text-orange text-center tracking-wide">forget your password?</p>
    <div class="mt-11 mb-11 text-center">  
      <a href="" class="tracking-widest border hover:bg-orange rounded-full hover:text-white px-6 py-3 transition duration-300 ease-in-out bg-transparent text-gray-600 border-orange">
        login
      </a>
    </div>
    <p class="my-6 font-serif tracking-wider text-yellow-900 text-lg text-center md:text-left">or continue with</p>
    <div class="md:flex md:justify-start text-center  my-6">
      <button class="px-10 py-1 mb-6 md:mb-0 mx-11 md:mx-0 md:mr-11 border rounded-lg"><font-awesome-icon class="mr-1 text-yellow-900" :icon="['fab', 'google']" /></button>
      <button class="px-10 py-1 mb-6 md:mb-0 mx-11 md:mx-0 md:mr-11 border rounded-lg"><font-awesome-icon class="mr-1 text-yellow-900" :icon="['fab', 'facebook-square']" /></button>
      <button class="px-10 py-1 mb-6 md:mb-0 mx-11 md:mx-0 border rounded-lg"><font-awesome-icon class="mr-1 text-yellow-900" :icon="['fab', 'twitter-square']" /></button>
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