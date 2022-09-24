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
              <div class="product-item__count">
                <img src="@/assets/remove.svg" style="width: 20px; height: 20px; margin-right: 25px;">
                <input type="number" value="1" style="width: 40px; border: none; font-size: 20px;">
                <img src="@/assets/add.svg" style="width: 20px; height: 20px">
              </div>
              <div class="product-item__price">
                <h3>100$</h3>
              </div>
              <div class="product-item__action">
                <img src="@/assets/delete.svg" style="width: 30px; height: 30px">
              </div>
            </div>
          </div>
        </div>
        <div class="cart__info">
          <div class="cart__promo">
            <p style="margin: 0; font-weight: 100;">Enter promo code</p>
            <input class="cart__promo-input" placeholder="Promo code">
          </div>
          <div class="cart__description-price">
            <div class="" style="display: flex; justify-content: space-between;">
              <p>Products (213) </p>
              <p>123$ </p>
            </div>
            <div class="" style="display: flex; justify-content: space-between;">
              <p>Total price: </p>
              <p>300$ </p>
            </div>
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
$base-background: #0073e6;
$base-background-white: #0381ff;
$base-grey: rgba(75, 75, 75, 0.9);

.cart__promo {
  width: 100%;
}
.cart__description-price {
  width: 100%;
  margin-top: 15px;
}

.product-item__action {
  width: 20px;
  height: 20px;
}

.product-item__count {
  display: flex;
}

.cart__info__confirm-order {
  font-size: 26px;
  color: white;
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  border: none;
  background: $base-background-white;
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
  border-bottom: 1px solid rgba(200, 200, 200, 1);
  padding: 10px;
}

.cart__product-item:last-child {
  border: none;
}

.cart__promo-input {
  text-indent: 10px;
  width: 100%;
  font-size: 25px;
  height: 50px;
  border-radius: 15px;
  border: 1px solid grey;
}

.cart__article {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
}

.cart__products {
  padding: 10px;
  width: 66%;
  background: white;
  border-radius: 15px;
}

.cart__info {
  width: 33%;
  padding: 10px;
  background: white;
  border-radius: 15px;
  position: sticky;
  top: 15px;

  p {
    margin: 0 0 10px 0;
  }
}

ul.breadcrumb {
  padding: 0px 16px;
  list-style: none;
  margin: 0;
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
  }

  .cart__info {
    width: 100%;
    margin-top: 10px;
    position: sticky;
    top: 0;
  }
}
</style>