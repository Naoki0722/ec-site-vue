<template>
  <div class="scroll-point bg-footer-blue pt-16 pb-1 mb-11">
    <BenefitArea1></BenefitArea1>
    <BenefitArea2></BenefitArea2>
    <BenefitArea1></BenefitArea1>
  </div>
</template>

<script>
import BenefitArea1 from './BenefitArea1';
import BenefitArea2 from './BenefitArea2';
export default {
  components: {
    BenefitArea1,
    BenefitArea2
  }  
}
</script>