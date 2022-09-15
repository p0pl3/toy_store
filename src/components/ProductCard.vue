<template>
  <div v-for="i in (1,2,3,4,5,6,7,8)" :key="i" class="product">
    <div class="product__image">
      <img src="@/assets/product_1.jpeg" style=" border-radius: 15px; width: 100%;">
    </div>
    <div class="product__description">
      <div class="product__title">
        <h3> Lorem Ipsum Lorem Ips</h3>
      </div>
      <div class="product__price">
        <h4>123$</h4>
        <img class="cart__image" src="@/assets/cart-black.svg">
      </div>
    </div>
    <div class="product__wish">
      <img class="wish__image" src="@/assets/wish.svg">
    </div>
    <div class="product__sale">
      <h5>-40%</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard"
}
</script>

<style lang="scss" scoped>
$base-background: #0073e6;
$base-background-white: #0381ff;
$base-grey: rgba(75, 75, 75, 0.9);

.product__price {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
}

.cart__image {
  width: 25px;
  height: 25px;
}

.wish__image {
  width: 25px;
  height: 25px;
}

.product__wish {
  position: absolute;
  right: 10px;
}


.product__sale {
  position: absolute;
  left: 10px;
  background: red;
  border-radius: 15px;

  h5 {
    font-size: 15px;
    color: white;
    margin: 0;
    padding: 5px;
  }
}

.product:first-child {
  margin-left: 0px;
}

.product {
  margin: 10px;
  display: flex;
  position: relative;
  flex-direction: column;
  background: white;
  border-radius: 15px;
  max-width: 300px;
  min-width: 300px;
  padding: 10px;

  h3 {
    margin: 0;
  }

  h4 {
    margin: 0;
  }
}

.product__description {
  h4 {
    color: $base-grey;
    font-weight: 500;
  }

  h3 {
    font-size: 20px;
    color: $base-grey;
    font-weight: 500;
  }
}

@media (max-width: 600px) {
  .product {
    margin: 5px;
    padding: 10px;
    min-width: 160px;
  }
  .product__description {
    h3 {
      font-size: 17px;
    }
  }
  .product__price {
    padding-top: 10px;
    font-size: 17px;
  }
  .cart__image {
    width: 20px;
    height: 20px;
  }
  .wish__image {
    width: 25px;
    height: 25px;
  }
  .product__sale {
    left: 5px;
    background: red;
    border-radius: 15px;

    h5 {
      font-size: 13px;
      color: white;
      margin: 0;
      padding: 3px;
    }
  }
}
</style>