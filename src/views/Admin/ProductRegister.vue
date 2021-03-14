<template>
  <div class="min-h-screen font-serif relative pb-80 lg:pb-24 box-border">
    <AdminHeader></AdminHeader>
    <ContentTitle class="my-4 ml-9" :sendTitle="title"></ContentTitle>
    <div class="text-center my-6 w-11/12 md:w-full mx-auto">
      <div class="text-left inline-block border p-4 md:p-11 shadow-md" @submit.prevent="onSubmit">
        <div class="pb-6">
          <label for="name" class="block w-56 float-left">商品名</label>
          <input type="text" id="name" name="name" class="border rounded border-gray-300 px-2 py-1 font-sans focus:outline-none" v-model="name" placeholder="◯◯ピアス">
        </div>
        <div class="pb-6">
          <label for="category" class="block w-56 float-left">カテゴリー</label>
          <select class="border rounded border-gray-300 p-1 mr-4" v-model="selected">
            <option disabled value="">選択してください</option>
            <option v-for="(category,index) in categories" :key="index" :value="category.id">{{category.name}}</option>
          </select>
        </div>
        <div class="pb-6">
          <label for="price" class="block w-56 float-left">価格</label>
          <input type="text" id="price" name="price" class="border rounded border-gray-300 px-2 py-1 font-sans focus:outline-none" v-model="price" placeholder="9,000">
        </div>
        <div class="w-full">
          <label for="description" class="block mb-4">商品説明</label>
          <textarea  id="description" name="description" class="border rounded border-gray-300 px-2 py-1 w-full h-36 mb-6 focus:outline-none" v-model="description" placeholder="色やサイズなど"></textarea>
        </div>
        <div class="w-full">
          <label for="message" class="block mb-4">商品画像</label>
          <input type="file" multiple @change="imageSelected" class="my-6 w-full">
          <div class="border h-32 p-3 mb-4 flex items-center justify-center" @dragenter="dragEnter" @dragleave="dragLeave" @dragover.prevent @drop.prevent="dropFile" :class="{enter: isEnter}">
            <p class="text-center">ここに写真をドラッグ&ドロップ</p>
          </div>
        </div>
        <div class="flex flex-wrap my-6">
          <img v-for="(image, index) in image_url" :key="index" :src="image" alt="テスト" class="w-28 object-cover">
        </div>
        <div class="text-center">
          <button class="mr-2 tracking-wider text-center border hover:bg-orange rounded-full hover:text-white px-3 py-2 transition duration-300 ease-in-out bg-transparent text-gray-800 border-orange focus:outline-none" @click="register">商品登録する</button>
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
import axios from 'axios'
export default {
  components: {
    ContentTitle,
    AdminHeader,
    Footer
  },
  data() {
    return {
      title:"Product Registration",
      name: "",
      category: "",
      price: "",
      description: "",
      isEnter: false,
      image_url: [],
      categories: "",
      selected: '',
      token: this.$store.state.token

    }
  },
  created() {
    this.getCategory()
  },
  methods: {
    async getCategory() {
      await
        axios
          .get('https://gentle-wildwood-14193.herokuapp.com/api/categories')
          .then((res) => {
            this.categories = res.data.data
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
    dragEnter() {
      this.isEnter = true;
    },
    dragLeave() {
      this.isEnter = false;
    },
    dropFile(e) {
      this.imageSelected(e);
      this.isEnter = false;
    },
    imageSelected(e) {
      const images = e.target.files || e.dataTransfer.files
      for(let i=0; i < images.length; i++) {
        this.getBase64(images[i])
          .then((res) => {
            this.image_url.push(res);
          }
        )
      }
    },
    async register() {
      await axios
        .post(`https://gentle-wildwood-14193.herokuapp.com/api/categories/${this.selected}/products`,{
          token: this.token,
          category_id: this.selected,
          title: this.name,
          description: this.description,
          price: this.price,
          image_url: this.image_url,
        })
        .then(() => {
          alert('登録完了しました');
          this.$router.push('/admin/list');
        })
        .catch(() => {
          alert('登録に失敗しました');
        })

    }
  }
}
</script>

<style scoped>
.enter {
    border: 3px dotted powderblue;
}
</style>
