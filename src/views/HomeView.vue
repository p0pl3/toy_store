<template>
  <UpButtonPage/>
  <SliderSale/>
  <SliderProduct/>
</template>
<script>
import UpButtonPage from "@/components/UpButtonPage";
import SliderSale from "@/components/SliderSale";
import SliderProduct from "@/components/SliderProduct";

export default {
  name: 'HomeView',
  components: {SliderProduct, SliderSale, UpButtonPage},
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
