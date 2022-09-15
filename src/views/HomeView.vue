<template>
  <UpButtonPage/>
  <SliderSale/>
  <InfoBanner/>
  <SliderProduct/>
</template>
<script>
import UpButtonPage from "@/components/UpButtonPage";
import SliderSale from "@/components/SliderSale";
import SliderProduct from "@/components/SliderProduct";
import InfoBanner from "@/components/InfoBanner";

export default {
  name: 'HomeView',
  components: {SliderProduct, SliderSale, UpButtonPage, InfoBanner},
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {},
  mounted() {

  }
}
</script>

<style lang="scss" scoped>

</style>
