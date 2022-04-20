const express = require("express");
const db = require("./config/connect");
const { ApolloServer } = require('apollo-server-express');
const path = require("path");
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');

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
  
  app.get('/', (req, res) => {
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

// db.once("open", () => {
// 	app.listen(PORT, () => {
// 		console.log(`Fetch server running on http://localhost:${PORT}!`);
// 	});
// });

startApolloServer(typeDefs, resolvers);
