<template>
  <div class="banner__item">
      <img src="@/assets/banner_1.jpeg" class="banner__image">
  </div>
</template>

<script>
export default {
  name: "BannerItem"
}
</script>

<style lang="scss" scoped>
$base-background: #0073e6;
$base-background-white: #0381ff;
$base-grey: rgba(75, 75, 75, 0.9);

.banner__image{
  width: 100%;
  height: 100%;
  border-radius: 15px;
}
@media (max-width: 600px){
  .banner__image{
    margin-bottom: 30px;
  }
}

</style>