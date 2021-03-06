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
	mutation updateUser(
		$_id: ID!
		$name: String
		$age: String
		$location: String
		$bio: String
	) {
		updateUser(
			_id: $_id
			name: $name
			age: $age
			location: $location
			bio: $bio
		) {
			response
		}
	}
`;

export const LIKE_USER = gql`
	mutation likeUser($user: String!) {
		likeUser(user: $user) {
			user {
				user
			}
		}
	}
`;
