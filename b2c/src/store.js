import create from 'zustand/vanilla'
import zTs from "./zToStore"


const cartStore = create(set => ({
  b2b: window.b2b || [],
  b2c: window.b2c || [],
  initCart: ({
    b2c,
    b2b
  }) => {
    console.log({
      b2c,
      b2b
    })
    window.b2b = b2b;
    window.b2c = b2c;
    return set({ b2b, b2c });
  },
  addToCart: async ({item, cart}) => {
    set(state => {
      const isPresent = state[cart].find(({product}) => product.id === item.id);
      if(isPresent){
        const newCart = state[cart].map(({product, quantity}) => {
          if(product.id === item.id){
            return {
              product, 
              quantity: quantity + item.quantity
            }
          }else {
            return {product, quantity}
          }
        })
        window[cart] = newCart;
        return {[cart]: newCart}
      }else{
        const newCart = [...state[cart], item ];
        window[cart] = newCart;
        return { [cart]: newCart};
      }
    })
  },
  removeFromCart: async ({itemID, cart}) => {
    console.log({itemID, cart})

    set(state => {
      const restCart = state[cart].filter(({product}) => product.id !== itemID);
      window[cart] = restCart;
      return {[cart]: restCart}
    })
  },
  clearCart :  () => {
    window.b2b = [];
    window.b2c = [];
    return set({ b2b: [], b2c:[] })
  }
}));

export const svelteZTSStore = zTs(cartStore);

export default cartStore;