<template>
  <div class="min-h-screen relative pb-80 lg:pb-24 box-border">
    <AdminHeader></AdminHeader>
    <ContentTitle class="my-4 ml-9" :sendTitle="title"></ContentTitle>
    <div class="md:flex md:justify-around">
      <AdminLoginFormInput></AdminLoginFormInput>
      <LoginSide></LoginSide>
    </div>
    <div class="absolute bottom-0 w-screen">
      <Footer></Footer>
    </div>
  </div>
</template>


<script>
import AdminHeader from '../../components/Admin/AdminHeader';
import ContentTitle from '../../components/ContentTitle';
import AdminLoginFormInput from '../../components/Admin/AdminLoginFormInput';
import LoginSide from '../../components/LoginSide';
import Footer from '../../components/Footer';
export default {
  components: {
    AdminHeader,
    ContentTitle,
    AdminLoginFormInput,
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