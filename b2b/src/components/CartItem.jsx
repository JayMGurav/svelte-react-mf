import React from "react"
import { useMutation } from "@apollo/client";

import { REMOVE_PRODUCT_TO_B2C_CART, REMOVE_PRODUCT_TO_B2B_CART } from "../gql/mutations";
import cartStore from "../store";

export default function CartItem({product, quantity, cartType}){
  const {removeFromCart} = cartStore();

  const [removeProductToB2CCart] = useMutation(REMOVE_PRODUCT_TO_B2C_CART);
  const [removeProductToB2BCart] = useMutation(REMOVE_PRODUCT_TO_B2B_CART);


  async function handleRemoveFromCart(productId){
    try {
      let removed = false;
      if(cartType === "b2b"){
        const {data} = await removeProductToB2BCart({ variables: { productId } });
        removed = data.removeProductFromB2BCart
      }else {
        const {data} = await removeProductToB2CCart({ variables: { productId } });
        removed = data.removeProductFromB2CCart
      }

      // if renoved from cart then modify state
      if(removed) {
        removeFromCart({
          productId:product.id,
          cart: cartType
        })
      }
    } catch (error) {
      console.log(error)
    }
  }


  return(
    <div className="cartproduct">
      <img src={product.img} alt={product.name} width="60px"/>
      <div>
        <p><strong>{product?.brand}</strong></p>
        <p>{product.name}</p>
        ${product.price},
        Qty: {quantity} &nbsp;&nbsp;
        <button onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
      </div>
    </div>
  )
}