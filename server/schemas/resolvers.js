const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
	Query: {
		users: async () => {
			return await User.find();
		},
		getUser: async (parent, { _id }) => {
			const user = await User.findById(_id);
			return user;
		},
		// me: async (parent, args, context) => {
		// 	if (context.user) {
		// 		const userData = await User.findOne({ _id: context.user.id }).select(
		// 			"__v -password"
		// 		);
		// 		return userData;
		// 	}
		// 	throw new AuthenticationError("You are Not logged in!");
		// },
	},
	Mutation: {
		addUser: async (parent, { email, password }) => {
			const user = await User.create({ email, password, name: "🐶 New Pet!" });
			const token = signToken(user);

			return { token, user };
		},
		updateUser: async (parent, { name, age, location, bio, _id }) => {
			const user = await User.findOneAndUpdate(
				{ _id },
				{ $set: { name, age, location, bio } }
			);
			return "true";
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
		likeUser: async (parent, { likedId }) => {
			console.log("hello");
			const likedUser = await User.findById({ id: likedId });
			return true;
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
