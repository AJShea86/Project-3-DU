const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type User {
		_id: ID
		email: String!
		password: String!
		name: String!
		age: Int
		location: String
		pic: String
		bio: String
	}
	type Auth {
		token: ID!
		user: User
	}
	type Query {
		me: User
		users: [User]
	}
	type Mutation {
		login(email: String!, password: String!): Auth
		addUser(email: String!, password: String!): Auth
		# removeUser(_id: ID!): User
	}
`;

module.exports = typeDefs;
