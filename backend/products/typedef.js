const { gql } = require("apollo-server");

const productTypeDef = gql`
  type Product {
    id: ID!
    name: String!
    description: String
    price: Float!
    img: String
    brand: String
  }

  input createProductInput {
    name: String!
    price: Float!
    description: String
    img: String
    brand: String
  }

  extend type Query {
    product(id: ID!): Product
    products: [Product!]
  }

  extend type Mutation {
    addProduct(input: createProductInput!): Product!
  }
`;

module.exports = productTypeDef;
