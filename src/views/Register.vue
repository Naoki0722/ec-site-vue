<template>
  <div class="min-h-screen relative pb-80 lg:pb-24 box-border">
    <Header></Header>
    <ContentTitle class="my-4 ml-9" :sendTitle="title"></ContentTitle>
    <div class="md:flex md:justify-around">
      <RegisterFormInput></RegisterFormInput>
      <RegisterSide></RegisterSide>
    </div>
    <div class="absolute bottom-0 w-screen">
      <Footer></Footer>
    </div>
  </div>
</template>


<script>
import Header from '../components/Header';
import ContentTitle from '../components/ContentTitle';
import RegisterFormInput from '../components/RegisterFormInput';
import RegisterSide from '../components/RegisterSide';
import Footer from '../components/Footer';
export default {
  components: {
    Header,
    ContentTitle,
    RegisterFormInput,
    RegisterSide,
    Footer
  },
  data() {
    return {
      title: "Register"
    }
  },
}
</script>