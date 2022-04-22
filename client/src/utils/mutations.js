import { gql } from "@apollo/client"

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

`
export const LOGIN = gql`
mutation login(
  $email: String!
  $password: String!
){
  login(
    UserInput: {
      email: $email
      password: $password
    }
  ){
    id email password token
  }
}
`