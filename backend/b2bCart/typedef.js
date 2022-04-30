import { gql } from "apollo-server";

const b2bCartTypeDef = gql`
  extend type Query {
    getB2BCart: [CartProduct!]
  }

  extend type Mutation {
    addProductToB2BCart(id: ID!): CartProduct!
  }
`;

export default b2bCartTypeDef;
