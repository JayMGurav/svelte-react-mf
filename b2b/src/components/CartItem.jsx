import React from "react"

export default function CartItem({product, quantity}){
  return(
    <div className="cartproduct">
      <img src={product.img} alt={product.name} width="60px"/>
      <div>
        <p><strong>{product?.brand}</strong></p>
        <p>{product.name}</p>
        ${product.price},
        Qty: {quantity}
      </div>
    </div>
  )
}