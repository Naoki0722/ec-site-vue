<template>
  <div class="min-h-screen font-serif relative pb-80 lg:pb-20 box-border">
    <Header></Header>
    <button class="mt-4 ml-9" @click="$router.back()">＜戻る</button>
    <ContentTitle class="my-4 ml-9" :sendTitle="title"></ContentTitle>
    <ProductDetail :category_id="category_id" :id="id"></ProductDetail>
    <div class="flex justify-center relative mb-6">
      <h4>同じカテゴリーの商品</h4>
      <div class="hidden md:block">
        <p class="absolute right-0 pr-11 text-yellow-900 cursor-pointer" @click="sendPage()">その他の商品も見る</p>
        <div class="other">
          <span class="test"></span>
        </div>
      </div>
    </div>
    <div class="flex justify-around flex-wrap mb-11">
      <ProductsCard v-for="item in items" :key="item.id" :item="item" :category_id="category_id">></ProductsCard>
    </div>
    <div class="block md:hidden relative mb-11 cursor-pointer" @click="sendPage()">
      <p class="text-center text-yellow-900">その他の商品も見る</p>
      <div>
        <span class="test-2"></span>
      </div>
    </div>
    <div class="absolute bottom-0 w-screen">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header';
import ContentTitle from '../components/ContentTitle';
import ProductDetail from '../components/ProductDetail';
import ProductsCard from '../components/ProductsCard';
import Footer from '../components/Footer';
import axios from 'axios';
export default {
  props:["category_id","id"],
  components: {
    Header,
    ContentTitle,
    ProductDetail,
    ProductsCard,
    Footer
  },
  data() {
    return {
      title: "Product",
      items: ""
    }
  },
  async created() {
    let item = [];
    await
      axios.get(`https://gentle-wildwood-14193.herokuapp.com/api/categories/${this.category_id}/products`)
           .then((response) => {
             item.push(response.data.data);
             this.items = item[0];
             console.log(this.items[0].image_url);
           })
  },
  methods: {
    sendPage() {
      this.$router.push(`/category/${this.category_id}`);
    }
  }
}
</script>


<style scoped>
.test {
  display: block;
}
.test::before {
  position: absolute;
  right: 50px;
  top: 30px;
  content: "";
  width: 135px;
  height: 1px;
  background: #E18012;
}

.test::after {
  position: absolute;
  right: 50px;
  top: 25px;
  content: "";
  width: 11px;
  height: 11px;
  border-right: 1px solid #E18012;
  border-top: 1px solid #E18012;
  transform: rotate(45deg);
}
.test-2 {
  display: block;
}
.test-2::before {
  position: absolute;
  right: 80px;
  top: 1px;
  content: "";
  width: 55%;
  border-left: 1px solid #E18012;
  border-bottom: 1px solid #E18012;
  height: 30px;
}

.test-2::after {
  position: absolute;
  right: 80px;
  top: 25px;
  content: "";
  width: 11px;
  height: 11px;
  border-right: 1px solid #E18012;
  border-top: 1px solid #E18012;
  transform: rotate(45deg);
}
</style>

