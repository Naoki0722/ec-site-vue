<template>
  <div class="w-4/5 md:w-2/5 lg:w-1/5 my-6 border shadow-md text-yellow-900 mx-auto md:mx-2">
    <div>
      <img src="../assets/product_1.jpg" alt="">
    </div>
    <div class="bg-card-blue p-3">
      <p class="text-sm mb-3">Earring</p>
      <p class="text-lg py-2">花柄のピアス</p>
      <div class="flex justify-between items-center">
        <div>
          <p>¥2,500</p>
        </div>
        <div class="flex items-center">
          <transition name="fade">
            <button v-if="liked" @click="like" class="focus:outline-none"><font-awesome-icon class="mr-1 text-xl text-yellow-900 hover:-yellow-900" :icon="['fas', 'heart']" /></button>
            <button v-else @click="like" class="focus:outline-none"><font-awesome-icon class="mr-1 text-xl text-yellow-900 hover:-yellow-900" :icon="['far', 'heart']" /></button>
          </transition>
          <!-- <transition name="">
          </transition> -->
          <button class="text-center border bg-orange text-white py-1 px-2 ml-4  transition duration-300 ease-in-out hover:bg-transparent hover:text-yellow-900 border-orange" @click="$router.push('/product')">詳細</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      liked: false,
      show: true
    }
  },
  methods: {
    like() {
      this.liked = !this.liked;
    },
  }
}
</script>


<style scoped>
.fade-enter-active, .fade-leave-active {
  /* transition: opacity .5s; */
  transition: all .3s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>