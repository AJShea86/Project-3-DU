const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
	Query: {
		users: async () => {
			return await User.find();
		},
		me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({ _id: context.user.id }).select(
					"__v -password"
				);
				return userData;
			}
			throw new AuthenticationError("You are Not logged in!");
		}
		
	},
	Mutation: {
		addUser: async(parent, { email, password}) => {
			const user = await User.create({email, password});
			const token = signToken(user);
			return { token, user }
		},
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });
			if (!user) {
				throw new AuthenticationError(
					"No profile found. Try another email or sign up!"
				);
			}

			const pw = await user.isCorrectPassword(password);

			if (!pw) {
				throw new AuthenticationError("Password is incorrect!");
			}

			const token = signToken(user);
			return { token, user };
		},
		// removeUser: async (parent, args, context) => {
		// 	if (context.user) {
		// 		const updatedUser = await User.findOneByIdAndDelete(context.user._id);
		// 		console.log(updatedUser);
		// 		return updatedUser;
		// 	}
		// 	throw new AuthenticationError("You are Not logged in!");
		// },
	},
};

module.exports = resolvers;
