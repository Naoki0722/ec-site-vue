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
      <tbody class="text-sm md:text-lg">
        <tr class="bg-white">
          <td class="hidden lg:block px-16 py-6 flex flex-row items-center">
            <img
              class="h-8 w-8 object-cover"
              src="https://randomuser.me/api/portraits/men/30.jpg"
              alt=""
            />
          </td>
          <td class="px-6 lg:px-16 py-6 lg:py-2">
            <p class="text-center">シルバーリング</p>
          </td>
          <td class="hidden md:table-cell px-6 lg:px-16 py-2">
            <p class="text-center">ピアス</p>
          </td>
          <td class="px-6 lg:px-16 py-2">
            <p class="text-center">10500</p>
          </td>
          <td class="text-center">
            <button class="text-xs md:text-sm bg-transparent hover:text-white px-4 py-2 border border-gray-700 rounded-full transition duration-300 ease-in-out hover:bg-white hover:bg-gray-500 hover:border-0 text-black focus:outline-none">削除</button>
          </td>
        </tr>
        <tr class="bg-white">
          <td class="hidden lg:block px-16 py-6 flex flex-row items-center">
            <img
              class="h-8 w-8 object-cover"
              src="https://randomuser.me/api/portraits/men/30.jpg"
              alt=""
            />
          </td>
          <td class="px-4 lg:px-16 py-6 lg:py-2">
            <p class="text-center">シルバーリング</p>
          </td>
          <td class="hidden md:table-cell px-6 lg:px-16 py-2">
            <p class="text-center">ピアス</p>
          </td>
          <td class="px-4 lg:px-16 py-2">
            <p class="text-center">10500</p>
          </td>
          <td class="text-center">
            <button class="text-xs md:text-sm bg-transparent hover:text-white px-4 py-2 border border-gray-700 rounded-full transition duration-300 ease-in-out hover:bg-white hover:bg-gray-500 hover:border-0 text-black focus:outline-none">削除</button>
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
            20,500
          </td>
        </tr>
        <tr class="border-b">
          <th class="font-thin">
            消費税(円)
          </th>
          <td class="text-right">
            2,000
          </td>
        </tr>
        <tr>
          <th class="pt-4">
            合計(円)
          </th>
          <td class="text-right pt-4">
            22,500
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>