<template>
  <div class="lg:hidden">
    <div id="hamburger" class="absolute top-2 right-10 w-10 h-10" @click="humberger()" :class="{'active': isClass}">
      <span class="line absolute block w-10 h-0.5 bg-yellow-900"></span>
      <span class="line absolute block w-10 h-0.5 bg-yellow-900"></span>
      <span class="line absolute block w-10 h-0.5 bg-yellow-900"></span>
    </div>
    <div class="lg:hidden side-nav shadow-md block h-4/5 fixed top-0 z-30 bg-footer-blue" :class="{'open':isClass}">
      <p class="ml-6 mt-4 mb-8 text-2xl">Menu</p>
      <ul>
        <li @click="$router.push('/')" class="ml-6 my-1">
          <p>Home</p>
        </li>
        <li @click="$router.push('/likes')" class="ml-6 my-2">
          Favorite
        </li>
        <li @click="$router.push('/contact')" class="ml-6 my-2">
          Contact
        </li>
        <li @click="$router.push(`/${getText}`)" class="ml-6 my-2">
          {{getText}}
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
  /* top: 15px;
  right: 20px; */
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
  width: calc(100% - 150px); 
  right: calc(-100% - 150px); 
  /* box-shadow: 100px 0 rgba(38, 98, 213, 0.3); */
  transition: 0.5s;
}

.side-nav.open {
  right: 0;
  /* left: 0; */
}
</style>