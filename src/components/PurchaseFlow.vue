<template>
  <div class="mt-11 mb-36">
    <TopTitle :title="fourthTitle"></TopTitle>
    <div class="block lg:flex justify-around mt-6 font-serif">
    <!-- <div class=""> -->
      <div class="bg-footer-blue w-4/5 md:w-3/5 lg:w-1/4  py-20 px-11 mx-auto lg:mx-0 mb-11 lg:mb-0 leading-loose">
        <p>まずは購入前に何度もご相談ください。納得していただいた上でご購入いただきます。</p>
      </div>
      <div class="bg-footer-blue w-4/5 md:w-3/5 lg:w-1/4 py-20 px-11 mx-auto lg:mx-0 mb-11 lg:mb-0 leading-loose">
        <p>購入いただいた製品については、発送前に十分な検品ならびにクリーニングを実施いたします。</p>
      </div>
      <div class="bg-footer-blue w-4/5 md:w-3/5 lg:w-1/4 py-20 px-11 mx-auto lg:mx-0 mb-11 lg:mb-0 leading-loose">
        <p>商品の到着をお待ちください。到着後のアフタフォローも遠慮なくご相談くださいませ。</p>
      </div>
    </div>
  </div>
</template>


<script>
import TopTitle from './TopTitle.vue';
export default {
  components: {
    TopTitle,
  },
  data() {
    return {
      fourthTitle: "購入までの流れ"
    }
  },
}
</script>