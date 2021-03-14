<template>
  <div class="lg:hidden">
    <div id="hamburger" class="absolute top-2 right-10 w-10 h-10" @click="humberger()" :class="{'active': isClass}">
      <span class="line absolute block w-10 h-0.5 bg-yellow-900"></span>
      <span class="line absolute block w-10 h-0.5 bg-yellow-900"></span>
      <span class="line absolute block w-10 h-0.5 bg-yellow-900"></span>
    </div>
    <div class="lg:hidden side-nav shadow-md block h-full fixed top-0 z-30 bg-gray-300" :class="{'open':isClass}">
      <p class="ml-6 mt-4 mb-8 text-2xl">Menu</p>
      <ul>
        <li @click="$router.push('/')" class="ml-6 my-1 cursor-pointer">
          <p class="text-xl">Home</p>
        </li>
        <li @click="$router.push('/admin/register')" class="ml-6 my-6 cursor-pointer">
          <p class="text-xl">Product Register</p>
        </li>
        <li @click="$router.push('/admin/list')" class="ml-6 my-6 cursor-pointer">
          <p class="text-xl">Product List</p>
        </li>
        <li @click="$router.push('/category/1')" class="ml-6 my-6 cursor-pointer">
          <p class="text-xl">Product</p>
        </li>
        <li v-show="!auth" @click="$router.push(`/admin/login`)" class="ml-6 my-6 cursor-pointer">
          <p class="text-xl">Login</p>
        </li>
        <li v-show="auth" @click="$router.push(`/admin/mypage`)" class="ml-6 my-6 cursor-pointer">
          <p class="text-xl">Mypage</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props:["getText"],
  data() {
    return {
      isClass: false,
      auth: this.$store.state.status
    }
  },
  methods: {
    humberger() {
      this.isClass = !this.isClass

    }
  }
}
</script>


<style scoped>
#hamburger {
  cursor: pointer;
  z-index: 100;
  transition: 0.4s;
}
.line {
  left: 2px;
  transition: 0.8s;
}

#hamburger span:nth-of-type(1) {
  top: 10px; /* ハンバーガーメニューの1本目の棒 */
}

#hamburger span:nth-of-type(2) {
  top: 20px; /* ハンバーガーメニューの2本目の棒 */
}

#hamburger span:nth-of-type(3) {
  top: 30px; /* ハンバーガーメニューの3本目の棒 */
}

#hamburger.active span:nth-of-type(1) {
  top: 20px;
  transform: rotate(45deg);
}

#hamburger.active span:nth-of-type(2) {
  opacity: 0;
}
#hamburger.active span:nth-of-type(3) {
  top: 20px;
  transform: rotate(-45deg);
}

.side-nav {
  width: calc(55%); 
  right: calc(-100% - 150px); 
  transition: 0.5s;
}

.side-nav.open {
  right: 0;
}

@media screen and (min-width: 768px) {
  .side-nav {
    width: calc(35%);
  }
}

</style>
