import { gql } from "@apollo/client";

export const GET_ME = gql`
  query GET_ME {
    GET_ME {
      _id
      User
    }
  }
`;
