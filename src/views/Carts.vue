<template>
  <div class="min-h-screen relative pb-80 lg:pb-20 box-border">
    <Header></Header>
    <ContentTitle class="my-4 ml-9" :sendTitle="title"></ContentTitle>
    <p v-show="auth" class="font-serif ml-11 md:ml-12 lg:ml-40 text-lg md:text-2xl ml-6 md:ml-0 mr-6 md:mr-24 text-yellow-900 tracking-wide">{{userName}}<span class="mr-2 md:mr-6"> 様</span>のカート内商品</p>
    <p v-show="!auth" class="font-serif ml-11 md:ml-12 lg:ml-40 text-lg md:text-2xl ml-6 md:ml-0 mr-6 md:mr-24 text-yellow-900 tracking-wide">ゲスト<span class="mr-2 md:mr-6"> 様</span>のカート内商品</p>
    <CartsTable :cartsData="cartsItem" @delCart="getCarts()"></CartsTable>
    <div class="md:flex justify-center mt-11 font-serif">
      <div class="my-11 text-center md:mr-32">
        <button class="py-3 text-sm md:text-base tracking-wider border hover:bg-orange rounded-full hover:text-white px-6 py-2 transition duration-300 ease-in-out bg-transparent text-gray-800 border-orange focus:outline-none" @click="$router.push('/mypage')" v-show="auth">
          <font-awesome-icon class="mr-1 text-yellow-900" :icon="['fas', 'user-alt']" />マイページに戻る
        </button>
        <button class="py-3 text-sm md:text-base tracking-wider border hover:bg-orange rounded-full hover:text-white px-6 py-2 transition duration-300 ease-in-out bg-transparent text-gray-800 border-orange focus:outline-none" @click="$router.push('/login')" v-show="!auth">
          <font-awesome-icon class="mr-1 text-yellow-900" :icon="['fas', 'user-alt']" />ログインする
        </button>
      </div>
      <div class="my-11 text-center">
        <stripe-checkout
          ref="checkoutRef"
          :pk="publishableKey"
          :session-id="sessionId"
        />
        <button class="py-3 text-sm md:text-base tracking-wider border hover:bg-orange rounded-full hover:text-white px-6 py-2 transition duration-300 ease-in-out bg-transparent text-gray-800 border-orange focus:outline-none" @click="checkout">
          <font-awesome-icon class="mr-1 text-yellow-900" :icon="['fas', 'wallet']" />決済に進む
        </button>
      </div>
      <div></div>
    </div>
    <div class="absolute bottom-0 w-screen">
      <Footer></Footer>
    </div>
  </div>
</template>


<script>
import Header from '../components/Header';
import ContentTitle from '../components/ContentTitle';
import CartsTable from '../components/CartsTable';
import Footer from '../components/Footer';
import axios from 'axios';
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
  components: {
    Header,
    ContentTitle,
    CartsTable,
    Footer,
    StripeCheckout
  },
  data() {
    this.publishableKey = `${process.env.VUE_APP_STRIPE_PUBLISHABLE_KEY_STAGING}`;
    return {
      title:"Carts",
      cartsItem: "",
      loading: false,
      sessionId: "",
      totalPrice: "",
      userName: this.$store.state.user.name,
      auth: this.$store.state.status,
      carts: this.$store.state.carts
    }
  },
  created() {
    // ログインしているかどうかの判定
    if(this.auth) {
      // vuexのカートにものがあるかどうかの確認
      if(this.carts.length) {
        // あればcartsテーブルにデータをいれて、取得
        this.postCarts()
      } else {
        // なければ直接cartsテーブルから取得
        this.getCarts()
      }
    }
  },
  methods: {
    // カートテーブルに入れて、vuexのカートを削除する
    async postCarts() {
      for(const cart of this.$store.state.carts) {
        await
          axios
            .post('https://gentle-wildwood-14193.herokuapp.com/api/carts', {
              user_id: this.$store.state.user.id,
              product_id: cart.id,
            })
            .then(() => {
              // alert('カートテーブル入れたよ')
              // console.log(res);
            })
        this.getCarts()
      }
      this.$store.dispatch('initialCart');

    },
    async getCarts() {
      let total = 0;
      await
        axios.get(`https://gentle-wildwood-14193.herokuapp.com/api/carts?user_id=${this.$store.state.user.id}`)
            .then((res) => {
              console.log(res.data.data);
              this.cartsItem = res.data.data;
            });
      const length = this.cartsItem.length;
      for(let i =0; i< length; i++) {
        total += this.cartsItem[i].product_price
      }
      return this.totalPrice = Math.floor(total * 1.08)
    },
    async checkout() {
      if(this.auth) {
        await 
          axios
            .post('https://gentle-wildwood-14193.herokuapp.com/api/stripes', {
              title: "今回購入商品",
              image: "https://storage.googleapis.com/ttrinity/_img/product/23/23218/1870578/design_img_f_1870578_s.png",
              price: this.totalPrice,
              description: "ご確認の上決済を実行ください"
            })
            .then((response) => {
              console.log(response);
              this.sessionId = response.data.id;
            })
        this.$refs.checkoutRef.redirectToCheckout();
      } else {
        alert('ログインしてください!');
        this.$router.push('/login');
      }
    }
  },
}
</script>