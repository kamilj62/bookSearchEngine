const typeDefs = `
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
    password: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Query {
    GET_ME: User
  }

  type Mutation {
    LOGIN_USER(email: String, password: String): Auth
    ADD_USER(username: String, email: String, password: String): Auth
    SAVE_B00K(bookAuthors: [String], bookId: ID!, image: String, link: String): User
    DELETE_BOOK(bookId: ID!): User
  }

  type Auth {
    token: String
    user: User
  }
`;

module.exports = typeDefs;
