import React from "react";
import cartStore from "../store";
import CartItem from "./CartItem";
import {Cart} from "./Cart"

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