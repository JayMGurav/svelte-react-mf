const { gql } = require("apollo-server-express");

const b2bCartTypeDef = gql`
  extend type Query {
    getB2BCart: [CartProduct!]
    getB2BCartQuantity: Int!
  }

  extend type Mutation {
    addProductToB2BCart(productId: ID!, quantity: Int!): CartProduct!
  }

  extend type Subscription {
    b2bCartUpdated: CartProduct!
  }
`;

module.exports = b2bCartTypeDef;
