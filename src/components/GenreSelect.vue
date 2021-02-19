<template>
  <div class="text-yellow-900 md:mr-36 text-center">
    <p>その他のジャンルを見る</p>
    <select class="border rounded border-gray-500 p-1 mr-4" v-model="selected">
      <option disabled value="">選択してください</option>
      <option v-for="(category,index) in categories" :key="index" :value="category.id">{{category.name}}</option>
    </select>
    <button class="text-sm px-2 py-1 tracking-wider text-center border hover:bg-orange rounded hover:text-white  transition duration-300 ease-in-out bg-transparent text-gray-800 border-orange" @click="$router.push(`/category/${selected}`)">JUMP</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      selected: '',
      categories: ""
    }
  },
  created() {
    this.getCategory()
  },
  methods: {
    async getCategory() {
      await
        axios
          .get('https://gentle-wildwood-14193.herokuapp.com/api/categories')
          .then((res) => {
            this.categories = res.data.data
            console.log(this.categories);
          })
    }
  }
}
</script>