<template>
  <UpButtonPage/>
  <SliderSale/>
  <SliderProduct/>
  <InfoBanner/>
  <SpecialProduct/>
</template>
<script>
import UpButtonPage from "@/components/UpButtonPage";
import SliderSale from "@/components/SliderSale";
import SliderProduct from "@/components/SliderProduct";
import InfoBanner from "@/components/InfoBanner";
import SpecialProduct from "@/components/SpecialProduct";

export default {
  name: 'HomeView',
  components: {SliderProduct, SliderSale, UpButtonPage, InfoBanner, SpecialProduct},
  data() {
    return {}
  },
  methods: {},
  computed: {},
  mounted() {

  }
}
</script>

<style lang="scss" scoped>

</style>
