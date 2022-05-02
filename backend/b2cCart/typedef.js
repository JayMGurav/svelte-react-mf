const { gql } = require("apollo-server");

const b2cCartTypeDef = gql`
  extend type Query {
    getB2CCart: [CartProduct!]
  }

  extend type Mutation {
    addProductToB2CCart(id: ID!, quantity: Int!): CartProduct!
  }
`;

module.exports = b2cCartTypeDef;
