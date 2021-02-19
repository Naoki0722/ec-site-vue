<template>
  <div>
    <TopTitle :title="thirdTitle"></TopTitle>
    <div class="block lg:flex justify-center">
      <FeaturesCard></FeaturesCard>
      <FeaturesCard></FeaturesCard>
      <FeaturesCard></FeaturesCard>
    </div>
    <div class="text-center">
      <Button></Button>
    </div>
  </div>  
</template>


<script>
import TopTitle from './TopTitle.vue';
import FeaturesCard from './FeaturesCard.vue';
import Button from './Button.vue';
export default {
  components: {
    TopTitle,
    FeaturesCard,
    Button
  },
  data() {
    return {
      thirdTitle: "当店のこだわり"
    }
  },
}
</script>