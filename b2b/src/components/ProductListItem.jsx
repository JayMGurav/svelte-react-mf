import React from "react";

export default function ProductListItem({product}){
  return (
    <div className="product">
      <img src={product.img} alt={product.name}/>
      <br/>
    {product.name}
      <strong>{product?.brand}</strong>
      ${product.price}
      <button style={{
        marginTop: "1em"
      }}>Add to cart</button>
    </div>
  )
}