const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		match: [/.+@.+\..+/, "Must match an email address!"],
	},
	password: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		// required: true,
		trim: true,
	},
	age: {
		type: Number,
	},
	location: {
		type: String,
		// required: true,
	},
	pic: {
		type: String,
	},
	bio: {
		type: String,
	},
});

// pre-save middleware to create password
userSchema.pre("save", async function (next) {
	if (this.isNew || this.isModified("password")) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}

	next();
});

// compare incoming password with hashed password
userSchema.methods.isCorrectPassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
