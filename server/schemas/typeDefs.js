const { gql } = require('apollo-serveer-express');

const typeDefs = gql`
    type Mutation {
        login(username: String!, password: String!):Auth
        addUser(username: String!, password: String!):Auth
        removeUser(_id: ID!)
    }
    type User {
        _id: ID
        username: String!
        password: String!
        name: String!
        age: Int
        location: String!
        pic: String
        bio: String
    }
    type Auth {
        token: ID!
        user: User
    }
`

module.exports = typeDefs;