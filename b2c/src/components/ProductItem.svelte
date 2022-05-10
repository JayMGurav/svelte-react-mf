<script>
  export let product;

</script>
<style>
  .product{
    display: flex;
    flex-direction: column;
    text-align: center;
    border: 1px solid #f2f2f2;
    padding: 1em;
    width: 300px;
  }
  button{
    margin-top: 1em;
  }
</style>
<div class="product">
  <img src={product.img} alt={product.name}/>
  <br/>
 {product.name}
  <strong>{product?.brand}</strong>
  ${product.price}
  <button>Add to cart</button>
</div>