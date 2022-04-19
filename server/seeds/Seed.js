const profileData = require("./ProfileData.json");
const db = require("../config/connect");
const { User } = require("../models");

db.once("open", async () => {
	// clean database
	await User.deleteMany({});

	// bulk create User model
	const users = await User.insertMany(profileData);

	console.log("Fetch database seeded successfully!");
	process.exit(0);
});
