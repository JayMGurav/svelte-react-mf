const { gql } = require("apollo-server-express");

const b2bCartTypeDef = gql`
  extend type Query {
    getB2BCart: [CartProduct!]
  }

  extend type Mutation {
    addProductToB2BCart(id: ID!, quantity: Int!): CartProduct!
  }

  extend type Subscription {
    b2bCartUpdated: CartProduct!
  }
`;

module.exports = b2bCartTypeDef;
