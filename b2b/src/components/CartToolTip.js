import React from "react";
import cartStore from "../store";
import CartItem from "./CartItem";


function Cart({cartType}) {
  const store = cartStore();
  
  const cart = store[cartType];
 
  return (
    <div>
      <div style={{
        textAlign: "center",
        margin: "1rem 0"
      }}>
        <strong>{cartType} cart</strong>
      </div>
        {cart?.map((item) => <CartItem key={item.id} product={item.product} quantity={item.quantity} cartType={cartType}/>)}
    </div>
  )
}


export default function CartToolTip({mouseEnter, mouseLeave}){
  return (
    <div id="tooltip" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <div id="toolTipHeader">
        My Basket
      </div>
      <div id="basket">
        <Cart cartType="b2c"/>
          <hr/>
        <Cart cartType="b2b"/>
      </div>
    </div>
  )
}