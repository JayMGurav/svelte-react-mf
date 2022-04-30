import { gql } from "apollo-server";

const b2cCartTypeDef = gql`
  extend type Query {
    getB2CCart: [CartProduct!]
  }

  extend type Mutation {
    addProductToB2CCart(id: ID!): CartProduct!
  }
`;

export default b2cCartTypeDef;
