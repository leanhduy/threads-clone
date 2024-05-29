import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Query {
    posts: [Post]
  }
  type Post {
    id: ID!
    body: String!
    likeCounts: Int!
  }
`;
