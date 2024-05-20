import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation LOGIN_USER($email: String!, $password: String!) {
    LOGIN_USER(email: $email, password: $password) {
      token
      login {
        _id
        email
        password
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation Mutation($username: String!, $email: String!, $password: String!) {
    ADD_USER(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookData: BookInput!) {
    SAVE_BOOK(bookData: $bookData) {
      _id
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation REMOVE_BOOK($bookId: ID!) {
    REMOVE_BOOK(bookId: $bookId) {
      _id
      user
    }
  }
`;
