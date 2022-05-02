const { gql } = require("apollo-server");

const b2bCartTypeDef = gql`
  extend type Query {
    getB2BCart: [CartProduct!]
  }

  extend type Mutation {
    addProductToB2BCart(id: ID!, quantity: Int!): CartProduct!
  }
`;

module.exports = b2bCartTypeDef;
