<template>
  <div class="home">
    <Header></Header>
    <Firstview></Firstview>
    <TopTitile :title="firstTitle"></TopTitile>
    <p class="text-center mt-8 mb-14 lg:mb-28 px-3 lg:px-0 font-serif md:text-lg">〜アクセサリーを付けて、自分を高めよう〜</p>
    <TopTitile :title="secondTitle"></TopTitile>
    <ProductCard></ProductCard>
    <BenefitArea></BenefitArea>
    <Features></Features>
    <PurchaseFlow></PurchaseFlow>
    <ProductContact></ProductContact>
    <ShopInfo></ShopInfo>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Firstview from '../components/Firstview.vue';
import TopTitile from '../components/TopTitle.vue';
import ProductCard from '../components/ProductCard.vue';
import BenefitArea from '../components/BenefitArea.vue';
import Features from '../components/Features.vue';
import PurchaseFlow from '../components/PurchaseFlow.vue';
import ProductContact from '../components/ProductContact.vue';
import ShopInfo from '../components/ShopInfo.vue';
import Footer from '../components/Footer.vue';
export default {
  name: 'Home',
  components: {
    Header,
    Firstview,
    TopTitile,
    ProductCard,
    BenefitArea,
    Features,
    PurchaseFlow,
    ProductContact,
    ShopInfo,
    Footer
  },
  data() {
    return {
      firstTitle: "オシャレがあなたを輝かせる",
      secondTitle: "当店の商品ラインナップ"
    }
  },
}
</script>
