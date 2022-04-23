const express = require("express");
const db = require("./config/connect");
const { ApolloServer } = require('apollo-server-express');
const path = require("path");
const { authMiddleware } = require('./utils/auth');
const { Schema, model } = require("mongoose");
const { typeDefs, resolvers } = require('./schemas');
const { User } = require("./models");


const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: authMiddleware,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/build')));
  }
  
  app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
  
const startApolloServer = async (typeDefs, resolvers) => {
	await server.start();
	server.applyMiddleware({ app });

	db.once("open", () => {
		app.listen(PORT, () => {
			console.log(`API server running on port ${PORT}!`);
			console.log(
				`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
			);
		});
	});
};

app.post('/user-like', async (req, res) => {
	const likedUser = await User.findById(req.body.id)
	const myUser = await User.findById(req.body.myId)
	myUser.likes.push(likedUser)
	likedUser.likes.map((user, i)=>{
		console.log(i, user._id, myUser._id, user._id.equals(myUser._id ) )
		if(user._id.equals(myUser._id ))
		{
			// means we have a match
			myUser.matches.push(likedUser._id)
			likedUser.matches.push(myUser._id)
		}
	})
	myUser.save()
	likedUser.save()
	

	// console.log(likedUser)
	// console.log(myUser)
	res.sendStatus(200);

  });
  


// db.once("open", () => {
// 	app.listen(PORT, () => {
// 		console.log(`Fetch server running on http://localhost:${PORT}!`);
// 	});
// });

startApolloServer(typeDefs, resolvers);
