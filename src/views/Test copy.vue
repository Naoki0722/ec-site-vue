<template>
  <div class="main">

    <!-- <p>slick デフォルト ↓</p>
    <slick ref="slick" class="slick-outer">
      <div><img src="https://static.takeda.tv/uploads/2017/05/test_large.jpg" class="slick-img">{{tokyo}}</div>
      <div><img src="https://static.takeda.tv/uploads/2017/05/test_large.jpg" class="slick-img">{{osaka}}</div>
      <div><img src="https://static.takeda.tv/uploads/2017/05/test_large.jpg" class="slick-img">{{aso}}</div>
    </slick>

   <p>slick オプション指定 ↓</p>
   <slick ref="slick" :options="slickOptions" class="slick-outer">
      <div><img src="https://static.takeda.tv/uploads/2017/05/test_large.jpg" class="slick-img">{{tokyo}}</div>
      <div><img src="https://static.takeda.tv/uploads/2017/05/test_large.jpg" class="slick-img">{{osaka}}</div>
      <div><img src="https://static.takeda.tv/uploads/2017/05/test_large.jpg" class="slick-img">{{aso}}</div>
   </slick> -->

  <div>
   <p>slick サムネイル付き ↓</p>
   <slick ref="slick" :options="slickForOptions" class="slider-for" >
      <!-- <div v-for="(product, index) in products.image_url" :key="index"><img :src="product.image_url"></div> -->
      <div><img src="https://static.takeda.tv/uploads/2017/05/test_large.jpg" ></div>
      <div><img src="https://static.takeda.tv/uploads/2017/05/test_large.jpg" ></div>
      <div><img src="https://static.takeda.tv/uploads/2017/05/test_large.jpg" ></div>
   </slick>
   <slick ref="slick" :options="slickNavOptions" class="slider-nav" >
     <!-- <div v-for="(product, index) in products.image_url" :key="index"><img :src="product.image_url"></div> -->
      <div><img src="https://static.takeda.tv/uploads/2017/05/test_large.jpg" ></div>
      <div><img src="https://static.takeda.tv/uploads/2017/05/test_large.jpg" ></div>
      <div><img src="https://static.takeda.tv/uploads/2017/05/test_large.jpg" ></div>
   </slick>
  </div>

  </div>
</template>

<script>
import Slick from 'vue-slick'
import '../../node_modules/slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick.css';
import axios from 'axios';
export default {
  data () {
    return {
      slickOptions:{
        arrows: false,
        dots: true,
      },
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
      images: "",
      products: ""
    }
  },
  components: {
    Slick
  },
  async created(){
    this.getItem();
  },
  methods: {
    async getItem() {
      await
        axios.get(`http://localhost:8000/api/categories/1/products/1`)
            .then((response) => {
              console.log(response.data.data[0].image_url)
              this.products = response.data.data[0];
              this.images = response.data.data[0].image_url
            })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.slick-outer{
  width:80%;
  padding:10px;
  margin:auto;
    margin-bottom:10px;
    background-color:lightgray;
}
.slick-img{
  margin:auto;
  width:50%;
  height:250px;
}

@media(max-width:768px) {
.slick-img{
  margin:auto;
  width:50%;
  height:150px;
}
}

</style>