<template>
  <div class="mt-11">
    <table class="mx-auto font-serif">
      <thead class="text-sm justify-between">
        <tr class="border-b border-gray-500">
          <th class="px-16 py-2 hidden lg:inline">
            <span class="text-yellow-900"></span>
          </th>
          <th class="px-4 md:px-16 py-2 ">
            <p class="text-yellow-900">商品名</p>
          </th>
          <th class="hidden md:block lg:px-16 py-2">
            <span class="text-yellow-900">カテゴリー</span>
          </th>
          <th class="px-4 md:px-16 py-2">
            <span class="text-yellow-900">金額(円)</span>
          </th>

          <th class="px-0 md:px-16 py-2 ">
            <span class="text-yellow-900"></span>
          </th>

          <th class="px-4 md:px-16 py-2">
            <span class="text-yellow-900"></span>
          </th>
        </tr>
      </thead>
      <tbody class="text-sm md:text-lg" v-for="(item,index) in itemsData" :key="index" v-show="auth">
        <tr class="bg-white" >
          <td class="hidden lg:block px-11 py-6 flex flex-row items-center">
            <img
              class="h-8 w-8 object-cover"
              :src="item.images[0].image_url"
              alt=""
            />
          </td>
          <td class="px-4 lg:px-11 py-6 lg:py-2">
            <p class="text-center">{{item.product_name}}</p>
          </td>
          <td class="hidden md:table-cell px-6 lg:px-16 py-2">
            <p class="text-center">{{item.category_name}}</p>
          </td>
          <td class="px-4 lg:px-11 py-2">
            <p class="text-center">{{item.product_price}}</p>
          </td>
          <td class="text-center lg:pl-1">
            <button class="hidden md:block text-xs mx-2 md:mx-6 lg:mx-8 md:text-sm bg-orange text-white px-2 md:px-4 lg:px-4 py-2 border rounded-full transition duration-300 ease-in-out hover:bg-white hover:border-orange hover:text-black focus:outline-none" @click="addCart(item.product_id)">カートへ</button>
          </td>
          <td class="text-center">
            <button class="text-xs md:text-sm bg-transparent hover:text-white px-4 py-2 border border-gray-700 rounded-full transition duration-300 ease-in-out hover:bg-white hover:bg-gray-500 hover:border-0 text-black focus:outline-none" @click="delLike(item.product_id)">削除</button>
          </td>
        </tr>
      </tbody>
      <tbody class="text-sm md:text-lg">
        <tr class="bg-white" v-for="(like,index) in likes" :key="index" v-show="!auth">
          <td class="hidden lg:block px-11 py-6 flex flex-row items-center">
            <img
              class="h-8 w-8 object-cover"
              :src="like.image_url[0].image_url"
              alt=""
            />
          </td>
          <td class="px-4 lg:px-11 py-6 lg:py-2">
            <p class="text-center">{{like.product_name}}</p>
          </td>
          <td class="hidden md:table-cell px-6 lg:px-16 py-2">
            <p class="text-center">{{like.category_name}}</p>
          </td>
          <td class="px-4 lg:px-11 py-2">
            <p class="text-center">{{like.price}}</p>
          </td>
          <td class="text-center lg:pl-1">
            <button class="hidden md:block text-xs mx-2 md:mx-6 lg:mx-8 md:text-sm bg-orange text-white px-2 md:px-4 lg:px-4 py-2 border rounded-full transition duration-300 ease-in-out hover:bg-white hover:border-orange hover:text-black focus:outline-none" @click="addGuestCart(like)">カートへ</button>
          </td>
          <td class="text-center">
            <button class="text-xs md:text-sm bg-transparent hover:text-white px-4 py-2 border border-gray-700 rounded-full transition duration-300 ease-in-out hover:bg-white hover:bg-gray-500 hover:border-0 text-black focus:outline-none" @click="delGuestLike(like.id)">削除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ["itemsData"],
  data() {
    return {
      user_id: 1,
      likes: "",
      auth: this.$store.state.status
    }
  },
  created() {
    this.getGuestLike()
  },
  methods: {
    async addCart(product_id) {
      await
        axios.post(`https://gentle-wildwood-14193.herokuapp.com/api/carts`, {
          user_id: this.$store.state.user.id,
          product_id: product_id
        })
        .then((response) => {
          console.log(response);
        })
        alert('カートに追加しました');
    },
    async delLike(product_id) {
      await
        axios.delete(`https://gentle-wildwood-14193.herokuapp.com/api/likes`,
        {data: {
          user_id: this.$store.state.user.id,
          product_id: product_id
        }})
        .then((response) => {
          console.log(response);
        })
        alert('削除完了です');
        this.$emit('getLike');
    },
    getGuestLike() {
      if(!this.auth) {
        this.likes = this.$store.state.likes;
        // console.log(this.likes);
      }
    },
    addGuestCart(item) {
      this.$store.dispatch('addGuestCart', {
        id:item.id,
        category_name: item.category_name,
        product_name: item.product_name,
        description: item.description,
        price: item.price,
        image_url: item.image_url
      });
    },
    delGuestLike(product_id) {
      var result = this.likes.filter((item) => { 
        return (item.id !== product_id);
      });
        this.$store.dispatch('delGuestLike',result)
        this.getGuestLike()
        console.log(result)
    }
  },
}
</script>