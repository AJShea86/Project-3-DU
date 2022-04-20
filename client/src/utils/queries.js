import { gql } from '@apollo/client';


export const QUERY_USERS = gql`
  query allUsers {
    user {
      _id
      name
      pic
      age
      location
      bio
    }
  }
`;