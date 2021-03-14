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
          <th class="hidden md:table-cell lg:px-16 py-2">
            <span class="text-yellow-900">カテゴリー</span>
          </th>
          <th class="hidden md:table-cell px-4 md:px-16 py-2">
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
      <tbody class="text-sm md:text-lg">
        <tr class="bg-white" v-for="(product,index) in products" :key="index">
          <td class="hidden lg:block px-11 py-6 flex flex-row items-center">
            <img
              class="h-8 w-8 object-cover"
              :src="product.image_url[0].image_url"
              alt=""
            />
          </td>
          <td class="px-4 lg:px-11 py-6 lg:py-2">
            <p class="text-center">{{product.product_name}}</p>
          </td>
          <td class="hidden md:table-cell px-6 lg:px-16 py-2">
            <p class="text-center">{{product.category_name}}</p>
          </td>
          <td class="hidden md:table-cell px-4 lg:px-11 py-2">
            <p class="text-center">{{product.price}}</p>
          </td>
          <td class="text-center">
            <button class="block mt-2  mr-2 md:mr-0 md:mt-0 text-xs md:text-sm bg-orange text-white hover:bg-white hover:border-orange hover:text-black focus:outline-none px-4 py-2 border rounded-full transition duration-300 ease-in-out " @click="productsDetail(product.category_id,product.product_id)">編集</button>
          </td>
          <td class="text-center">
            <button class="block mt-2 md:mt-0 text-xs md:text-sm bg-transparent hover:text-white px-4 py-2 border border-gray-700 rounded-full transition duration-300 ease-in-out hover:bg-white hover:bg-gray-500 hover:border-0 text-black focus:outline-none" @click="delProduct(product.category_id,product.product_id)">削除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      products: "",
      auth: this.$store.state.status,
      token: this.$store.state.token
    }
  },
  created() {
    this.getProductLists()
  },
  methods: {
    async getProductLists() {
      await axios
        .get('https://gentle-wildwood-14193.herokuapp.com/api/products')
        .then((response) => {
          console.log(response);
          this.products = response.data.data
        })
        .catch((error) => {
          console.error('error',error);
        })
    },
    productsDetail(category_id,product_id) {
      this.$router.push(`/admin/list/${category_id}/${product_id}`)
    },
    async delProduct(category_id,product_id) {
      await axios
        .delete(`https://gentle-wildwood-14193.herokuapp.com/api/categories/${category_id}/products/${product_id}`,{
          data: {token: this.token
          }
        })
        .then((response) => {
          console.log(response);
          this.getProductLists();
        })
        .catch(() => {
          alert('失敗しました。再度実行するか、システム管理者にお問い合わせください');
        })
    }
  }
}
</script>