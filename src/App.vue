<template>
  <NavBar/>
  <UpButtonPage/>
  <SliderSale/>
  <SliderProduct/>
  <Footer/>
</template>
<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import UpButtonPage from "@/components/UpButtonPage";
import SliderSale from "@/components/SliderSale";
import SliderProduct from "@/components/SliderProduct";

export default {
  name: 'App',
  components: {SliderProduct, SliderSale, UpButtonPage, Footer, NavBar},
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

<style lang="scss">
$base-background: #0073e6;
$base-background-white: #0381ff;
$base-grey: rgba(75, 75, 75, 0.9);


@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

html,
body {
  margin: 0;
  padding: 0;
  background-color: #ECEFF1;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
}

* {
  box-sizing: border-box;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 10px 15px;
}
</style>
