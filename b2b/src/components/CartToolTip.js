import React from "react";
import {B2BBucketList} from "./B2BBucketList";


export default function CartToolTip(){
  return (
    <div id="tooltip">
      <div id="toolTipHeader">
        My Basket
      </div>
      <div id="basket">
        <div>
          <div style={{
            textAlign: "center",
            margin: "0.5rem 0"
          }}>
            <strong>B2B cart</strong>
          </div>
          <B2BBucketList/>
          </div>
      </div>
</div>
  )
}