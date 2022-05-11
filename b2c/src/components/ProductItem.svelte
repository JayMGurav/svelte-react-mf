<script>
  import { mutation } from "svelte-apollo";

  import { ADD_PRODUCT_TO_B2B_CART, ADD_PRODUCT_TO_B2C_CART } from "../gql/mutations";
	import {svelteZTSStore as store} from "../store";


  const addProductToB2BCart = mutation(ADD_PRODUCT_TO_B2B_CART);
  const addProductToB2CCart = mutation(ADD_PRODUCT_TO_B2C_CART);

  export let product;

  let quantity = 1;

  async function handleAddToClick(productId) {
    try {
      if(quantity > 10){
        const {data} = await addProductToB2BCart({ variables: { productId, quantity } });
        $store.addToCart({
          item: data.addProductToB2BCart,
          cart: 'b2b'
        });
      }else {
        const {data} = await addProductToB2CCart({ variables: { productId, quantity } });
        $store.addToCart({
          item: data.addProductToB2CCart,
          cart: 'b2c'
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
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
  input {
    width: 100px;
    margin:0 auto;
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

  <label>
    Qty: 
  <input type="number" id="quantity" name="quantity" min="1" on:change={({target}) => {quantity = Number(target.value)}} value={quantity}>
</label>
  <button on:click={() => handleAddToClick(product.id)}>Add to cart</button>
</div>