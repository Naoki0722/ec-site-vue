<template>
  <div class="w-4/5 md:w-2/5 lg:w-1/5 my-6 border shadow-md text-yellow-900 mx-auto md:mx-2 cursor-pointer" @click="$router.push({name: 'Product', params: {category_id:category_id,id:item.id}})">
    <div>
      <img :src="item.image_url[0].image_url" alt="">
    </div>
    <div class="bg-card-blue p-3">
      <p class="text-sm mb-3">{{item.category_name}}</p>
      <p class="text-lg py-2">{{item.product_name}}</p>
      <div class="flex justify-between items-center">
        <div>
          <p>¥{{item.price}}</p>
        </div>
        <div class="flex items-center">
          <!-- <button v-show="liked" @click="delLike(item.id)" class="focus:outline-none"><font-awesome-icon class="mr-1 text-xl text-yellow-900 hover:-yellow-900" :icon="['fas', 'heart']" /></button>
          <button v-show="!liked" @click="addLike(item.id)" class="focus:outline-none"><font-awesome-icon class="mr-1 text-xl text-yellow-900 hover:-yellow-900" :icon="['far', 'heart']" /></button> -->
          <button class="text-center border bg-orange text-white py-1 px-2 ml-4  transition duration-300 ease-in-out hover:bg-transparent hover:text-yellow-900 border-orange">詳細</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// import axios from 'axios'
export default {
  props: ["item","category_id"],
  data() {
    return {
      liked: false,
      show: true,
    }
  },
  // methods: {
  //   like() {
  //     this.liked = !this.liked;
  //   },
  //   async addLike(product_id) {
  //     await
  //       axios
  //         .post('http://localhost:8000/api/likes', {
  //           user_id: this.$store.state.user.id,
  //           product_id: product_id
  //         })
  //         .then((res) => {
  //           console.log(res);
  //         })
  //     this.liked = !this.liked;
  //   },
  //   async delLike(product_id) {
  //     await
  //       axios.delete(`http://localhost:8000/api/likes`,
  //       {data: {
  //         user_id: this.$store.state.user.id,
  //         product_id: product_id
  //       }})
  //       .then((response) => {
  //         console.log(response);
  //       })
  //     this.liked = !this.liked;
  //   }
  // }
}
</script>