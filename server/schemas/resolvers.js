const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
	Query: {
		me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({ _id: context.user.id }).select(
					"__v -password"
				);
				return userData;
			}
			throw new AuthenticationError("You are Not logged in!");
		},
	},
	Mutation: {
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });
			if (!user) {
				throw new AuthenticationError("You are Not logged in!");
			}
			const pw = await User.isCorrectPassword(password);
			if (!pw) {
				throw new AuthenticationError("Password is incorrect");
			}
			const token = signToken(user);
			return { token, user };
		},
		addUser: async (parent, args) => {
			const user = await User.create(args);
			const token = signToken(user);
			return { token, user };
		},
		removeUser: async (parent, args, context) => {
			if (context.user) {
				const updatedUser = await User.findOneByIdAndDelete(context.user._id);
				console.log(updatedUser);
				return updatedUser;
			}
			throw new AuthenticationError("You are Not logged in!");
		},
	},
};

module.exports = resolvers;
