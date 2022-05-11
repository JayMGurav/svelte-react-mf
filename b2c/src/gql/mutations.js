import { gql } from "@apollo/client/core";

export const ADD_PRODUCT_TO_B2B_CART = gql`
  mutation AddProductToB2BCart($productId: ID!, $quantity: Int!) {
    addProductToB2BCart(productId: $productId, quantity: $quantity) {
      id
      product {
        id
        name
        brand
        price
        img
      }
      quantity
    }
  }
`;

export const ADD_PRODUCT_TO_B2C_CART = gql`
  mutation AddProductToB2CCart($productId: ID!, $quantity: Int!) {
    addProductToB2CCart(productId: $productId, quantity: $quantity) {
      id
      product {
        id
        name
        brand
        price
        img
      }
      quantity
    }
  }
`;

export const REMOVE_PRODUCT_TO_B2C_CART = gql`
  mutation RemoveProductFromB2CCart($productId: ID!) {
    removeProductFromB2CCart(productId: $productId)
  }
`;

export const REMOVE_PRODUCT_TO_B2B_CART = gql`
  mutation RemoveProductFromB2BCart($productId: ID!) {
    removeProductFromB2BCart(productId: $productId)
  }
`;
