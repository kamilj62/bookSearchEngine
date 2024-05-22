import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation LOGIN_USER($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation ADD_USER($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
        email
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation Mutation(
    $bookId: ID!
    $title: String!
    $description: String!
    $authors: [String]
    $image: String
    $link: String
  ) {
    saveBook(
      bookId: $bookId
      title: $title
      description: $description
      authors: $authors
      image: $image
      link: $link
    ) {
      username
      email
      bookCount
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      bookCount
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;
