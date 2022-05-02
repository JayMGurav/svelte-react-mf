const { gql } = require("apollo-server-express");
const { mergeTypeDefs } = require("@graphql-tools/merge");

const productTypeDef = require("./products/typedef");
const b2bCartTypeDef = require("./b2bCart/typedef");
const b2cCartTypeDef = require("./b2cCart/typedef");

const initialTypeDef = gql`
  type CartProduct {
    product: Product!
    quantity: Int!
  }

  type Query {
    _: String
  }

  type Mutation {
    _: String
  }

  type Subscription {
    b2cCartUpdated: CartProduct!
    b2bCartUpdated: CartProduct!
  }
`;

const types = [initialTypeDef, productTypeDef, b2bCartTypeDef, b2cCartTypeDef];

module.exports = mergeTypeDefs(types);
