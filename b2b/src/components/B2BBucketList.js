import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_B2B_CART } from "../gql/queries";
import CartItem from "./CartItem";
import cartStore from "../store";

export function B2BBucketList(){
  const {b2b, b2c} = cartStore();

  // const { loading, error, data } = useQuery(GET_B2B_CART);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>{error.message}</p>;
  
  return (
    <>
      {b2c.length > 0 && <div style={{
        padding:'0.5rem'
      }}>
        {b2c.map((item) => <CartItem key={item.id} product={item.product} quantity={item.quantity}/>
        )}
      </div>}
      <div style={{
        padding:'0.5rem'
      }}>
        {b2b.map((item) => <CartItem key={item.id} product={item.product} quantity={item.quantity}/>
        )}
      </div>
    </>
  )
}

export default function(){
  useEffect(()=>{
    ReactDOM.render(<B2BBucketList/>, document.getElementById("b2bBucketLists"))
  },[]);

 return <div id="b2bBucketLists"></div>
}