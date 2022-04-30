import { gql } from "apollo-server";

const initialTypeDef = gql`
  type CartProduct {
    product: ID!
    quantity: Int!
  }
`;
