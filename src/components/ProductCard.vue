<template>
  <div class="product">
    <div class="product__image">
      <router-link :to="{name: 'ProductView'}">
        <img src="@/assets/product_1.jpeg" style="border-radius: 15px; width: 100%; ">
      </router-link>
    </div>
    <div class="product__description">
      <div class="product__title">
        <h3> Lorem Ipsum Lorem Ips</h3>
      </div>
      <div class="product__price">
        <div class="prices">
          <h4 class="new__price">100$</h4>
          <h4 class="old__price">123$</h4>
        </div>
        <img v-if="this.product_count===0" class="cart__image" src="@/assets/cart-black.svg"
             @click="this.product_count+=1">
        <div v-if="this.product_count>0" class="product__counter">
          <span @click="this.product_count-=1">-</span>
          <span>{{ this.product_count }} </span>
          <span @click="this.product_count+=1">+</span>
        </div>
      </div>
    </div>
    <div class="product__wish">
      <svg id="heartSymbol" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"
           @click="changeColor">
        <g>
          <path stroke-width="5" :style="{fill: this.currentFillColor, stroke: this.currentStrokeColor}"
                d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543
	c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503
	c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"/>
        </g>
      </svg>
    </div>
    <div class="product__sale">
      <h5>-40%</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  data() {
    return {
      currentFillColor: "none",
      currentStrokeColor: "grey",
      product_count: 0
    }

  },
  methods: {
    changeColor: function () {
      if (this.currentFillColor === "red") {
        this.currentFillColor = "none";
        this.currentStrokeColor = "grey";
      } else {
        this.currentFillColor = "red"
        this.currentStrokeColor = "red";
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$base-background: #0073e6;
$base-background-white: #0381ff;
$base-grey: rgba(75, 75, 75, 0.9);

.product__price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
}

.cart__image {
  width: 27px;
  height: 27px;
  cursor: pointer;
}

.product__counter {
  background: $base-background-white;
  display: flex;
  cursor: pointer;
  width: 100px;
  justify-content: space-between;
  border-radius: 10px;
}

.product__counter span {
  padding: 5px 10px;
  color: white;
}

.added_in_cart {
  display: none;
}

.product__wish {
  position: absolute;
  right: 10px;
  width: 27px;
  height: 27px;
  cursor: pointer;

  svg {
    height: 24px;
    width: 27px;
  }
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

.new__price {
  color: red !important;
  font-weight: 600 !important;
}

.old__price {
  text-decoration: red line-through solid 2px;
  font-size: 17px !important;
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
  .product__counter {
    width: 80px;
    margin-top: 5px;

    span {
      padding: 5px 8px;
    }
  }
  .old__price {
    font-size: 15px !important;
  }
  .product__wish{
    width: 20px;
    height: 20px;
    svg{
      height: 18px;
      width: 20px;
    }
  }
}
</style>