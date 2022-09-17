<template>
  <UpButtonPage/>
  <div class="">
    <div class="container">
      <div class="category_breadcrumb">
        <ul class="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">Pictures</a></li>
          <li><a href="#">Summer 15</a></li>
          <li>Italy</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="">
    <div class="container">
      <div class="products-catalog__title">
        <h2>Clothes</h2>
        <select id="cars" name="cars" class="box">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div class="products__article">
        <div class="products-catalog__filter">

        </div>
        <div class="product-catalog__grip">
          <ProductCard  v-for="i in (1, 2, 3,4, 5, 6)" :key="i" class="qwe"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UpButtonPage from "@/components/UpButtonPage";
import ProductCard from "@/components/ProductCard";

export default {
  name: "ProductsCatalog",
  components: {ProductCard, UpButtonPage}
}
</script>

<style lang="scss" scoped>

//.product {
//  width: calc(32% - 5 * 2px);
//}

.box {
  width: 120px;
  height: 30px;
  border: 1px solid #999;
  font-size: 14px;
  color: #1c87c9;
  background-color: #eee;
  border-radius: 5px;
}

.products-catalog__filter {
  position: sticky;
  top: 0;
}

.qwe {
  width: 32% !important;
  max-width: none;
  min-width: 200px;
  margin: 1% 1% 0px 0px;
}

.products__article {
  display: flex;
  justify-content: space-between;
  //flex-wrap: wrap;
}

.products-catalog__filter {
  min-width: 280px;
  height: 300px;
  background: red;
}

.product-catalog__grip {
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
  justify-content: space-between;
}

.products-catalog__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  margin: 0px;
}
ul.breadcrumb {
  padding: 10px 16px;
  list-style: none;
  background-color: #eee;
}

/* Display list items side by side */
ul.breadcrumb li {
  display: inline;
  font-size: 18px;
}

/* Add a slash symbol (/) before/behind each list item */
ul.breadcrumb li+li:before {
  padding: 8px;
  color: black;
  content: "/\00a0";
}

/* Add a color to all links inside the list */
ul.breadcrumb li a {
  color: #0275d8;
  text-decoration: none;
}

/* Add a color on mouse-over */
ul.breadcrumb li a:hover {
  color: #01447e;
  text-decoration: underline;
}

@media screen and (max-width: 1000px) {
  .qwe {
    width: 49% !important;
    max-width: none;
    min-width: 200px;
  }
}

@media screen and (max-width: 820px) {
  .qwe {
    width: 90% !important;
    max-width: 400px;
    min-width: 200px;
    margin: 1% auto;

  }
}

@media screen and (max-width: 600px) {
  .products__article {
    flex-wrap: wrap;
  }

  .qwe {
    width: 48% !important;
    max-width: none;
    min-width: 150px;
    margin: 1% auto;

  }

  .products-catalog__filter {
    width: 100%;
  }
}
</style>