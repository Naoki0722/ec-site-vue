<template>
  <div v-scroll-to="'.scroll-point'" class="cursor-pointer scroll font-extralight bg-regal-blue absolute right-20 md:-bottom-11 lg:bottom-14 inline-block h-60 hidden md:block">
    <p class="text-white py-5 px-3 font-serif font-thin">SCROL</p>
    <span></span>
    <span></span>
  </div>
</template>

<style scoped>
.scroll {
  height: 150px;
}

.scroll p {
  writing-mode: vertical-rl;
}


.scroll span {
  width: 30px;
  height: 40px;
  position: absolute;
  left: 1px;
  display: block;
  width: 2px;
  background: white;
  border-left: 0.5px solid white;
}

.scroll span:nth-last-of-type(1) {
  top: 55%;
  left: 45%;
  height: 60px;
}

.scroll span:nth-last-of-type(2) {
  bottom: 5%;
  height: 15px;
  left: 55%;
  transform: rotate(30deg);
}


</style>