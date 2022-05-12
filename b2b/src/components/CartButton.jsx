import React, { useState } from "react";
import CartToolTip from "./CartToolTip";
import cartStore from "../store";

export default function CartButton() {
  const {b2b, b2c} = cartStore();
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseOver(e) {
    setIsHovered(true);
  }
  function handleMouseOut(e) {
    setIsHovered(false);
  }

  return (
    <div
      id="cartButton"
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      <div id="unSkewed">
        <div id="counter">{b2b?.length +  b2c?.length || 0}</div>
        <svg
          style={{
            width: 30,
            height: 30,
            position: "relative",
          }}
          aria-hidden="true"
          viewBox="0 0 32 32"
        >
          <path d="M7.873 6.008A1.01 1.01 0 018 6h21a1 1 0 011 1v11a1 1 0 01-.836.986l-18 3a1 1 0 01-1.128-.72L5.318 4.281l-2.002.668a1 1 0 01-.632-1.898l3-1a1 1 0 011.28.681l.91 3.276zM8.427 8l3.296 11.864L28 17.153V8H8.427zM16 29a3 3 0 110-6 3 3 0 010 6zm9 0a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 100-2 1 1 0 000 2zm-9 0a1 1 0 100-2 1 1 0 000 2z"></path>
        </svg>
        My Basket
      </div>
      {isHovered && <CartToolTip  
        mouseEnter={handleMouseOver}
        mouseLeave={handleMouseOut}
      />}
    </div>
  );
}
