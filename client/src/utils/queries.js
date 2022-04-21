import { gql, useQuery } from '@apollo/client';


export const GET_USERS = gql`
  query GetUsers {
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