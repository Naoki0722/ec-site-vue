<template>
  <div class="min-h-screen font-serif relative pb-80 lg:pb-24 box-border">
    <AdminHeader></AdminHeader>
    <ContentTitle class="my-4 ml-9" :sendTitle="title"></ContentTitle>
    <div class="text-center my-6 w-11/12 mx-auto">
      <div class="text-left inline-block border p-4 md:p-11 shadow-md md:w-3/5 lg:w-2/5">
        <div class="pb-6">
          <label for="name" class="block w-56 float-left">商品名</label>
          <input type="text" id="name" name="name" class="border rounded border-gray-300 px-2 py-1 font-sans focus:outline-none" v-model="name">
        </div>
        <div class="pb-6">
          <label for="category" class="block w-56 float-left">カテゴリー</label>
          <select class="border rounded border-gray-300 p-1 mr-4" v-model="category">
            <option disabled value="">選択してください</option>
            <option v-for="(category,index) in categories" :key="index" :value="category.id">{{category.name}}</option>
          </select>
        </div>
        <div class="pb-6">
          <label for="description" class="block w-56 float-left">商品説明</label>
          <textarea  id="description" name="description" class="border rounded border-gray-300 px-2 py-1 w-full h-36 mb-6 focus:outline-none"  v-model="description"></textarea>
        </div>
        <div class="pb-6">
          <label for="price" class="block w-56 float-left">価格</label>
          <input type="number" id="price" name="price" class="border rounded border-gray-300 px-2 py-1 font-sans focus:outline-none" v-model="price">
        </div>
        <div class="text-center">
          <button class="mx-4 tracking-wider text-center border hover:bg-orange rounded-full hover:text-white px-3 py-2 transition duration-300 ease-in-out bg-transparent text-gray-800 border-orange focus:outline-none" @click="productUpdate">商品情報変更</button>
        </div>
        <div class="w-full my-6">
          <p class="block w-56">商品画像</p>
          <div class="flex justify-center flex-wrap">
            <div class="w-2/5 object-cover mx-2 my-4 relative" v-for="(image, index) in images" :key="index">
              <span class="absolute right-0 cursor-pointer" @click="removeImage(image.id)">
                <font-awesome-icon class="mr-1 text-blue-500 fa-2x" :icon="['fas', 'times-circle']" />
              </span>
              <img class="" :src='image.image_url'>
            </div>
          </div>
          <div class="flex">
            <input type="file" multiple @change="imageSelected" class="my-6 w-full">
            <!-- <button class="text-center border hover:bg-orange rounded hover:text-white px-3 py-2 transition duration-300 ease-in-out bg-transparent text-gray-800 border-gray-800 focus:outline-none" >アップロード</button> -->
          </div>
        </div>
        <div class="text-center">
          <button class="mx-4 tracking-wider text-center border hover:bg-orange rounded-full hover:text-white px-3 py-2 transition duration-300 ease-in-out bg-transparent text-gray-800 border-orange focus:outline-none" @click="$router.push('/admin/list')">商品一覧へ戻る</button>
        </div>
      </div>
    </div>
    <div class="absolute bottom-0 w-screen">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import ContentTitle from '../../components/ContentTitle';
import AdminHeader from '../../components/Admin/AdminHeader';
import Footer from '../../components/Footer';
import axios from 'axios';
export default {
  props: ['category_id','id'],
  components: {
    ContentTitle,
    AdminHeader,
    Footer
  },
  data() {
    return {
      title:"Product Detail",
      name: "",
      category: "",
      description: "",
      price: 0,
      images: [],
      categories: "",
      token: this.$store.state.token


    }
  },
  created() {
    this.getProduct()
    this.getCategory()
  },
  methods: {
    async getProduct() {
      await axios
        .get(`https://gentle-wildwood-14193.herokuapp.com/api/categories/${this.category_id}/products/${this.id}`)
        .then((response) => {
          this.name = response.data.data[0].product_name,
          this.category = this.category_id
          this.description = response.data.data[0].description
          this.price = response.data.data[0].price
          this.images = response.data.data[0].image_url
        })
    },
    async getCategory() {
      await
        axios
          .get('https://gentle-wildwood-14193.herokuapp.com/api/categories')
          .then((res) => {
            this.categories = res.data.data
          })
    },
    async productUpdate() {
      await axios
        .put(`https://gentle-wildwood-14193.herokuapp.com/api/categories/${this.category_id}/products/${this.id}`, {
            token: this.$store.state.token,
            category_id: this.category,
            title: this.name,
            description: this.description,
            price: this.price,
        })
        .then(()=>{
          alert('編集完了しました');
          this.getProduct();
          // this.$router.push('/admin/list');
        })
        .catch(() =>{
          alert('編集失敗しました。再度実行するかシステム管理者にお問い合わせください');
        })
    },
    getBase64 (file) {
      return new Promise((resolve, reject) => {        
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          resolve(reader.result);
        }
        reader.onerror = error => {
          reject(error);
        }
      })
    },
    imageSelected(e) {
      const images = e.target.files || e.dataTransfer.files
      this.getBase64(images[0])
        .then((res) => {
          this.uploadedImage(res)
        }
      )
    },
    async uploadedImage(res) {
      await axios
        .post('https://gentle-wildwood-14193.herokuapp.com/api/images',{
          token: this.$store.state.token,
          image_url: res,
          product_id: this.id
        })
        .then((res) => {
          console.log(res);
          alert('アップロードできました');
          this.getProduct();
        })
        .catch(() => {
          alert('アップロード失敗しました')
        })
    },
    async removeImage(id) {
      await axios
        .delete(`https://gentle-wildwood-14193.herokuapp.com/api/images/${id}`,{
          data: {
            token: this.token
          }
        })
        .then((res) => {
          console.log(res);
          alert('削除しました');
          this.getProduct();
        })
        .catch(() =>{
          alert('削除できませんでした');
        })
    }
  }
}
</script>