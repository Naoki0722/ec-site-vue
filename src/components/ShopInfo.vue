<template>
  <div>
    <TopTitle :title="tableTitle"></TopTitle>
    <table class="mx-4 md:mx-auto mb-24 text-gray-900 font-serif">
      <tr class="border-b border-gray-400">
        <th class="text-left pt-6 pr-11 lg:pr-36">
          店名
        </th>
        <td class="pt-6">
          テスト
        </td>
      </tr>
      <tr class="border-b border-gray-400">
        <th class="text-left pt-6 pr-11 lg:pr-36">
          住所
        </th>
        <td class="pt-6">
          福岡県テストテストテストテスト
        </td>
      </tr>
      <tr class="border-b border-gray-400">
        <th class="text-left pt-6 pr-11 lg:pr-36">
          電話番号
        </th>
        <td class="pt-6">
          090-0000-0000
        </td>
      </tr>
      <tr class="border-b border-gray-400">
        <th class="text-left pt-6 pr-11 lg:pr-36">
          営業時間
        </th>
        <td class="pt-6">
          9:00~17:00(休:土日祝)
        </td>
      </tr>
    </table>
  </div>
</template>


<script>
import TopTitle from './TopTitle.vue'
export default {
  components: {
    TopTitle
  },
  data() {
    return {
      tableTitle:"ショップ情報"
    }
  },
}
</script>