import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
        email
        password
      }
    }
  }
`;
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($_id: ID!, $name: String, $age: String) {
    updateUser(_id: $_id, name: $name, age: $age) {
      response
    }
  }
`;

export const LIKE_USER = gql`
  mutation likeUser($id: String!) {
    likeUser(id: $id) {
      token
      user {
        id
      }
    }
  }
`;
