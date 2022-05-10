<script>
  export let product;
  export let quantity;
</script>
<style>
  .cartproduct{
    display: flex;
    align-items: center;
    padding: 1em;
    gap:2ch;
  }
  .cartproduct p {
    margin: 0;
  } 
</style>
<div class="cartproduct">
  <img src={product.img} alt={product.name} width="60px"/>
  <div>
    <p><strong>{product?.brand}</strong></p>
    <p>{product.name}</p>
     ${product.price},
     Qty: {quantity}
  </div>
</div>