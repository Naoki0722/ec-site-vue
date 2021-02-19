<template>
  <div class="min-h-screen relative pb-80 lg:pb-24 box-border">
    <Header></Header>
    <ContentTitle class="my-4 ml-9" :sendTitle="title"></ContentTitle>
    <div class="md:flex md:justify-around">
      <LoginFormInput></LoginFormInput>
      <LoginSide></LoginSide>
    </div>
    <div class="absolute bottom-0 w-screen">
      <Footer></Footer>
    </div>
  </div>
</template>


<script>
import Header from '../components/Header';
import ContentTitle from '../components/ContentTitle';
import LoginFormInput from '../components/LoginFormInput';
import LoginSide from '../components/LoginSide';
import Footer from '../components/Footer';
export default {
  components: {
    Header,
    ContentTitle,
    LoginFormInput,
    LoginSide,
    Footer
  },
  data() {
    return {
      title:"Login"
    }
  },
}
</script>