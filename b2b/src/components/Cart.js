import React from "react";
import cartStore from "../store";
import CartItem from "./CartItem";


export function Cart({cartType}) {
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


// return (
//   <div>
//     <div style={{
//       textAlign: "center",
//       margin: "1rem 0"
//     }}>
//       <strong>B2B cart</strong>
//     </div>
//       {window.b2b?.map((item) => <CartItem key={item.id} product={item.product} quantity={item.quantity} cartType="b2b"/>)}
//   </div>
// )
// }


// export default () => render(<B2BCart />, document.getElementById("b2bCart"));
// export default Cart;