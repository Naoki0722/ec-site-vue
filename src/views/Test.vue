<template>
  <div class="w-4/5 md:w-full md:flex mx-auto justify-around mb-14">
    <div class="md:w-1/3 mb-8 md:mb-0">
      <!-- <img :src="img" alt="" class="">
      <div class="flex justify-center mt-4">
        <div class="mx-3 bg-gray-800" v-for="(product, index) in products.image_url" :key="index">
          <img :src="product.image_url" alt="" class="opacity-60">
        </div>
      </div> -->


        <!-- <slick ref="slick" :options="slickForOptions" class="slider-for" >
            <div v-for="(product, index) in products.image_url" :key="index"><img :src="product.image_url"></div>
        </slick>
        <slick ref="slick" :options="slickNavOptions" class="slider-nav" >
          <div v-for="(product, index) in products.image_url" :key="index"><img :src="product.image_url"></div>
        </slick> -->


        <slick ref="slick" :options="slickForOptions" class="slider-for" >
            <div><img src="https://static.takeda.tv/uploads/2017/05/test_large.jpg" ></div>
            <div><img src="https://static.takeda.tv/uploads/2017/05/test_large.jpg" ></div>
            <div><img src="https://static.takeda.tv/uploads/2017/05/test_large.jpg" ></div>
        </slick>
        <slick ref="slick" :options="slickNavOptions" class="slider-nav" >
            <div><img src="https://static.takeda.tv/uploads/2017/05/test_large.jpg" ></div>
            <div><img src="https://static.takeda.tv/uploads/2017/05/test_large.jpg" ></div>
            <div><img src="https://static.takeda.tv/uploads/2017/05/test_large.jpg" ></div>
        </slick>
    </div>
    <div class="md:w-1/3">
      <p class="tracking-wider text-lg">商品名</p>
      <h3 class="font-sans text-2xl py-4">{{products.product_name}}</h3>
      <p class="tracking-wider">商品説明</p>
      <p class="leading-6 font-sans py-4">{{products.description}}</p>
      <p class="text-right text-xl">¥ {{products.price}}</p>
      <div class="md:flex justify-around pt-6 text-center">
        <button v-show="auth" class="mx-3 md:mx-0 my-6 md:my-0 text-center border rounded-2xl hover:bg-orange hover:text-white py-1 px-4 transition duration-300 ease-in-out bg-transparent text-yellow-900 border-orange" @click="addCart">カートに入れる</button>
        <button v-show="!auth" class="mx-3 md:mx-0 my-6 md:my-0 text-center border rounded-2xl hover:bg-orange hover:text-white py-1 px-4 transition duration-300 ease-in-out bg-transparent text-yellow-900 border-orange" @click="addGuestCart">カートに入れる</button>
        <button v-show="!auth" class="text-center border rounded-2xl hover:bg-orange hover:text-white py-1 px-4 transition duration-300 ease-in-out bg-transparent text-yellow-900 border-orange" @click="addGuestLike">お気に入り登録する</button>
        <button v-show="auth" class="text-center border rounded-2xl hover:bg-orange hover:text-white py-1 px-4 transition duration-300 ease-in-out bg-transparent text-yellow-900 border-orange" @click="addLike">お気に入り登録する</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Slick from 'vue-slick'
import '../../node_modules/slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick.css';
export default {
  props:["category_id","id"],
  components: {
    Slick
  },
  data() {
    return {
      products: "",
      auth: this.$store.state.status,
      img: "",
      slickForOptions: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-nav',
      },
      slickNavOptions: {
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.slider-for',
          dots: true,
          centerMode: true,
          focusOnSelect: true
      },
    }
  },
  async created(){
    this.getItem();
  },
  methods: {
    async getItem() {
      await
        axios.get(`http://localhost:8000/api/categories/${this.category_id}/products/${this.id}`)
            .then((response) => {
              this.products = response.data.data[0];
              console.log(this.products.image_url.length)
              // this.slickNavOptions.slidesToShow =this.products.image_url.length
              this.img = response.data.data[0].image_url[0].image_url
            })
    },
    async addCart() {
      await
        axios
          .post('http://localhost:8000/api/carts', {
            user_id: this.$store.state.user.id,
            product_id: this.id
          })
          .then((res) => {
            console.log(res);

          })

    },
    async addLike() {
      await
        axios
          .post('http://localhost:8000/api/likes', {
            user_id: this.$store.state.user.id,
            product_id: this.id
          })
          .then((res) => {
            console.log(res);
          })
    },
    addGuestCart() {
      this.$store.dispatch('addGuestCart', {
        id:this.id,
        category_name: this.products.category_name,
        product_name: this.products.product_name,
        description: this.products.description,
        price: this.products.price,
        image_url: this.products.image_url
      });
    },
    addGuestLike() {
      this.$store.dispatch('addGuestLike', {
        id:this.id,
        category_name: this.products.category_name,
        product_name: this.products.product_name,
        description: this.products.description,
        price: this.products.price,
        image_url: this.products.image_url
      });
    }
  },
  watch: {
    $route () {
      this.getItem();
    }
  },
}
</script>



<style scoped>

</style>