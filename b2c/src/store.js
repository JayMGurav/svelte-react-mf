import create from "zustand/vanilla";
import zTs from "./zToStore";
 
const cartStore = create((set) => ({
  b2b: window.b2b || [],
  b2c: window.b2c || [],
  initCart: ({ b2c, b2b }) => {
    console.log("in initCart: ",{
      b2c,
      b2b,
    });
    window.b2b = b2b;
    window.b2c = b2c;
    return set({ b2b, b2c });
  },
  addToCart: async ({ item, cart }) => {
    set((state) => {
      const isPresent = state[cart].find(({ id }) => id === item.id);
      if (isPresent) {
        const newCart = state[cart].map((product) =>
          product.id === item.id ? item : product
        );
        window[cart] = newCart;
        return { [cart]: newCart };
      } else {
        const newCart = [...state[cart], item];
        window[cart] = newCart;
        return { [cart]: newCart };
      }
    });
  },
  removeFromCart: async ({ productId, cart }) => {
    set((state) => {
      const restCart = state[cart].filter(
        ({ product }) => product.id !== productId
      );
      window[cart] = restCart;
      return { [cart]: restCart };
    });
  },
  clearCart: () => {
    window.b2b = [];
    window.b2c = [];
    return set({ b2b: [], b2c: [] });
  },
}));

export const svelteZTSStore = zTs(cartStore);

export default cartStore;
