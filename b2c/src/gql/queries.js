import { gql } from "@apollo/client/core";

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      brand
      price
      img
    }
  }
`;

export const GET_B2C_CART = gql`
  query GetB2CCart {
    getB2CCart {
      id
      product {
        id
        name
        price
        brand
        img
      }
      quantity
    }
  }
`;

export const GET_B2B_CART = gql`
  query GetB2BCart {
    getB2BCart {
      id
      product {
        id
        name
        price
        brand
        img
      }
      quantity
    }
  }
`;

export const GET_B2B_CART_QUANTITY = gql`
  query GetB2BCart {
    getB2BCartQuantity
  }
`;

export const GET_B2C_CART_QUANTITY = gql`
  query GetB2BCart {
    getB2CCartQuantity
  }
`;
