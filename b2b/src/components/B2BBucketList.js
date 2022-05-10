import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_B2B_CART } from "../gql/queries";
import CartItem from "./CartItem";

export function B2BBucketList(){
  const { loading, error, data } = useQuery(GET_B2B_CART);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  
  return (
    <div style={{
      padding:'0.5rem'
    }}>
      {data?.getB2BCart.map((item) => <CartItem key={item.product.id} product={item.product} quantity={item.quantity}/>
      )}
    </div>
  )
}

export default function(){
  useEffect(()=>{
    ReactDOM.render(<B2BBucketList/>, document.getElementById("b2bBucketLists"))
  },[]);

 return <div id="b2bBucketLists"></div>
}