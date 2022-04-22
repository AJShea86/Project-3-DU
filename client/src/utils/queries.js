import { gql } from '@apollo/client';


export const GET_USERS = gql`
  query  users {
    users {
      _id
      name
      pic
      age
      location
      bio
    }
  }
`;

export const GET_USER = gql`
  query getUser($_id: ID!) {
    getUser(_id: $_id) {
      _id
      name
      pic
      age
      location
      bio
    }
  }
`;