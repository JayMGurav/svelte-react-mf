import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import cartStore from "../store";
import { ADD_PRODUCT_TO_B2B_CART, ADD_PRODUCT_TO_B2C_CART } from "../gql/mutations";


export default function ProductListItem({product}){
  const {addToCart} = cartStore()
  const [quantity, setQty] = useState(1);
  const [addProductToB2BCart ] = useMutation(ADD_PRODUCT_TO_B2B_CART, {
    onCompleted: async ({addProductToB2BCart}) => {
      console.log({addProductToB2BCart})

      addToCart({
        item: addProductToB2BCart,
        cart: 'b2b'
      });
    }
  });
  const [addProductToB2CCart] = useMutation(ADD_PRODUCT_TO_B2C_CART, {
    onCompleted: async ({addProductToB2CCart}) => {
      console.log({addProductToB2CCart})
      addToCart({
        item: addProductToB2CCart,
        cart: 'b2c'
      });
    }
  });

  async function addProductToCart(productId){
    console.log({productId, quantity})
    try {
      if(quantity > 10){
        await addProductToB2BCart({ variables: { productId, quantity } });
      }else {
        await addProductToB2CCart({ variables: { productId, quantity } });
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="product">
      <img src={product.img} alt={product.name}/>
      <br/>
    {product.name}
      <strong>{product?.brand}</strong>
      ${product.price}
      <label>
          Qty: &nbsp;
        <input style={{
          width: "100px",
          margin:"0 auto"
        }} type="number" id="quantity" name="quantity" min="1" onChange={({target}) => {setQty(Number(target.value))}} value={quantity}/>
      </label>
      <button style={{
        marginTop: "1em"
      }} onClick={() => addProductToCart(product.id)}>Add to cart</button>
    </div>
  )
} 