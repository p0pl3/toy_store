<template>
  <UpButtonPage/>
  <div class="">
    <div class="container">
      <div class="category_breadcrumb">
        <ul class="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">Pictures</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="">
    <div class="container">
      <div class="products-catalog__title">
        <h2>Clothes</h2>
        <select id="cars" name="cars" class="box">
          <option value="volvo">Price</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div class="products__article">
        <div class="products-catalog__filter">
          <h4 style="margin-top: 0px;">Category</h4>
          <ul>
            <li><a href="#">Category 1</a></li>
            <li><a href="#">Category 2</a></li>
            <li><a href="#">Category 3</a></li>
            <li><a href="#">Category 4</a></li>
            <li><a href="#">Category 5</a></li>
          </ul>
          <div class="filter__price-range">
            <h4>Price</h4>
            <div class="" style="display: flex;">
              <div class="" style="width: 50%;">
                <p style="margin: 0px;">From</p>
                <input
                    style="width: 100%; font-size: 20px;  text-indent:5px;border-right: 1px solid grey; height: 35px; border-radius: 15px 0px 0px 15px;"
                    type="number">
              </div>
              <div class="" style="width: 50%;">
                <p style="margin: 0px;">To</p>
                <input
                    style="width: 100%; font-size: 20px; text-indent:5px;border-left: 1px solid grey; height: 35px;  border-radius: 0px 15px 15px 0px;"
                    type="number">
              </div>

            </div>
          </div>
          <div class="filter__delivery">
            <h4>Срок доставки</h4>
            <!--            <label for="two"> 2 дня</label>-->
            <ul>
              <li><input type="radio" id="deliveryChoice1"
                         name="delivery" value="email">
                <label for="deliveryChoice1">1 день</label></li>
              <li><input type="radio" id="deliveryChoice2"
                         name="delivery" value="phone">
                <label for="deliveryChoice2">2 дня</label></li>
              <li><input type="radio" id="deliveryChoice3"
                         name="delivery" value="mail">
                <label for="deliveryChoice3">до 3 дней</label></li>
            </ul>
          </div>
          <div class="filter__sale">
            <h4>Sale</h4>
            <!--            <label for="two"> 2 дня</label>-->
            <ul>
              <li><input type="radio" id="saleChoice1"
                         name="contact" value="email">
                <label for="saleChoice1">от 10% и выше</label></li>
              <li><input type="radio" id="saleChoice2"
                         name="contact" value="phone">
                <label for="saleChoice2">от 30% и выше</label></li>
              <li><input type="radio" id="saleChoice3"
                         name="contact" value="mail">
                <label for="saleChoice3">от 50% и выше</label></li>
            </ul>
          </div>
        </div>
        <div class="product-catalog__grip">
          <ProductCard v-for="i in (1, 2, 3,4, 5, 6,7,8,9,10,11,12)" :key="i" class="qwe"/>
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

h4 {
  margin: 25px 0px 10px 0px;
}

.filter__price-range {
  margin: 10px 0px;
  //background: red;
}

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
  margin-top: 8px;
  padding: 10px;
  border-radius: 15px;
  position: sticky;
  top: 10px;
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
  align-items: start;
}

.products-catalog__filter {
  min-width: 280px;
  background: #ffffff;

  ul > li > a {
    text-decoration: none;
    color: #999999;
  }
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
  list-style-type: none;
  padding: 0px;
}

ul > li > label {
  margin: 10px;
}

ul.breadcrumb {
  padding: 0px 16px;
  list-style: none;
  background-color: #eee;
}

/* Display list items side by side */
ul.breadcrumb li {
  display: inline;
  font-size: 18px;
}

/* Add a slash symbol (/) before/behind each list item */
ul.breadcrumb li + li:before {
  padding: 8px;
  color: black;
  content: "/\00a0";
}

/* Add a color to all links inside the list */
ul.breadcrumb li a {
  color: #6c7073;
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
  .product-catalog__grip {
    margin-left: 0px;
  }
  .products-catalog__filter {
    position: inherit;
    margin-bottom: 10px;
  }

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