<template>
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
      <div class="cart__title">
        <h2>Cart</h2>
      </div>
      <div class="cart__article">

        <div class="cart__products">
          <div class="cart__product-item" v-for="i in (1, 2, 3)" :key="i">
            <img src="@/assets/product_item_1.jpeg" style="width: 100px;">
            <div class="product-item__description">
              <div class="product-item__info">
                <h3>Product title</h3>
              </div>
              <div class="product-item__count" style="width: 40px; height: 20px; background: blue;">

              </div>
              <div class="product-item__price">
                <h3>100$</h3>
              </div>
              <div class="product-item__action" style="width: 20px; height: 20px; background: blue;">

              </div>
            </div>
          </div>
        </div>

        <div class="cart__info">
          <div class="cart__promo" style="width: 100%; height: 200px; background: #1c87c9">
            <p>Введите промокод</p>
            <input class="cart__promo-input">
          </div>
          <div class="cart__description-price" style="width: 100%; height: 150px; background: #1c87c9; margin-top: 5px;">
            <p>Введите промокод</p>
            <p>Введите промокод</p>
          </div>
          <button class="cart__info__confirm-order">Checkout</button>
        </div>

      </div>
    </div>
  </div>


  <SliderProduct/>

</template>

<script>
import SliderProduct from "@/components/SliderProduct";

export default {
  name: "ProductsCart",
  components: {SliderProduct}
}
</script>

<style lang="scss" scoped>

.cart__info__confirm-order {
  font-size: 26px;
  color: white;
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  background: #1c87c9;
  border-radius: 25px;
}

h3 {
  margin: 0px;
}

.product-item__description {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-left: 20px;
}

.cart__product-item {
  display: flex;
  //justify-content: space-between;
  //align-items: flex-start;
  background: yellow;
  padding: 10px;
}
.cart__promo-input {
  width: 100%;
  height: 50px;
  border-radius: 15px;
}
.cart__article {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.cart__products {
  padding: 10px;
  width: 66%;
  background: red;
}

.cart__info {
  width: 33%;
  padding: 10px;
  background: red;
  position: sticky;
  top: 0;

  p {
    margin: 0 0 10px 0;
  }


}

ul.breadcrumb {
  padding: 0px 16px;
  list-style: none;
  background-color: #eee;
}

ul.breadcrumb li {
  display: inline;
  font-size: 18px;
}

ul.breadcrumb li + li:before {
  padding: 8px;
  color: black;
  content: "/\00a0";
}

ul.breadcrumb li a {
  color: #6c7073;
  text-decoration: none;
}

ul.breadcrumb li a:hover {
  color: #01447e;
  text-decoration: underline;
}

@media screen and (max-width: 820px) {
  .cart__products {
    width: 100%;
    background: red;
  }

  .cart__info {
    width: 100%;
    background: red;
    position: sticky;
    top: 0;
  }
}
</style>