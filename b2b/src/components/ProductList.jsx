import React from "react";
import { useQuery } from "@apollo/client";
import {GET_PRODUCTS} from "../gql/queries"
import ProductListItem from "./ProductListItem";

export default function ProductList(){
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return <div style={{
    margin: "2em",
    display: "flex",
    gap: "2ch"
  }}>{data?.products.map((product) => <ProductListItem product={product} key={product.id}/>)}</div>;
}