<template>
  <div class="mt-11">
    <table class="mx-auto font-serif">
      <thead class="text-sm justify-between">
        <tr class="border-b border-gray-500">
          <th class="px-16 py-2 hidden lg:inline">
            <span class="text-yellow-900"></span>
          </th>
          <th class="px-6 md:px-16 py-2 ">
            <p class="text-yellow-900">商品名</p>
          </th>
          <th class="hidden md:block lg:px-16 py-2">
            <span class="text-yellow-900">カテゴリー</span>
          </th>
          <th class="px-4 md:px-16 py-2">
            <span class="text-yellow-900">金額(円)</span>
          </th>
          <th class="px-4 md:px-16 py-2">
            <span class="text-yellow-900"></span>
          </th>
        </tr>
      </thead>
      <tbody class="text-sm md:text-lg" v-show="auth">
        <tr class="bg-white" v-for="(cart,index) in cartsData" :key="index">
          <td class="hidden lg:block px-16 py-6 flex flex-row items-center">
            <img
              class="h-8 w-8 object-cover"
              :src="cart.images[0].image_url"
              alt=""
            />
          </td>
          <td class="px-6 lg:px-16 py-6 lg:py-2">
            <p class="text-center">{{cart.product_name}}</p>
          </td>
          <td class="hidden md:table-cell px-6 lg:px-16 py-2">
            <p class="text-center">{{cart.category_name}}</p>
          </td>
          <td class="px-6 lg:px-16 py-2">
            <p class="text-center">{{cart.product_price}}</p>
          </td>
          <td class="text-center">
            <button class="text-xs md:text-sm bg-transparent hover:text-white px-4 py-2 border border-gray-700 rounded-full transition duration-300 ease-in-out hover:bg-white hover:bg-gray-500 hover:border-0 text-black focus:outline-none" @click="delCart(cart.product_id)">削除</button>
          </td>
        </tr>
      </tbody>
      <tbody class="text-sm md:text-lg" v-show="!auth">
        <tr class="bg-white" v-for="(cart,index) in carts" :key="index">
          <td class="hidden lg:block px-16 py-6 flex flex-row items-center">
            <img
              class="h-8 w-8 object-cover"
              :src="cart.image_url[0].image_url"
              alt=""
            />
          </td>
          <td class="px-6 lg:px-16 py-6 lg:py-2">
            <p class="text-center">{{cart.product_name}}</p>
          </td>
          <td class="hidden md:table-cell px-6 lg:px-16 py-2">
            <p class="text-center">{{cart.category_name}}</p>
          </td>
          <td class="px-6 lg:px-16 py-2">
            <p class="text-center">{{cart.price}}</p>
          </td>
          <td class="text-center">
            <button class="text-xs md:text-sm bg-transparent hover:text-white px-4 py-2 border border-gray-700 rounded-full transition duration-300 ease-in-out hover:bg-white hover:bg-gray-500 hover:border-0 text-black focus:outline-none" @click="delGuestCart(cart.id)">削除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="text-right mt-6">
      <table class="text-left inline-block mr-16 md:mr-32 lg:mr-80 font-serif">
        <tr>
          <th class="font-thin pr-20 pb-2">
            小計(円)
          </th>
          <td class="text-right pb-2">
            {{sumPrice}}
          </td>
        </tr>
        <tr class="border-b">
          <th class="font-thin">
            消費税(円)
          </th>
          <td class="text-right">
            {{taxPrice}}
          </td>
        </tr>
        <tr>
          <th class="pt-4">
            合計(円)
          </th>
          <td class="text-right pt-4">
            {{totalPrice}}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ["cartsData"],
  data() {
    return {
      auth: this.$store.state.status,
      carts: ""
    }
  },
  created() {
    this.getGuestCart()
  },
  computed: {
    sumPrice() {
      let total = 0
      if(this.auth) {
        const length = this.cartsData.length;
        for(let i =0; i< length; i++) {
          total += this.cartsData[i].product_price
        }
        return total
      } else {
        const length = this.carts.length;
        for(let i =0; i< length; i++) {
          total += this.carts[i].price
        }
        return total
      }
    },
    taxPrice() {
      return this.sumPrice * 0.08
    },
    totalPrice() {
      return this.sumPrice + this.taxPrice
    }
  },
  methods: {
    async delCart(product_id) {
      await
        axios.delete(`https://gentle-wildwood-14193.herokuapp.com/api/carts`,
        {data: {
          user_id: this.$store.state.user.id,
          product_id: product_id
        }})
        .then((response) => {
          console.log(response);
        })
        alert('カートから削除しました!');
        this.$emit('delCart');
    },
    getGuestCart() {
      if(!this.auth) {
        this.carts = this.$store.state.carts;
        console.log(this.carts);
      }
    },
    delGuestCart(product_id) {
      var result = this.carts.filter((item) => { 
        return (item.id !== product_id);
      });
        this.$store.dispatch('delGuestCart',result)
        this.getGuestCart()
        console.log(result)
    }
  }
}
</script>