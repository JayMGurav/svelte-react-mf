import { Observable } from "rxjs";
import React from "react";

const CartContext = React.createContext({});

function stateSetter(setter) {
  return (observable) => {
    observable.subscribe({
      next(x) {
        setter(x);
      },
    });
  };
}
