const { gql } = require("apollo-server-express");

const b2cCartTypeDef = gql`
  extend type Query {
    getB2CCart: [CartProduct!]
    getB2CCartQuantity: Int!
  }

  extend type Mutation {
    addProductToB2CCart(id: ID!, quantity: Int!): CartProduct!
  }

  extend type Subscription {
    b2cCartUpdated: CartProduct!
  }
`;

module.exports = b2cCartTypeDef;
