import { useQuery } from "@apollo/client";
import React from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import {GET_B2C_CART, GET_B2B_CART} from "../gql/queries"
import cartStore from "../store";
import { useEffect } from "react";



export default function () {
  const {initCart} = cartStore();
  const { data:b2cData, loading:b2cLoading, error:b2bError } = useQuery(GET_B2C_CART);
  const { data:b2bData, loading:b2bLoading, error:b2cError } = useQuery(GET_B2B_CART);

  useEffect(() => {
    if(Boolean(b2cData) && Boolean(b2bData)){
      initCart({
        b2c: b2cData.getB2CCart,
        b2b: b2bData.getB2BCart
      });
    }
  }, [b2cData, b2bData]);

  return (
    <>
      <Header />
      <ProductList />
    </>
  );
}
