import { gql } from "apollo-server";

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
    product: Product
    products: [Product!]
  }

  extend type Mutation {
    addProduct(input: createProductInput!): Product!
  }
`;

export default productTypeDef;
