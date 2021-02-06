<template>
  <div class="md:ml-40 font-serif w-11/12 md:w-full mx-auto md:mx-0">
    <div class="md:flex items-center mb-11">
      <p class="text-lg md:text-2xl ml-6 md:ml-0 mr-6 md:mr-24 mb-6 md:mb-0 text-yellow-900 tracking-wide">松崎 直樹<span class="mr-2 md:mr-6"> 様</span>ようこそ！</p>
      <button class="block mx-auto md:inline md:mx-0 tracking-wider border hover:bg-orange rounded-full hover:text-white px-3 md:px-6 py-2 transition duration-300 ease-in-out bg-transparent text-gray-800 border-orange focus:outline-none" @click="editFlag = !editFlag">
        登録編集
      </button>
    </div>
    <table class="text-left text-yellow-900 mx-auto md:mx-0">
      <tr>
        <th class="py-8 pr-28 md:pr-44">名前</th>
        <td v-if="editFlag">なまえ</td>
        <td v-else><input type="text" class="border px-2 py-1"></td>
      </tr>
      <tr>
        <th class="py-8">メールアドレス</th>
        <td v-if="editFlag">test@ates.com</td>
        <td v-else><input type="email" class="border px-2 py-1"></td>
      </tr>
      <tr>
        <th class="py-8">電話番号</th>
        <td v-if="editFlag">0009923303343</td>
        <td v-else><input type="text" class="border px-2 py-1"></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editFlag: true,
    }
  },
  methods: {
    // edit() {
    //   this.editFlag = true;
    //   console.log(this.editFlag);
    // }
  }
}
</script>