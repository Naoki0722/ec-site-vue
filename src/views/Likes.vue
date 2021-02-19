<template>
  <div class="min-h-screen relative pb-80 lg:pb-20 box-border">
    <Header></Header>
    <ContentTitle class="my-4 ml-9" :sendTitle="title"></ContentTitle>
    <p v-show="auth" class="font-serif md:ml-12 lg:ml-40 text-lg md:text-2xl ml-6 md:ml-0 mr-6 md:mr-24 text-yellow-900 tracking-wide">{{userName}}<span class="mr-2 md:mr-6"> 様</span>お気に入り一覧</p>
    <p v-show="!auth" class="font-serif md:ml-12 lg:ml-40 text-lg md:text-2xl ml-6 md:ml-0 mr-6 md:mr-24 text-yellow-900 tracking-wide">ゲスト<span class="mr-2 md:mr-6"> 様</span>お気に入り一覧</p>
    <LikeTable :itemsData="items" @getLike="getLike()"></LikeTable>
    <div class="md:flex justify-center mt-11 md:mt-11 font-serif">
      <div class="my-11 text-center md:mr-32">
        <button class="py-3 text-sm md:text-base tracking-wider border hover:bg-orange rounded-full hover:text-white px-6 py-2 transition duration-300 ease-in-out bg-transparent text-gray-800 border-orange focus:outline-none" @click="$router.push('/mypage')" v-show="auth">
          <font-awesome-icon class="mr-1 text-yellow-900" :icon="['fas', 'user-alt']" />マイページに戻る
        </button>
        <button class="py-3 text-sm md:text-base tracking-wider border hover:bg-orange rounded-full hover:text-white px-6 py-2 transition duration-300 ease-in-out bg-transparent text-gray-800 border-orange focus:outline-none" @click="$router.push('/login')" v-show="!auth">
          <font-awesome-icon class="mr-1 text-yellow-900" :icon="['fas', 'user-alt']" />ログインする
        </button>
      </div>
      <div class="my-11 text-center">
        <button class="py-3 text-sm md:text-base tracking-wider border hover:bg-orange rounded-full hover:text-white px-6 py-2 transition duration-300 ease-in-out bg-transparent text-gray-800 border-orange focus:outline-none" @click="$router.push('/carts')">
          <font-awesome-icon class="mr-1 text-yellow-900" :icon="['fas', 'shopping-cart']" />カートに進む
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
import LikeTable from '../components/LikeTable';

import Footer from '../components/Footer';
import axios from 'axios';
export default {
  components: {
    Header,
    ContentTitle,
    LikeTable,
    Footer
  },
  data() {
    return {
      title:"Likes",
      items: "",
      userName: this.$store.state.user.name,
      auth: this.$store.state.status,
      likes: this.$store.state.likes
    }
  },
  created() {
    // ログインしているかどうかの判定
    if(this.auth) {
      // vuexのカートにものがあるかどうかの確認
      if(this.likes.length) {
        // あればlikesテーブルにデータをいれて、取得
        this.postLikes()
      } else {
        // なければ直接likesテーブルから取得
        this.getLike()
      }
    }
  },
  methods: {
    // お気に入りテーブルに入れて、vuexのカートを削除する
    async postLikes() {
      for(const like of this.$store.state.likes) {
        await
          axios
            .post('https://gentle-wildwood-14193.herokuapp.com/api/likes', {
              user_id: this.$store.state.user.id,
              product_id: like.id,
            })
            .then(() => {

            })
        this.getLike()
      }
      this.$store.dispatch('initialLike');

    },
    async getLike() {
      await
        axios.get(`https://gentle-wildwood-14193.herokuapp.com/api/likes?user_id=${this.$store.state.user.id}`)
            .then((res) => {
              console.log(res.data.data);
              this.items = res.data.data;
            })
    }
  }
}
</script>