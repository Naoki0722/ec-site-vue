<template>
  <div class="min-h-screen font-serif relative pb-80 lg:pb-20 box-border">
    <Header></Header>
    <div class="md:flex justify-between items-baseline">
      <ContentTitle class="my-4 ml-9" :sendTitle="title"></ContentTitle>
      <GenreSelect></GenreSelect>
    </div>
    <CategoryCard></CategoryCard>
    <div class="md:flex justify-around flex-wrap">
      <ProductsCard></ProductsCard>
      <ProductsCard></ProductsCard>
      <ProductsCard></ProductsCard>
      <ProductsCard></ProductsCard>
      <ProductsCard></ProductsCard>
      <ProductsCard></ProductsCard>
      <ProductsCard></ProductsCard>
      <ProductsCard></ProductsCard>
    </div>

    <div class="absolute bottom-0 w-screen">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header';
import ContentTitle from '../components/ContentTitle';
import GenreSelect from '../components/GenreSelect';
import CategoryCard from '../components/CategoryCard';
import ProductsCard from '../components/ProductsCard';
import Footer from '../components/Footer';
export default {
  components: {
    Header,
    ContentTitle,
    GenreSelect,
    CategoryCard,
    ProductsCard,
    Footer
  },
  data() {
    return {
      title: "Earrings"
    }
  },
}
</script>


<style scoped>
.test {
  display: block;
  float:left;
  margin: 0 100px;
}
</style>