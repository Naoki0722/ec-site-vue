<template>
 <div class="text-center">
   <div class="inline-block text-left">
      <div class="flex  mt-10 mb-10 lg:mb-4">
        <span class="line1 bg-orange w-1 rounded-sm"></span>
        <span class="line bg-orange w-1 rounded-sm"></span>
        <p class="font-serif md:text-xl">{{title}}</p>
      </div>  
   </div>
 </div>
</template>

<script>
export default {
  props: ["title"],
}
</script>

<style scoped>

.line1 {
  height: 40px;
  margin: 0 10px;
}
.line {
  height: 80px;
  margin: 0 20px 0 10px;
}
</style>