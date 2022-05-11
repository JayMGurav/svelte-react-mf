import React from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import create from "zustand";

import counterStore from "b2c/store";
const useStore = create(counterStore);

export default function () {
  // const { count, incC, clearC, value, incV, clearV } = useStore();
  console.log(window.count);
  return (
    <>
      <Header />
      <ProductList />
    </>
  );
}
