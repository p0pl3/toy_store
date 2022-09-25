<template>
  <div class="cart__product-item">
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
</template>

<script>
export default {
  name: "CartProductItem"
}
</script>

<style lang="scss" scoped>

.product-item__description h3 {
  margin: 0;
}

.cart__product-item {
  display: flex;
  border-bottom: 1px solid rgba(200, 200, 200, 1);
  padding: 10px;
}

.cart__product-item:last-child {
  border: none;
}

.product-item__action {
  width: 20px;
  height: 20px;
}

.product-item__count {
  display: flex;
}

.product-item__description {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-left: 20px;
}
</style>