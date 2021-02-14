<template>
  <div class="md:flex justify-between items-center mb-14 mt-11 lg:mt-0" >
    <div class="w-4/5 md:w-1/3 lg:w-1/3 lg:ml-9 mb-11 md:mb-0 mx-auto">
      <h3 class="mb-4 text-yellow-900 text-xl lg:w-2/3">{{categoryItem.name}}</h3>
      <img src="../assets/firstview.jpg" alt="">
    </div>
    <div class="w-4/5 md:w-1/2 lg:w-1/3 lg:mr-36 mx-auto">
      <p class="lg:leading-8 font-sans">{{categoryItem.description}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props:["category_id"],
  data() {
    return {
      categoryItem: "",
    }
  },
  created() {
    this.getCategory()
  },
  methods: {
    async getCategory() {
      await
        axios.get(`https://gentle-wildwood-14193.herokuapp.com/api/categories/${this.category_id}`)
            .then((response) => {
              console.log(response.data.data[0]);
              this.categoryItem = response.data.data[0];
            })
    }
  },
  watch: {
    $route (to, from) {
      if (to.path !== from.path) {
        this.getCategory()
      }
    }
  },
}
</script>