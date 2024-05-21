const { gql } = require("apollo-server-express");

// GraphQL schema definition
const typeDefs = gql`
  type Book {
    authors: [String]
    description: String!
    bookId: ID!
    image: String
    link: String
    title: String!
  }

  type User {
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  input BookInput {
    bookId: String!
    authors: [String]
    title: String!
    description: String!
    image: String
    link: String
  }

  type Query {
    me: User
  }

  type Mutation {
    loginUser(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(
      bookId: ID!
      title: String!
      description: String!
      authors: [String]
      image: String
      link: String
    ): User
    deleteBook(bookId: ID!): User
  }

  type Auth {
    token: String
    user: User
  }
`;

module.exports = typeDefs;
