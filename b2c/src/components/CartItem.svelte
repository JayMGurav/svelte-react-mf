<script>
  import { mutation } from "svelte-apollo";
  import { REMOVE_PRODUCT_TO_B2C_CART, REMOVE_PRODUCT_TO_B2B_CART } from "../gql/mutations";
  import {svelteZTSStore as store} from "../store";

  const removeProductToB2BCart = mutation(REMOVE_PRODUCT_TO_B2B_CART);
  const removeProductToB2CCart = mutation(REMOVE_PRODUCT_TO_B2C_CART);

  export let product;
  export let quantity;
  export let cartType;




  async function handleRemoveFromCart(productId) {
    try {
      let removed = false;
      if(cartType === "b2b"){
        const {data} = await removeProductToB2BCart({ variables: { productId, quantity } });
        removed = data.removeProductFromB2BCart
      }else {
        const {data} = await removeProductToB2CCart({ variables: { productId, quantity } });
        removed = data.removeProductFromB2CCart
      }

      // if renoved from cart then modify state
      if(removed) {
        $store.removeFromCart({
          productId,
          cart: cartType
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

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
     Qty: {quantity} &nbsp;&nbsp;
     <button on:click={() => handleRemoveFromCart(product.id)}>Remove</button>
  </div>
</div>